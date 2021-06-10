import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { Modifiers } from "../../modifiers/types";

export interface Props {
  modifiers: Modifiers;
  schema: JSONSchema7;
  uiSchema: UiSchema;
  editSchema: (data: { key: string; value: string }) => void;
}
