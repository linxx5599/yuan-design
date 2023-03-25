import { ExtractPropTypes, PropType } from "vue";
import type { ChangeEventHandler, FocusEventHandler } from "@yuan-design/utils/EventInterface";
export type InputBooleans = true | false;
export declare const InputBoolean: boolean[];
export declare const inputProps: {
    placeholder: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    prefix: {
        type: StringConstructor;
    };
    suffix: {
        type: StringConstructor;
    };
    value: {
        type: StringConstructor;
    };
    defaultValue: {
        type: StringConstructor;
    };
    disabled: {
        type: PropType<InputBooleans>;
        values: boolean[];
        default: boolean;
    };
    onFocus: PropType<FocusEventHandler>;
    onBlur: PropType<FocusEventHandler>;
    onChange: PropType<ChangeEventHandler>;
    onInput: PropType<ChangeEventHandler>;
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
