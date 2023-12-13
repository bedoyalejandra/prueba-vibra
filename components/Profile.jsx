import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Profile = ({ data }) => {
  return (
    <div className="flex items-center gap-x-6">
      <img
        className="h-16 w-16 rounded-full"
        src="https://theboardr.blob.core.windows.net/headshots/1305_900.jpg"
      />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {data.name}
        </h3>
        <h3 className="text-base tracking-tight text-gray-900 text-sm	">
          {data.phone}
        </h3>
        <h3 className="text-base tracking-tight text-gray-900 text-sm">
          {data.email}
        </h3>

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

export default Profile;
