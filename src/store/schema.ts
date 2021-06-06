import { createModel } from "@rematch/core";
import { RootModel } from "./models";

export const schema = createModel<RootModel>()({
  state: {
    JSONSchema: {
      type: "object",
      required: [],
      properties: {},
    },
  },
  reducers: {},
  effects: (dispatch) => ({}),
});
