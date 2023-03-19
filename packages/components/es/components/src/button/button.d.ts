declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./types").ButtonTypes>;
        values: string[];
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSizes>;
        values: string[];
        default: string;
    };
    disabled: {
        type: import("vue").PropType<import("./types").ButtonBooleans>;
        values: boolean[];
        default: boolean;
    };
    loading: {
        type: import("vue").PropType<import("./types").ButtonBooleans>;
        values: boolean[];
        default: boolean;
    };
    icon: {
        type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./types").ButtonTypes>;
        values: string[];
        default: string;
    };
    size: {
        type: import("vue").PropType<import("./types").ButtonSizes>;
        values: string[];
        default: string;
    };
    disabled: {
        type: import("vue").PropType<import("./types").ButtonBooleans>;
        values: boolean[];
        default: boolean;
    };
    loading: {
        type: import("vue").PropType<import("./types").ButtonBooleans>;
        values: boolean[];
        default: boolean;
    };
    icon: {
        type: StringConstructor;
    };
}>>, {
    type: import("./types").ButtonTypes;
    size: import("./types").ButtonSizes;
    disabled: import("./types").ButtonBooleans;
    loading: import("./types").ButtonBooleans;
}>;
export default _default;
