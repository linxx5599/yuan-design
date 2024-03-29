import type { Plugin } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: import("./types").ButtonTypes;
            size: import("./types").ButtonSizes;
            disabled: import("./types").ButtonBooleans;
            loading: import("./types").ButtonBooleans;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "size" | "disabled" | "loading">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            type: import("./types").ButtonTypes;
            size: import("./types").ButtonSizes;
            disabled: import("./types").ButtonBooleans;
            loading: import("./types").ButtonBooleans;
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
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    type: import("./types").ButtonTypes;
    size: import("./types").ButtonSizes;
    disabled: import("./types").ButtonBooleans;
    loading: import("./types").ButtonBooleans;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
