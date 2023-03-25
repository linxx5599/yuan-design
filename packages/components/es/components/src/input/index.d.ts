import type { Plugin } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            disabled: import("./types").InputBooleans;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            onFocus: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
            onChange: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
            onInput: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
        }>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "disabled">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "update:value", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            onFocus: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
            onBlur: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
            onChange: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
            onInput: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
        }>> & {
            "onUpdate:value"?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], string, {
            type: string;
            disabled: import("./types").InputBooleans;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
        onFocus: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
        onBlur: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
        onChange: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
        onInput: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
    }>> & {
        "onUpdate:value"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    onFocus: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
    onBlur: import("vue").PropType<import("@yuan-design/utils/EventInterface").FocusEventHandler>;
    onChange: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
    onInput: import("vue").PropType<import("@yuan-design/utils/EventInterface").ChangeEventHandler>;
}>> & {
    "onUpdate:value"?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", {
    type: string;
    disabled: import("./types").InputBooleans;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
