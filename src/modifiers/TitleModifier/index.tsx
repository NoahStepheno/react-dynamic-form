import { TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
import { pipe, prop } from "lodash/fp";
import { BaseProps } from "../types";

type Props = TextFieldProps & BaseProps;

const TitleModifier: React.FC<Props> = (props: Props) => {
  const { schema, uiSchema, editSchema, ...rest } = props;
  const { title } = schema;
  return (
    <TextField
      {...rest}
      label="标题"
      value={title}
      onChange={pipe(prop("target.value"), editSchema("title"))}
    />
  );
};

export default TitleModifier;
