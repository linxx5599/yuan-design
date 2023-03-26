import { computed, defineComponent, ref, watch } from "vue";
import { inputProps } from "./types";
import type {
  ChangeEvent,
  FocusEventHandler
} from "@yuan-design/utils/EventInterface";

import { CreateNamespace } from "@yuan-design/utils";

import "./style/index.less";

export default defineComponent({
  name: "YInput",
  inheritAttrs: false,
  __YUAN_INPUT: true,
  props: inputProps,
  emits: ["update:value"],
  setup(props, { slots, emit }) {
    const modelValue = computed({
      get() {
        return props.value === undefined ? props.defaultValue : props.value;
      },
      set(newVal) {
        emit("update:value", newVal);
      }
    });
    const focused = ref(false);

    watch(
      () => props.value,
      () => {
        modelValue.value = props.value;
      }
    );
    watch(
      () => props.disabled,
      () => {
        if (props.value !== undefined) {
          modelValue.value = props.value;
        }
        if (props.disabled) {
          focused.value = false;
        }
      }
    );

    const onFocus: FocusEventHandler = (e) => {
      focused.value = true;
      props?.onFocus?.(e);
    };

    const onBlur: FocusEventHandler = (e) => {
      focused.value = false;
      props?.onBlur?.(e);
    };
    const setModelValue = (value: string | undefined, callback?: Function) => {
      if (modelValue.value === value) return;
    };
    const handleChange = (e: ChangeEvent) => {
      const { value, composing } = e.target as any;
      if ((e as any).isComposing || composing || modelValue.value === value)
        return;
      const newVal = e.target.value;
      setModelValue(newVal);
    };

    const inputFnProps = {
      onChange: (e: any) => {
        handleChange(e);
        props?.onChange?.(e);
      },
      onInput: (e: any) => {
        handleChange(e);
        props?.onInput?.(e);
      },
      onFocus,
      onBlur
    };

    const namespace = new CreateNamespace({ comCls: "input" });

    const inputDomProps = computed(() => {
      return {
        type: props.type,
        placeholder: props.placeholder,
        disabled: props.disabled,
        class: { [namespace.n()]: true }
      };
    });

    const inputDom = () => <input {...inputFnProps} {...inputDomProps.value} />;
    let prefix = slots?.prefix?.() || props.prefix || null;
    let suffix = slots?.suffix?.() || props.suffix || null;
    if (!prefix && !suffix) return inputDom;
    const attrsProps = computed(() => {
      return {
        disabled: props.disabled,
        class: {
          [namespace.fix("affix-wrapper")]: true
        }
      };
    });
    return () => (
      <span {...attrsProps.value}>
        {prefix ? <span class={namespace.fix('prefix')}>{prefix}</span> : prefix}
        {inputDom()}
        {suffix ? <span class={namespace.fix('suffix')}>{suffix}</span> : suffix}
      </span>
    );
  }
});
