import { FieldTemplate } from "@rjsf/material-ui";
import { FieldTemplateProps } from "@rjsf/core";
import React from "react";
import cx from "classnames";
import "./index.css";
import useSchema from "../../hooks/useSchema";

type Props = FieldTemplateProps<any>;

const DesignFieldTemplate: React.FC<Props> = (props: Props) => {
  const currentUuid = props?.id?.slice(5);
  const { selectUuid, select } = useSchema();
  const hasSelected = selectUuid === currentUuid;
  return (
    <div
      className={cx("design-field-template", hasSelected && "selected")}
      onClick={() => {
        if (currentUuid) {
          select(currentUuid);
        }
      }}
    >
      <FieldTemplate {...props} />
    </div>
  );
};

export default DesignFieldTemplate;
