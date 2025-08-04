import { NextRequest, NextResponse } from 'next/server';

const VOICEFLOW_API_KEY = process.env.VOICEFLOW_API_KEY;

export async function POST(req: NextRequest) {
  if (!VOICEFLOW_API_KEY) {
    return NextResponse.json({ error: 'Missing VOICEFLOW_API_KEY in environment' }, { status: 500 });
  }
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: VOICEFLOW_API_KEY,
      },
}