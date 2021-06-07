import { createModel } from "@rematch/core";
import { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";
import { RootModel } from "./models";
import { RootState } from "./store";

interface Schema {
  JSONSchema: {
    type: string;
    required: string[];
    properties: Record<string, any>;
  };
  selectUuid: string;
  uiSchema: Record<string, any>;
}

export const schema = createModel<RootModel>()({
  state: {
    JSONSchema: {
      type: "object",
      required: [],
      properties: {},
    },
    selectUuid: "",
    uiSchema: {},
  } as Schema,
  reducers: {
    addInput(state) {
      const key = uuidv4();
      return {
        ...state,
        JSONSchema: {
          ...state.JSONSchema,
          properties: {
            ...state.JSONSchema.properties,
            [key]: {
              type: "string",
              title: "",
              description: "",
            },
          },
        },
        selectUuid: key,
      };
    },
    edit(state, payload: { key: string; value: string }) {
      const shadowCopy = cloneDeep(state.JSONSchema);
      shadowCopy.properties[state.selectUuid][payload.key] = payload.value;
      return {
        ...state,
        JSONSchema: shadowCopy,
      };
    },
    select(state, payload: string) {
      return {
        ...state,
        selectUuid: payload,
      };
    },
  },
  effects: (dispatch) => ({}),
});
