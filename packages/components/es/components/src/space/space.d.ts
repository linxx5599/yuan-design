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
        type: import("vue").PropType<number | import("./types").sizeType>;
        values: string[];
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<number | import("./types").sizeType>;
        values: string[];
        default: boolean;
    };
}>>, {
    size: number | import("./types").sizeType;
    align: import("./types").alignType;
    direction: import("./types").directionType;
}>;
export default _default;
