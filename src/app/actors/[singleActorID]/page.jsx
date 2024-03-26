import React from "react";
import EmmaImg from "@/components/OIP.png";
import Image from "next/image";

export default function SingleActor() {
  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content md:flex-row">
          <Image
            src={EmmaImg}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Img"
          />
          <div className="m-5">
            <h1 className="text-5xl font-bold">Emma Watson</h1>
            <p className="max-w-screen-md py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>Gender: Female</li>
              <li>Birthday: 11/2/2011</li>
              <li>Popularity: 4.3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}