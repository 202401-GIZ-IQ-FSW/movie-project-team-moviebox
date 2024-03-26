import React from "react"
import EmmaImg from "@/components/OIP.png"
import Image from "next/image"
import Link from "next/link"

export default function SingleActor() {
  return (
   
      <div className="mx-3 my-4">
      <div className="d-flex align-items-center">
        <div className="col-3">
          <Image src={EmmaImg} alt="Img" />
        </div>
        <div className="mx-5">
          <h3>Emma Watson</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo nulla consectetur quaerat ab ducimus delectus, quia
            voluptatum odit cupiditate quibusdam.
          </p>
          <div className="d-flex">
            <p className="px-2 py-1 text-white rounded me-2">Birthday</p>
            <p className="px-2 py-1 text-white rounded me-2">Gender</p>
            <p className="px-2 py-1 text-white rounded me-2">Popularity</p>
          </div>
        </div>
      </div>
    </div>


  )
}
