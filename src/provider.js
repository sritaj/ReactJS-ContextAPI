import React, { useState } from "react";

import PackageContext from "./context";

const provider = (props) => {
  const [mission, setMission] =
    useState[{ mname: "Go to europe", agent: 707, accept: "not accepted" }];
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};
