import { ExtractPropTypes } from "vue";

export const checkboxProps = {
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Boolean, String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  defaultChecked: {
    type: Boolean,
    default: false
  }
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
