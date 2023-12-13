
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const TeamProfile = ({ data }) => {
  return (
    <div className="flex items-center gap-x-6 ml-5">
      <img className="h-16 w-16 rounded-full" src={data.image.publicUrl} />
      <div>

        <p
          style={{
            color: "DodgerBlue",
            fontSize: 12,
          }}
        >
          {data.name}
        </p>

        <section
          style={{
            marginTop: 7,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <section
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              flexDirection: "column",
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
    </div>
  );
};

export default TeamProfile;
