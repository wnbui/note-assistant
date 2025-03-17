"use client"; // Client Component

import { useState, useRef } from "react";
import uploadAudio from "../api/lib/upload";

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    mediaRecorder.current.onstop = async () => {
      try {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        setAudioUrl(URL.createObjectURL(audioBlob));

        const formData = new FormData();
        formData.append("file", audioBlob, "recording.wav");

        console.log("Uploading audio...");
        const response = await uploadAudio(formData);
        console.log("Upload success:", response);
        alert("Audio uploaded successfully!");
      } catch (error) {
        console.error("Upload failed:", error);
        alert("Upload failed: ");
      }
    };

    mediaRecorder.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    setRecording(false);
  };

  return (
    <div className="text-center">
      <button
        onClick={recording ? stopRecording : startRecording}
        className={`px-4 py-2 rounded ${
          recording ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioUrl && <audio controls src={audioUrl} className="mt-4"></audio>}
    </div>
  );
}
