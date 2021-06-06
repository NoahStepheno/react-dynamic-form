import { Models } from "@rematch/core";
import { count } from "./count";
import { schema } from "./schema";

export interface RootModel extends Models<RootModel> {
  count: typeof count;
  schema: typeof schema;
}

export const models: RootModel = { count, schema };
