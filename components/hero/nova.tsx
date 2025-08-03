@@ .. @@
 export const NovaSections = () => {
   const [isActive, setIsActive] = useState(false)
-  const [selectedServices, setSelectedServices] = useState([])
+  const [selectedServices, setSelectedServices] = useState<string[]>([])