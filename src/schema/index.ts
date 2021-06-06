import { v4 as uuidv4 } from "uuid";
import { cloneDeep } from "lodash";

class Schema {
  JSONSchema: any;
  UISchema: any;
  cbs: any[];
  selectUuid: string;
  constructor() {
    this.JSONSchema = {
      type: "object",
      properties: {},
    };

    this.UISchema = {};
    this.cbs = [];
    this.selectUuid = "";
  }

  addInput() {
    const key = uuidv4();
    this.JSONSchema.properties[key] = {
      type: "string",
      title: "",
      description: "",
    };
    this.selectUuid = key;
    this.notify();
    return this;
  }

  edit(key: string, value: string) {
    this.JSONSchema.properties[this.selectUuid] = {
      ...this.JSONSchema.properties[this.selectUuid],
      [key]: value,
    };
    this.notify();
    return this;
  }

  notify() {
    this.cbs.forEach((cb) =>
      cb({
        JSONSchema: cloneDeep(this.JSONSchema),
        UISchema: { ...this.UISchema },
        selectUuid: this.selectUuid,
      })
    );
  }

  on(cb: any) {
    this.cbs.push(cb);
  }
}

const schema = new Schema();

export default schema;
