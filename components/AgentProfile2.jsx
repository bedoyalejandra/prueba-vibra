import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const AgentProfile2 = ({ data }) => {
  return (
    <div
      className="flex items-center gap-x-6 ml-5"
      style={{
        marginTop: 7,
        display: "flex",
      }}
    >
      <img className="h-16 w-16 rounded-full" src={data.image.publicUrl} />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 text-left ">
          {data.name} {data.lastName}
        </h3>
        <p
          className="text-left "
          style={{
            color: "DodgerBlue",
            fontSize: 14,
          }}
        >
          Cambiar asesor
        </p>
      </div>
      <section
        style={{
          marginTop: 7,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
          flexDirection: "row",
          overflow: "auto",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <FaWhatsapp color="DodgerBlue" fontSize="1.5em" />
          <p
            style={{
              color: "DodgerBlue",
              fontSize: 10,
            }}
          >
            Mensaje
          </p>
        </section>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            marginLeft: 20,
          }}
        >
          <FaPhone color="DodgerBlue" fontSize="1.5em" />
          <p
            style={{
              color: "DodgerBlue",
              fontSize: 10,
            }}
          >
            Llamar
          </p>
        </section>
      </section>
    </div>
  );
};

export default AgentProfile2;
