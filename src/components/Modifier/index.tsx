import React from "react";
import { useSelectSchema } from "../../hooks/useSelectSchema";
import { TextField } from "@material-ui/core";
import schema from "../../schema";

export const Modifier = () => {
  const selectSchema: any = useSelectSchema();
  const { title, description } = selectSchema;
  return (
    <div>
      {title !== undefined && (
        <TextField
          value={title}
          label="标题"
          onChange={(e) => {
            schema.edit("title", e.target.value);
          }}
        />
      )}
      {description !== undefined && (
        <TextField
          value={description}
          label="请输入描述"
          onChange={(e) => {
            schema.edit("description", e.target.value);
          }}
        />
      )}
    </div>
  );
};
