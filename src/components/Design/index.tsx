import React, { useEffect, useMemo, useState } from "react";
import Form from "@rjsf/material-ui";
import { DesignTextWidget } from "../Widget/TextWidget";
import DesignFieldTemplate from "../DesignFieldTemplate";
import useSchema from "../../hooks/useSchema";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import "./index.css";
import { DesignRadioWidget } from "../Widget/RadioWidget";

export const Design = () => {
  const { JSONSchema, uiSchema }: any = useSchema();
  const [device, setDevice] = useState<string>("iphonex");

  const deviceStyle = useMemo(() => {
    switch (device) {
      case "pc":
        return { width: "100%", height: "100%" };
      case "iphonex":
        return { width: 375, height: 812 };
      case "iphone6/7/8":
        return { width: 375, height: 667 };
      case "iphone6/7/8 plus":
        return { width: 414, height: 736 };
      default:
        return { width: "100%", height: "100%" };
    }
  }, [device]);

  if (!JSONSchema) {
    return null;
  }

  console.log({ JSONSchema });

  const widgets = {
    TextWidget: DesignTextWidget,
    RadioWidget: DesignRadioWidget,
  };

  return (
    <div
      onDragEnd={(evt) => {
        console.log(evt);
      }}
      onDragOver={(evt) => evt.preventDefault()}
      className="design"
      style={{
        width: "100%",
        height: "100%",
        background: "#f0f0f0",
        display: "flex",
      }}
    >
      <div className="device-control__wrapper">
        <FormControl>
          <InputLabel id="demo-simple-select-label">设备型号</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={device}
            onChange={(e) => setDevice(String(e?.target?.value))}
          >
            <MenuItem value={"pc"}>pc</MenuItem>
            <MenuItem value={"iphonex"}>iphonex</MenuItem>
            <MenuItem value={"iphone6/7/8"}>iphone6/7/8</MenuItem>
            <MenuItem value={"iphone6/7/8 plus"}>iphone6/7/8 plus</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="design-device__container">
        <div
          className="design-device"
          style={{ width: deviceStyle.width, height: deviceStyle.height }}
        >
          <Form
            FieldTemplate={DesignFieldTemplate}
            schema={JSONSchema}
            uiSchema={uiSchema}
            widgets={widgets}
          />
        </div>
      </div>
    </div>
  );
};
