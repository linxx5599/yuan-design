import type { FocusEventHandler } from "@yuan-design/utils/EventInterface";
declare const _default: import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("./types").InputBooleans>;
        values: boolean[];
        default: boolean;
    };
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: import("vue").PropType<import("./types").InputBooleans>;
        values: boolean[];
        default: boolean;
    };
    onFocus: import("vue").PropType<FocusEventHandler>;
    onBlur: import("vue").PropType<FocusEventHandler>;
    onChange: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    disabled: import("./types").InputBooleans;
}>;
export default _default;
