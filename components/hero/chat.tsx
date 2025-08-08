import { VanishInput } from "./vanishinput";
import Image from "next/image";
import './chat.css'

export const ChatSection = ({active, setActive, services, setServices}:{active: boolean, setActive: Function, services: Array<string>, setServices: Function}) => {
  return (
    <section className={`w-full bg-text-secondary/10 border-t-[2px] border-white/20 relative ${
      active ? 'min-h-screen' : 'min-h-[240px] lg:min-h-[768px]'
    } transition-all duration-500 ease-in-out parent`}>
        {active ? <div className="blue-activeglow pointer-events-none" /> : <div className="blue-glow pointer-events-none" />}
        <Image src="/robot1.png" className={`mx-auto ${active ? 'mt-4' : 'mt-20'}`} alt="Integration.ai Icon" width={40} height={30} />
        <div className="max-w-7xl relative mx-auto ">
          <VanishInput placeholder="Hi I'm Nova...How can I help you?" type="text" active={active} setActive={setActive} services={services} setServices={setServices} />
        </div>
    </section>
  )
};