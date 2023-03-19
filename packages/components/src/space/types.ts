import { ExtractPropTypes, PropType } from "vue";

export type alignType = "start" | "end" | "center" | "baseline";
export const aligns = ["start", "end", "center", "baseline"];

export type directionType = "vertical" | "horizontal";
export const directions = ["vertical", "horizontal"];

export type spaceSizeType = "small" | "middle" | "large";
export const spaceSize = ["small", "middle", "large"];

export const spaceProps = {
  align: {
    type: String as PropType<alignType>,
    values: aligns,
    default: "center"
  },
  direction: {
    type: String as PropType<directionType>,
    values: directions,
    default: "middle"
  },
  size: {
    type: String as PropType<spaceSizeType | number>,
    values: spaceSize,
    default: false
  }
};

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
