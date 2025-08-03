'use client'

import { ChatSection } from "./chat"
import { Fragment, useState } from "react"
import { FaX } from "react-icons/fa6"

export const NovaSections = () => {
  const [isActive, setIsActive] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])

  // console.log(selectedServices)

  return (
    <Fragment>
      {/* Original position placeholder */}
      {!isActive && (
        <div onClick={() => setIsActive(true)} className="relative bg-black/85 rounded-[20px] h-[468px] lg:h-[768px] w-full transition-all duration-700 ease-in-out cursor-pointer">
          <ChatSection active={isActive} setActive={setIsActive} services={selectedServices} setServices={setSelectedServices} />
        </div>
      )}

      {/* Fixed-position animated container */}
      <div
        className={`fixed inset-0 bg-black z-[100] transition-transform duration-700 ease-in-out overflow-y-scroll ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
          <div
            className="absolute top-4 right-4 hover:scale-105 hover:text-blue-300 text-2xl text-white flex items-center gap-2 cursor-pointer transition-transform duration-300 z-10"
            onClick={() => setIsActive(false)}
          >
            <FaX />
          </div>

        <ChatSection active={isActive} setActive={setIsActive} services={selectedServices} setServices={setSelectedServices} />
      </div>
    </Fragment>
  )
}
