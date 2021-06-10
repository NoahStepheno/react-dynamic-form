import { default as TitleModifier } from "./TitleModifier";
import { default as DescriptionModifier } from "./DescriptionModifier";
import { default as RequiredModifier } from "./RequiredModifier";
import { Modifiers } from "./types";

const modifiers: Modifiers = {
  TitleModifier,
  DescriptionModifier,
  RequiredModifier,
};

export { TitleModifier, DescriptionModifier, modifiers };
