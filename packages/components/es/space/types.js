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
    default: "horizontal"
  },
  size: {
    type: String,
    values: spaceSize,
    default: "middle"
  }
};
export {
  aligns,
  directions,
  spaceProps,
  spaceSize
};
