import { ExtractPropTypes, PropType } from "vue";
export type alignType = "start" | "end" | "center" | "baseline";
export declare const aligns: string[];
export type directionType = "vertical" | "horizontal";
export declare const directions: string[];
export type sizeType = "small" | "middle" | "large";
export declare const sizes: string[];
export declare const spaceProps: {
    align: {
        type: PropType<alignType>;
        values: string[];
        default: string;
    };
    direction: {
        type: PropType<directionType>;
        values: string[];
        default: string;
    };
    size: {
        type: PropType<number | sizeType>;
        values: string[];
        default: boolean;
    };
};
export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
