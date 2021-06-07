import React from "react";

const widgetHoc = (Widget: any) => (props: any) => {
  return <Widget {...props} readonly />;
};

export default widgetHoc;
