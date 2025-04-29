import { NextRequest, NextResponse } from "next/server";
import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient({
  region: process.env.AWS_REGION || "us-east-1",
});

const TABLE_NAME = process.env.NEXT_PUBLIC_DYNAMODB_TABLE_NAME || "Transcriptions";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const jobName = searchParams.get("job_name");

  if (!jobName) {
    return NextResponse.json({ error: "Missing job_name parameter" }, { status: 400 });
  }

  try {
    const params = {
      TableName: TABLE_NAME,
      Key: { JobName: jobName },
    };

    const result = await dynamodb.get(params).promise();

    if (!result.Item) {
      return NextResponse.json({ error: "Transcription not found" }, { status: 404 });
    }

    const { Status, TranscriptionText } = result.Item;

    return NextResponse.json({
      job_name: jobName,
      status: Status,
      transcription: TranscriptionText || null,
    });

  } catch (error: any) {
    console.error("DynamoDB Error:", error);
    return NextResponse.json({ error: "Server error fetching transcription" }, { status: 500 });
  }
}