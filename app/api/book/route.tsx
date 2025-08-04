@@ .. @@
 export async function POST(req: NextRequest) {
-  const apiKey = process.env.CAL_KEY;
+  const apiKey = process.env.CAL_API_KEY;
   const eventTypeId = process.env.CAL_EVENT_TYPE_ID;
 
   if (!apiKey || !eventTypeId) {
-    return NextResponse.json({ error: 'Missing CAL_API_KEY or CAL_EVENT_TYPE_ID in environment' }, { status: 500 });
+    return NextResponse.json({ error: 'Missing CAL_API_KEY or CAL_EVENT_TYPE_ID in environment' }, { status: 500 });
   }