import { ExtractPropTypes } from "vue";

export const ButtonType = [
  "default",
  "primary",
  "ghost",
  "text",
  "dashed",
  "danger",
  "link"
];

export const ButtonSize = ["large", "middle", "small"];

export const ButtonBoolean = [true, false];


export const buttonProps = {
  type: {
    type: String,
    values: ButtonType,
    default: "default"
  },
  size: {
    type: String,
    values: ButtonSize,
    default: "middle"
  },
  disabled: {
    type: Boolean,
    values: ButtonBoolean,
    default: false
  },
  loading: {
    type: Boolean,
    values: ButtonBoolean,
    default: false
  },
  icon: {
    type: String
  }
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
