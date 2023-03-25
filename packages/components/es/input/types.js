const InputBoolean = [true, false];
const inputProps = {
  placeholder: {
    type: String
  },
  type: {
    type: String,
    default: "text"
  },
  prefix: {
    type: String
  },
  suffix: {
    type: String
  },
  value: {
    type: String
  },
  defaultValue: {
    type: String
  },
  disabled: {
    type: Boolean,
    values: InputBoolean,
    default: false
  },
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function
  // size: {
  //   type: String as PropType<spaceSizeType | number>,
  //   values: spaceSize,
  //   default: "middle"
  // },
};
export {
  InputBoolean,
  inputProps
};
