import { useEffect, useState } from "react";
import schema from "../schema";

export const useSelectSchema = () => {
  const [modifierSchema, setModifierSchema] = useState({});
  useEffect(() => {
    schema.on((params: any) => {
      setModifierSchema(schema.JSONSchema.properties[params.selectUuid]);
    });
  }, []);

  return modifierSchema;
};
