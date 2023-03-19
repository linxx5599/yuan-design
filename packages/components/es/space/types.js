const aligns = ["start", "end", "center", "baseline"];
const directions = ["vertical", "horizontal"];
const spaceSize = ["small", "middle", "large"];
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
    values: spaceSize,
    default: false
  }
};
export {
  aligns,
  directions,
  spaceProps,
  spaceSize
};
