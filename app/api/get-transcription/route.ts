import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const job_name = searchParams.get("job_name");

  if (!job_name) {
    return new Response(
      JSON.stringify({ error: "Missing job_name parameter" }),
      { status: 400 }
    );
  }

  try {
    const gatewayUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(
      `${gatewayUrl}/get-transcription?job_name=${encodeURIComponent(job_name)}`
    );

    if (!response.ok) {
      return new Response(await response.text(), { status: response.status });
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching transcription:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch transcription" }),
      { status: 500 }
    );
  }
}