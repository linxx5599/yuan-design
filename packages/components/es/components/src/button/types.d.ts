import { ExtractPropTypes } from "vue";
export declare const ButtonType: string[];
export declare const ButtonSize: string[];
export declare const ButtonBoolean: boolean[];
export declare const buttonProps: {
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        values: boolean[];
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        values: boolean[];
        default: boolean;
    };
    icon: {
        type: StringConstructor;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
