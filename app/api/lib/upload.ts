"use server";

export default async function uploadAudio(formData: FormData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Upload failed: ${errorData.error || "Unknown error"}`);
  }

  return response.json();
}