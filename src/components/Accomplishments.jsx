import React from "react";

export const Accomplishments = (props) => {
  return (
    <div id="Accomplishments" className="text-center">
      <div className="container-fluid">
        <div className="section-title">
          <h2>Accomplishments</h2>
          <p>
            Below are a list of projects and accomplishments I have completed in my professional career.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
