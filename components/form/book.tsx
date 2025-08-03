@@ .. @@
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
-    const [bookingStatus, setBookingStatus] = useState<null | string>(null);
+    const [bookingStatus, setBookingStatus] = useState<string | null>(null);
     const [currentDate, setCurrentDate] = useState(new Date());
     const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     const [bgLoading, setBGLoading] = useState(true)
@@ .. @@
                             <div className="text-white text-xl pr-4 cursor-pointer hover:scale-105" onClick={() => close()}>
-                                {/* @ts-ignore */}
                                 <FaX />
                             </div>