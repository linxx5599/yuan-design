import { ExtractPropTypes, PropType } from "vue";
import type {
  ChangeEventHandler,
  FocusEventHandler
} from "@yuan-design/utils/EventInterface";
export type InputBooleans = true | false;
export const InputBoolean = [true, false];

export const inputProps = {
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
    type: Boolean as PropType<InputBooleans>,
    values: InputBoolean,
    default: false
  },
  onFocus: Function as PropType<FocusEventHandler>,
  onBlur: Function as PropType<FocusEventHandler>,
  onChange: Function as PropType<ChangeEventHandler>,
  onInput: Function as PropType<ChangeEventHandler>
  // size: {
  //   type: String as PropType<spaceSizeType | number>,
  //   values: spaceSize,
  //   default: "middle"
  // },
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
