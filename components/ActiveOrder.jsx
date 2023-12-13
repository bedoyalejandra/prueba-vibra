import React from "react";
import {
  FaHouseMedicalFlag,
  FaBath,
  FaRulerHorizontal,
  FaCar,
} from "react-icons/fa6";
import { IoLocationOutline, IoBed } from "react-icons/io5";
import parse from "html-react-parser";

const ActiveOrder = ({ data }) => {
  var description = "";

  for (var char of data.description) {
    if (char != " " && char === char.toUpperCase()) {
      description += "<br>";
    }
    description += char;
  }
  return (
    <div>
      <h1
        style={{
          color: "DodgerBlue",
          fontSize: 12,
        }}
      >
        • Pedido activo en mi red de aliados
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
        <FaHouseMedicalFlag size={50} color="grey" className="m-5" />
        <div
          style={{
            margin: 10,
          }}
        >
          <h1 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {data.propertyTypes.map((object) => object.name + " ")}
          </h1>

          {data.locations.map(function (item, i) {
            return (
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
                <IoLocationOutline /> {item.term}
              </div>
            );
          })}
          <h1 className="text-base leading-7 tracking-tight text-gray-900">
            $ {data.budget}
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
              <IoBed /> {data.bedrooms}
            </div>
            <div className="icon-row">
              <FaBath /> {data.bathrooms}
            </div>
            <div className="icon-row">
              <FaRulerHorizontal /> {data.area}
            </div>
            <div className="icon-row">
              <FaCar /> {data.parkingSpots}
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "10px",
            color: "grey",
            fontSize: 12,
          }}
        >
          {parse(description)}
        </div>
      </div>
    </div>
  );
};

export default ActiveOrder;
