import React from "react"
import EmmaImg from "@/components/OIP.png"
import Image from "next/image"
import Link from "next/link"

function Actors({actor}) {
  return (
    <Link href={'/actors/1'}>
    <div class="flex flex-wrap gap-5 items-center justify-center ">
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-90 w-60">
          <Image
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
            src={EmmaImg}
            alt="Img"
          />
        </div>
        <div class="absolute inset-0  bg-black/50 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="text-2xl font-bold text-whie">Emma Watson</h1>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Actors