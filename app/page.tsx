import Profile from "@components/Profile";
import ActiveOrder from "@components/ActiveOrder";
import AgentProfile2 from "@components/AgentProfile2";
import PropertiesTable from "@components/Table";
import { FaRegEye, FaAsymmetrik } from "react-icons/fa";

import clientData from "@src/ejemplo-cliente.json";
import propertiesData from "@src/ejemplo-propiedades.json";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="bee-row bee-row-1">
        <div className="bee-row-content">
          <div className="bee-col bee-col-1 bee-col-w3">
            <div className="bee-block bee-block-1 bee-paragraph">
              <Profile data={clientData.data.customer} />
            </div>
          </div>
          <div className="bee-col bee-col-2 bee-col-w6">
            <div className="bee-block bee-block-1 bee-heading">
              <h1>
                <span className="tinyMce-placeholder">
                  <ActiveOrder
                    data={clientData.data.customer.propertyRequests[0]}
                  />
                </span>
              </h1>
              <AgentProfile2
                data={clientData.data.customer.propertyRequests[0].createdBy}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row-left">
        <div className="button w-100 ">
          <FaRegEye className="mr-2 " />
          <p className="text-stone-500	"> Inmuebles vistos</p>
        </div>
        <div className="button w-100 ">
          <FaAsymmetrik className="mr-2 text-violet-500	" />
          <p className="text-stone-500	"> Compartir inmuebles sugeridos</p>
        </div>
      </div>
      <PropertiesTable
        data={propertiesData.data}
        agentInfo={clientData.data.customer.propertyRequests[0].createdBy}
      />
    </div>
  );
}
