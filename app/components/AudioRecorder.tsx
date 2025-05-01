"use client";

import { useState, useRef } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import uploadAudio from "../api/lib/upload";

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const recorderRef = useRef(new MicRecorder({ bitRate: 128 }));

  const startRecording = async () => {
    try {
      await recorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      const [buffer, blob] = await recorderRef.current.stop().getMp3();

      setAudioUrl(URL.createObjectURL(blob));

      const formData = new FormData();
      formData.append("file", blob, "recording.mp3");

      setLoading(true);
      setStatusMessage("Uploading audio...");

      const uploadResponse = await uploadAudio(formData);
      const { job_name } = uploadResponse;

      setStatusMessage("Transcribing audio, please wait...");

      let attempts = 0;
      const maxAttempts = 12;

      while (attempts < maxAttempts) {
        const response = await fetch(
          `/api/get-transcription?job_name=${job_name}`
        );
        const data = await response.json();

        if (response.ok && data.status === "COMPLETED" && data.transcription) {
          setTranscription(data.transcription);
          setStatusMessage("Transcription complete!");
          break;
        }

        await new Promise((resolve) => setTimeout(resolve, 5000));
        attempts++;
      }

      if (attempts === maxAttempts) {
        setStatusMessage("Timeout: Transcription not ready.");
      }
    } catch (error) {
      console.error("Error stopping recording:", error);
      setStatusMessage("Error uploading or transcribing audio.");
    } finally {
      setRecording(false);
      setLoading(false);
    }
  };

  return (
    <div className="text-center space-y-6">
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`px-6 py-3 rounded ${
          recording ? "bg-red-500" : "bg-green-500"
        } text-white text-lg`}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      {audioUrl && <audio controls src={audioUrl} className="mx-auto mt-4" />}

      {loading && (
        <div className="flex flex-col items-center space-y-2">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          <p>{statusMessage}</p>
        </div>
      )}

      {!loading && transcription && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Transcription:</h2>
          <p className="bg-gray-100 p-4 rounded">{transcription}</p>
        </div>
      )}
    </div>
  );
}
