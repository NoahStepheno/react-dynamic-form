import React, { useMemo } from "react";
import useSchema from "../../hooks/useSchema";
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store/store";
import TextModifier from "../../widgets/TextWidget/TextModifier";
import RadioModifier from "../../widgets/RadioWidget/RadioModifier";
import { modifiers } from "../../modifiers";

const MODIFIER_MAPPER = {
  text: TextModifier,
  radio: RadioModifier,
};

export const Modifier = () => {
  const { edit, selectSchema, selectUISchema }: any = useSchema();
  const { title, description } = selectSchema;
  const required = useSelector(
    (state: RootState) => state.schema.JSONSchema?.required
  );
  const selectUuid = useSelector((state: RootState) => state.schema.selectUuid);
  const toggleRequired = useDispatch<Dispatch>().schema.toggleRequired;

  const currentIsRequired = useMemo(() => {
    return required.includes(selectUuid);
  }, [required, selectUuid]);

  if (title === undefined) {
    return null;
  }

  const type: keyof typeof MODIFIER_MAPPER = selectUISchema["ui:widget"];

  const CurrentModifier: any = MODIFIER_MAPPER[type];

  const editSchema = (key: string) => (value: string) => edit({ key, value });

  if (!CurrentModifier) {
    return null;
  }

  return (
    <div style={{ padding: 20 }}>
      {CurrentModifier && (
        <div className="modifier-field__wrapper">
          <CurrentModifier
            modifiers={modifiers}
            schema={selectSchema}
            uiSchema={selectUISchema}
            editSchema={editSchema}
            id={selectUuid}
            toggleRequired={toggleRequired}
          />
        </div>
      )}
    </div>
  );
};
