import Image from "next/image";
import React from "react";

const Signature = () => {
  return (
    <div className="border-t border-gray-300  flex justify-around items-center align-middle">
      <div>
        <Image
          src={require("../../public/sign.png")}
          alt="sign"
          style={{
            visibility: "hidden",
            maxWidth: "100px",
          }}
        />
        <span className=" text-gray-400 text-xs">Signature of the party</span>
      </div>

      <div>
        <Image
          src={require("../../public/sign.png")}
          alt="sign"
          style={{
            maxWidth: "100px",
          }}
        />
        <span className=" text-gray-400 text-xs">
          For Sree Rajendra Jewel Palace
        </span>
      </div>
    </div>
  );
};

export default Signature;
