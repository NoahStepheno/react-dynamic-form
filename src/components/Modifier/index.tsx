import React, { useMemo } from "react";
import useSchema from "../../hooks/useSchema";
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store/store";

export const Modifier = () => {
  const { edit, selectSchema }: any = useSchema();
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

  return (
    <div style={{ padding: 20 }}>
      <div className="modifier-field__wrapper">
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
      </div>
      <div className="modifier-field__wrapper">
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
      </div>
      <div className="modifier-field__wrapper">
        <FormControl>
          <InputLabel htmlFor="age-native-simple">是否必传</InputLabel>
          <Select
            native
            value={currentIsRequired ? 1 : 0}
            onChange={() => toggleRequired()}
            inputProps={{
              name: "age",
              id: "age-native-simple",
            }}
          >
            <option value={1}>是</option>
            <option value={0}>否</option>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
