import React from "react";
import { Button } from "@material-ui/core";
import useSchema from "../../hooks/useSchema";

export const LeftView = () => {
  const { addInput, addRadio } = useSchema();
  return (
    <div style={{ padding: 20 }}>
      <div>
        <Button variant="outlined" color="primary" onClick={addInput}>
          单行文本
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={addRadio}>
          单选
        </Button>
      </div>
      <div>
        <Button variant="outlined" color="primary">
          多选
        </Button>
      </div>
    </div>
  );
};
