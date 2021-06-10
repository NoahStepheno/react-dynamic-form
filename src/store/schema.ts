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
        uiSchema: {
          [key]: {
            "ui:widget": "text",
          },
        },
        selectUuid: key,
      };
    },
    addRadio(state) {
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
              enum: ["hehe", "haha", "pi"],
            },
          },
        },
        uiSchema: {
          [key]: {
            "ui:widget": "radio",
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
    toggleRequired(state) {
      const oldRequired = state.JSONSchema.required.concat();
      const index = oldRequired.indexOf(state.selectUuid);
      let newRequired;
      if (index > -1) {
        oldRequired.splice(index, 1);
        newRequired = oldRequired;
      } else {
        newRequired = oldRequired.concat(state.selectUuid);
      }
      return {
        ...state,
        JSONSchema: {
          ...state.JSONSchema,
          required: newRequired,
        },
      };
    },
  },
  effects: (dispatch) => ({}),
});
