import React, { useEffect, useState } from "react";
import Form from "@rjsf/material-ui";
import cx from "classnames";
import { DesignTextWidget } from "../Widget/TextWidget";
import DesignFieldTemplate from "../DesignFieldTemplate";
import useSchema from "../../hooks/useSchema";

export const Design = () => {
  const { JSONSchema, uiSchema }: any = useSchema();

  if (!JSONSchema) {
    return null;
  }

  const widgets = {
    TextWidget: DesignTextWidget,
  };

  return (
    <div
      onDragEnd={(evt) => {
        console.log(evt);
      }}
      onDragOver={(evt) => evt.preventDefault()}
      style={{ width: "100%", height: "100%" }}
    >
      <Form
        FieldTemplate={DesignFieldTemplate}
        schema={JSONSchema}
        uiSchema={uiSchema}
        widgets={widgets}
      />
    </div>
  );
};
