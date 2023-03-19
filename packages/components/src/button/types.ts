import { ExtractPropTypes, PropType } from "vue";

export type ButtonTypes =
  | "link"
  | "default"
  | "primary"
  | "ghost"
  | "dashed"
  | "text"
  | "danger";
export const ButtonType = [
  "default",
  "primary",
  "ghost",
  "text",
  "dashed",
  "danger",
  "link"
];

export type ButtonSizes = "large" | "middle" | "small";
export const ButtonSize = ["large", "middle", "small"];

export type ButtonBooleans = true | false;
export const ButtonBoolean = [true, false];

export const buttonProps = {
  type: {
    type: String as PropType<ButtonTypes>,
    values: ButtonType,
    default: "default"
  },
  size: {
    type: String as PropType<ButtonSizes>,
    values: ButtonSize,
    default: "middle"
  },
  disabled: {
    type: Boolean as  PropType<ButtonBooleans>,
    values: ButtonBoolean,
    default: false
  },
  loading: {
    type: Boolean as  PropType<ButtonBooleans>,
    values: ButtonBoolean,
    default: false
  },
  icon: {
    type: String
  }
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
