import { ExtractPropTypes, PropType } from "vue";
export type ButtonTypes = "link" | "default" | "primary" | "ghost" | "dashed" | "text" | "danger";
export declare const ButtonType: string[];
export type ButtonSizes = "large" | "middle" | "small";
export declare const ButtonSize: string[];
export type ButtonBooleans = true | false;
export declare const ButtonBoolean: boolean[];
export declare const buttonProps: {
    type: {
        type: PropType<ButtonTypes>;
        values: string[];
        default: string;
    };
    size: {
        type: PropType<ButtonSizes>;
        values: string[];
        default: string;
    };
    disabled: {
        type: PropType<ButtonBooleans>;
        values: boolean[];
        default: boolean;
    };
    loading: {
        type: PropType<ButtonBooleans>;
        values: boolean[];
        default: boolean;
    };
    icon: {
        type: StringConstructor;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
