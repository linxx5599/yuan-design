import { computed, defineComponent, ref, watch } from "vue";
import { inputProps } from "./types";
import type {
  ChangeEvent,
  FocusEventHandler
} from "@yuan-design/utils/EventInterface";
import "./style/index.less";

export default defineComponent({
  name: "YInput",
  inheritAttrs: false,
  __YUAN_INPUT: true,
  props: inputProps,
  emits: ["update:value"],
  setup(props, { slots, emit, expose }) {
    const { placeholder, type } = props;
    const inputRef = ref();

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
    const blur = () => {
      inputRef.value?.blur();
    };
    expose({
      blur,
      input: inputRef
    });

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

    const inputDomProps = {
      onChange: (e: any) => {
        handleChange(e);
        props?.onChange?.(e);
      },
      onInput: (e: any) => {
        handleChange(e);
        props?.onInput?.(e);
      },
      onFocus,
      onBlur,
      type,
      placeholder,
      ref: inputRef,
      disabled: props.disabled,
      class: { "y-input": true }
    };
    const inputDom = <input {...inputDomProps} />;
    let prefix = slots?.prefix?.() || props.prefix || null;
    let suffix = slots?.suffix?.() || props.suffix || null;
    if (!prefix && !suffix) return () => inputDom;
    const attrsProps = computed(() => {
      return {
        disabled: props.disabled,
        class: {
          "y-input-affix-wrapper": true
        }
      };
    });
    return () => (
      <span {...attrsProps.value}>
        {prefix ? <span class="y-input-prefix">{prefix}</span> : prefix}
        {inputDom}
        {suffix ? <span class="y-input-suffix">{suffix}</span> : suffix}
      </span>
    );
  }
});
