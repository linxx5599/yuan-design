declare const _default: import("vue").DefineComponent<{
    align: {
        type: import("vue").PropType<import("./types").alignType>;
        values: string[];
        default: string;
    };
    direction: {
        type: import("vue").PropType<import("./types").directionType>;
        values: string[];
        default: string;
    };
    size: {
        type: import("vue").PropType<number | import("./types").spaceSizeType>;
        values: string[];
        default: string;
    };
    wrap: {
        type: BooleanConstructor;
        values: boolean[];
        default: boolean;
    };
}, (() => JSX.Element) | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: import("vue").PropType<import("./types").alignType>;
        values: string[];
        default: string;
    };
    direction: {
        type: import("vue").PropType<import("./types").directionType>;
        values: string[];
        default: string;
    };
    size: {
        type: import("vue").PropType<number | import("./types").spaceSizeType>;
        values: string[];
        default: string;
    };
    wrap: {
        type: BooleanConstructor;
        values: boolean[];
        default: boolean;
    };
}>>, {
    size: number | import("./types").spaceSizeType;
    align: import("./types").alignType;
    direction: import("./types").directionType;
    wrap: boolean;
}>;
export default _default;
