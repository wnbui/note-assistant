import AudioRecorder from "../components/AudioRecorder";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center p-5 text-center">
        <h1 className="text-3xl font-bold mb-4 p-5">Record your lecture</h1>
        <div className="p-5">
          <AudioRecorder />
        </div>
      </div>
    </div>
  );
}
