import { FormControl, InputLabel, Select } from "@material-ui/core";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store/store";
import { BaseProps } from "../types";

const RequiredModifier: React.FC<BaseProps> = (props: BaseProps) => {
  const { schema, id } = props;

  const toggleRequired = useDispatch<Dispatch>().schema.toggleRequired;

  const value = useMemo(() => {
    return schema?.required?.includes(id);
  }, [id, schema]);

  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">是否必传</InputLabel>
      <Select native value={value ? 1 : 0} onChange={toggleRequired}>
        <option value={1}>是</option>
        <option value={0}>否</option>
      </Select>
    </FormControl>
  );
};

export default RequiredModifier;
