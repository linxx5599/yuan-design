const ButtonType = [
  "default",
  "primary",
  "ghost",
  "text",
  "dashed",
  "danger",
  "link"
];
const ButtonSize = ["large", "middle", "small"];
const ButtonBoolean = [true, false];
const buttonProps = {
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
export {
  ButtonBoolean,
  ButtonSize,
  ButtonType,
  buttonProps
};
