import Profile from "@components/Profile";
import ActiveOrder from "@components/ActiveOrder";
import AgentProfile from "@components/AgentProfile";
import PropertiesTable from "@components/Table";

import clientData from "@src/ejemplo-cliente.json";
import propertiesData from "@src/ejemplo-propiedades.json";

export default function Home() {
  return (
    <div>
      <div className="card">
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
              </div>
            </div>
            <div className="bee-col bee-col-3 bee-col-w3">
              <div className="bee-block bee-block-1 bee-heading ">
                <h1>
                  <span className="tinyMce-placeholder">
                    <AgentProfile
                      data={
                        clientData.data.customer.propertyRequests[0].createdBy
                      }
                    />
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertiesTable data={propertiesData.data} agentInfo={clientData.data.customer.propertyRequests[0].createdBy}/>
      </div>
  );
}
