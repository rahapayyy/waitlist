"use client"

import React, { useState, useEffect } from "react"

export default function CarouselPlugin() {
  const [currentText, setCurrentText] = useState("Bill Payment")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev === "Bill Payment" ? "Subscriptions" : "Bill Payment")
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-bold text-black">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <span className="text-center text-3xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-gray-800 w-full md:text-end mr-2 md:mr-4">The future of</span>
        <div className="h-[60px] md:h-[77px] w-full relative overflow-hidden">
          <div
            className={`absolute w-full h-full flex items-center justify-center md:justify-start transition-transform duration-500 top-0 ease-in-out ${
              currentText === "Bill Payment" ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <span className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl text-[#5136C1]">Bills Payment</span>
          </div>
          <div
            className={`absolute w-full h-full flex items-center justify-center md:justify-start transition-transform duration-500 ease-in-out ${
              currentText === "Subscriptions" ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <span className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl text-[#5136C1]">Subscriptions</span>
          </div>
        </div>
      </div>
    </div>
  )
}
