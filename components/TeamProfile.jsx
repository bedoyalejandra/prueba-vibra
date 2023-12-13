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
          }}
        >
          <FaWhatsapp color="DodgerBlue" fontSize="1.5em" />
          <FaPhone color="DodgerBlue" fontSize="1.5em" className="ml-5" />
        </section>
      </div>
    </div>
  );
};

export default TeamProfile;
