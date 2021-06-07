import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../store/store";

const useSchema = () => {
  const schema = useSelector((state: RootState) => state.schema);
  const dispatch = useDispatch<Dispatch>().schema;

  const selectSchema = useMemo(() => {
    return Object.assign(
      {},
      schema.JSONSchema.properties[schema.selectUuid] || {}
    );
  }, [schema.selectUuid, schema.JSONSchema]);

  return {
    schema,
    selectUuid: schema.selectUuid,
    JSONSchema: schema.JSONSchema,
    uiSchema: schema.uiSchema,
    addInput: dispatch.addInput,
    select: dispatch.select,
    edit: dispatch.edit,
    selectSchema,
  };
};

export default useSchema;
