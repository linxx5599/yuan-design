const aligns = ["start", "end", "center", "baseline"];
const directions = ["vertical", "horizontal"];
const sizes = ["small", "middle", "large"];
const spaceProps = {
  align: {
    type: String,
    values: aligns,
    default: "center"
  },
  direction: {
    type: String,
    values: directions,
    default: "middle"
  },
  size: {
    type: String,
    values: sizes,
    default: false
  }
};
export {
  aligns,
  directions,
  sizes,
  spaceProps
};
