import { TextFieldProps } from "@material-ui/core";
import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import React from "react";

export enum Modifier {
  TitleModifier = "TitleModifier",
  DescriptionModifier = "DescriptionModifier",
  RequiredModifier = "RequiredModifier",
}

export type Modifiers = Record<keyof typeof Modifier, React.FC<any>>;

export type ModifierKeys = keyof typeof Modifier;

export type BaseProps = {
  schema: JSONSchema7;
  uiSchema: UiSchema;
  editSchema: (key: string) => (value: string) => void;
  id: string;
};
