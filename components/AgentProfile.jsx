import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const AgentProfile = ({ data }) => {
  return (
    <div className="flex items-center gap-x-6 ml-5">
      <img className="h-16 w-16 rounded-full" src={data.image.publicUrl} />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {data.name} {data.lastName}
        </h3>
        <p
          style={{
            color: "DodgerBlue",
            fontSize: 12,
          }}
        >
          Cambiar asesor
        </p>

        <section
          style={{
            marginTop: 7,
            display: "flex",
          }}
        >
          <FaWhatsapp color="DodgerBlue" fontSize="1.5em" />

          <FaPhone color="DodgerBlue" fontSize="1.5em" className="ml-5" />
        </section>
      </div>
    </div>
  );
};

export default AgentProfile;
