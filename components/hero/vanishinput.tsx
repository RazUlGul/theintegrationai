import axios from "axios";
import Image from "next/image";
import { IoReturnDownForwardSharp } from "react-icons/io5";
import type { v4 as uuidv4Type } from 'uuid';
import './index.css'

// Dynamically import uuid to avoid SSR issues
const getUuid = async (): Promise<string> => {
  const { v4: uuidv4 } = await import('uuid');
  return uuidv4();
};

const useSessionUserId = () => {
  useEffect(() => {
    const initializeUserId = async () => {
      let existingId = sessionStorage.getItem("nova-user-id");
      if (!existingId) {
        existingId = await getUuid();
        sessionStorage.setItem("nova-user-id", existingId);
      }
      setUserId(existingId);
    }
    
    initializeUserId();
  }, []);
}