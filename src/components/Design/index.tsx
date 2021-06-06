import React, { useEffect, useState } from "react";
import Form from "@rjsf/material-ui";
import schema from "../../schema/index";

export const Design = () => {
  const [JSONSchema, setJSONSchema] = useState<any>(null);
  const [uiSchema, setUISchema] = useState<any>(null);
  useEffect(() => {
    schema.on((s: any) => {
      setJSONSchema(s.JSONSchema);
      setUISchema(s.uiSchema);
    });
  }, []);

  useEffect(() => {
    console.log("json: ", JSONSchema);
  }, [JSONSchema]);

  if (!JSONSchema) {
    return null;
  }

  // console.log({ schemaIns });

  return (
    <div
      onDragEnd={(evt) => {
        console.log(evt);
      }}
      onDragOver={(evt) => evt.preventDefault()}
      style={{ width: "100%", height: "100%" }}
    >
      <Form schema={JSONSchema} uiSchema={uiSchema} />
    </div>
  );
};
