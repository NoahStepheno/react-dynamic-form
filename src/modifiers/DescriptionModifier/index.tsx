import { TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
import { pipe, prop } from "lodash/fp";
import { BaseProps } from "../types";

type Props = TextFieldProps & BaseProps;
const DescriptionModifier: React.FC<Props> = (props: Props) => {
  const { schema, uiSchema, editSchema, ...rest } = props;
  const { description } = schema;
  return (
    <TextField
      {...rest}
      label="描述"
      value={description}
      onChange={pipe(prop("target.value"), editSchema("description"))}
    />
  );
};

export default DescriptionModifier;
