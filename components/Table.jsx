import React from "react";
import { FaBath, FaRulerHorizontal, FaCar, FaPhone } from "react-icons/fa6";
import { IoLocationOutline, IoBed } from "react-icons/io5";
import AgentProfile from "@components/AgentProfile";
import TeamProfile from "@components/TeamProfile";
import { FaWhatsapp } from "react-icons/fa";

const PropertiesTable = ({ data, agentInfo }) => {
  return (
    <div
      style={{
        overflowX: "auto",
      }}
    >
      <table className="styled-table">
        <thead>
          <tr>
            <th>Inmueble</th>
            <th>Aliado o asesor</th>
            <th>Estado</th>
            <th>Propietario (Confidencial)</th>
            <th>Dirección inmueble / Notas (Confidencial)</th>
          </tr>
        </thead>
        <tbody>
          {data.emailFincaRaizs.map(function (item, i) {
            return (
              <tr key={i}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      alignContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      className="h-20 rounded"
                      src={item.property.images[0].image.publicUrl}
                    />
                    <div
                      style={{
                        margin: 10,
                      }}
                    >
                      <h1 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {item.property.type}
                      </h1>

                      <div
                        key={i}
                        style={{
                          color: "grey",
                          display: "flex",
                          alignItems: "center",
                          alignContent: "center",
                          flexDirection: "row",
                          fontSize: 12,
                        }}
                      >
                        <IoLocationOutline /> {item.property.location.city}
                      </div>

                      <h1 className="text-base leading-7 tracking-tight text-gray-900">
                        $ {item.property.price}
                      </h1>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          alignContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <div className="icon-row">
                          <IoBed /> {item.property.bedrooms}
                        </div>
                        <div className="icon-row">
                          <FaBath /> {item.property.bathrooms}
                        </div>
                        <div className="icon-row">
                          <FaRulerHorizontal /> {item.property.area}
                        </div>
                        <div className="icon-row">
                          <FaCar /> {item.property.parkingSpots}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <AgentProfile data={agentInfo} />
                </td>
                <td>
                  <div>
                    <div
                      style={{
                        color: "grey",
                        alignItems: "center",
                        alignContent: "center",
                        flexDirection: "row",
                        fontSize: 12,
                      }}
                    >
                      &#128994;
                      {item.property.status}
                    </div>
                  </div>
                  <p
                    style={{
                      color: "grey",

                      fontSize: 12,
                    }}
                  >
                    CodVibra: {item.property.number}
                  </p>
                  <p
                    style={{
                      color: "grey",

                      fontSize: 12,
                    }}
                  >
                    CodInterno: {item.property.internalCode}
                  </p>
                  <div
                    style={{
                      color: "DodgerBlue",
                      alignItems: "center",
                      alignContent: "center",
                      flexDirection: "row",
                      fontSize: 12,
                    }}
                  >
                    <p>Editar</p>
                    <p>Ver inmueble</p>
                  </div>
                </td>
                <td>
                  <center>
                    <p
                      style={{
                        color: "DodgerBlue",
                        fontSize: 12,
                      }}
                    >
                      {item.property.ownerName}
                    </p>
                    <p
                      style={{
                        color: "grey",
                        fontSize: 12,
                      }}
                    >
                      {item.property.ownerPhone}
                    </p>
                  </center>
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
                </td>
                <td>
                  <div
                    key={i}
                    style={{
                      color: "grey",
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      flexDirection: "row",
                      fontSize: 12,
                    }}
                  >
                    <IoLocationOutline />{" "}
                    {item.property.location.formattedAddress}
                  </div>
                  <div
                    style={{
                      margin: "10px",
                      color: "grey",
                      fontSize: 12,
                    }}
                  >
                    {item.property.ownerNotes}
                  </div>
                </td>
              </tr>
            );
          })}

          {data.emailFincaRaizs.map(function (item, i) {
            return (
              <tr key={i}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      alignContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <img
                      className="h-20 rounded"
                      src={item.property.images[0].image.publicUrl}
                    />
                    <div
                      style={{
                        margin: 10,
                      }}
                    >
                      <h1 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {item.property.type}
                      </h1>

                      <div
                        key={i}
                        style={{
                          color: "grey",
                          display: "flex",
                          alignItems: "center",
                          alignContent: "center",
                          flexDirection: "row",
                          fontSize: 12,
                        }}
                      >
                        <IoLocationOutline /> {item.property.location.city}
                      </div>

                      <h1 className="text-base leading-7 tracking-tight text-gray-900">
                        $ {item.property.price}
                      </h1>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          alignContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <div className="icon-row">
                          <IoBed /> {item.property.bedrooms}
                        </div>
                        <div className="icon-row">
                          <FaBath /> {item.property.bathrooms}
                        </div>
                        <div className="icon-row">
                          <FaRulerHorizontal /> {item.property.area}
                        </div>
                        <div className="icon-row">
                          <FaCar /> {item.property.parkingSpots}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <TeamProfile data={item.property.team} />
                </td>
                <td>
                  <p
                    style={{
                      color: "grey",

                      fontSize: 12,
                    }}
                  >
                    CodVibra: {item.property.number}
                  </p>

                  <div
                    style={{
                      color: "DodgerBlue",
                      alignItems: "center",
                      alignContent: "center",
                      flexDirection: "row",
                      fontSize: 12,
                    }}
                  >
                    <p>Ver inmueble</p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesTable;
