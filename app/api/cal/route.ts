@@ .. @@
   // Generate default startTime and endTime if not provided
   const now = new Date();
   const oneWeekLater = new Date();
   oneWeekLater.setDate(now.getDate() + 1);
 
-  if (!startTime) startTime = now.toString();
-  if (!endTime) endTime = oneWeekLater.toString();
+  if (!startTime) startTime = now.toISOString();
+  if (!endTime) endTime = oneWeekLater.toISOString();