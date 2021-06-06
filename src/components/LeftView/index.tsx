import React from "react";
import { Button } from "@material-ui/core";
import schema from "../../schema/index";

export const LeftView = () => {
  return (
    <>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={schema.addInput.bind(schema)}
        >
          输入
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary">
          单选
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary">
          多选
        </Button>
      </div>
    </>
  );
};
