export async function getTranscription(job_name: string) {
    const res = await fetch(`/api/get-transcription?job_name=${job_name}`);
    if (!res.ok) throw new Error("Failed to fetch transcription");
    return res.json();
  }
  