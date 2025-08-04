@@ .. @@
 import { NextRequest, NextResponse } from 'next/server';
 
-const APIKEY = process.env.API_KEY;
+const VOICEFLOW_API_KEY = process.env.VOICEFLOW_API_KEY;
 
 export async function POST(req: NextRequest) {
-  if (!APIKEY) {
-    return NextResponse.json({ error: 'Missing API_KEY in environment' }, { status: 500 });
+  if (!VOICEFLOW_API_KEY) {
+    return NextResponse.json({ error: 'Missing VOICEFLOW_API_KEY in environment' }, { status: 500 });
   }
@@ .. @@
       headers: {
         accept: 'application/json',
         'content-type': 'application/json',
-        Authorization: APIKEY,
+        Authorization: VOICEFLOW_API_KEY,
       },