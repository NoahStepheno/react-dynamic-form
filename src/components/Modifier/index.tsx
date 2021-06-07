import React from "react";
import useSchema from "../../hooks/useSchema";
import { TextField } from "@material-ui/core";

export const Modifier = () => {
  const { edit, selectSchema }: any = useSchema();
  const { title, description } = selectSchema;
  return (
    <div>
      {title !== undefined && (
        <TextField
          value={title}
          label="标题"
          onChange={(e) => {
            edit({
              key: "title",
              value: e.target.value,
            });
          }}
        />
      )}
      {description !== undefined && (
        <TextField
          value={description}
          label="请输入描述"
          onChange={(e) => {
            edit({
              key: "description",
              value: e.target.value,
            });
          }}
        />
      )}
    </div>
  );
};
