import React from "react";
import { StyledModifierWrapper } from "../../modifiers/styled";
import { ModifierKeys } from "../../modifiers/types";
import { Props } from "./types";

const m: ModifierKeys[] = [
  "TitleModifier",
  "DescriptionModifier",
  "RequiredModifier",
];

const TextModifier: React.FC<Props> = (props: Props) => {
  const { modifiers, schema, uiSchema, editSchema } = props;
  return (
    <>
      {m.map((key, idx) => {
        const Comp = modifiers[key];
        return (
          <StyledModifierWrapper key={`${key}_${idx}`}>
            <Comp schema={schema} uiSchema={uiSchema} editSchema={editSchema} />
          </StyledModifierWrapper>
        );
      })}
    </>
  );
};

export default TextModifier;
