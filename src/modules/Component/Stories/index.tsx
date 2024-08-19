import { ReactNode } from "react";
import BreadcrumbsStory from "./BreadcrumbsStory";
import ButtonStory from "./ButtonStory";
import CheckboxStory from "./CheckboxStory";
import ColorPaletteStory from "./ColorPalette";
import DropdownStory from "./DropdownStory";
import InputStory from "./InputStory";
import LabelStory from "./LabelStory";
import ModalStory from "./ModalStory";
import RadioGroupStory from "./RadioGroupStory";
import SelectStory from "./SelectStory";

export const StoryMap: Record<string, ReactNode> = {
  breadcrumbs: <BreadcrumbsStory />,
  button: <ButtonStory />,
  checkbox: <CheckboxStory />,
  colorpalette: <ColorPaletteStory />,
  dropdown: <DropdownStory />,
  input: <InputStory />,
  label: <LabelStory />,
  modal: <ModalStory />,
  radiogroup: <RadioGroupStory />,
  select: <SelectStory />,
};
