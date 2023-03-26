class createNamespace {
  constructor(opts) {
    const { preCls, comCls } = opts || {};
    this.preCls = preCls || "yuan";
    this.comCls = comCls;
  }
  n() {
    return `${this.preCls}-${this.comCls}`;
  }
  fix(fixCls) {
    return `${this.preCls}-${this.comCls}-${fixCls}`;
  }
}
export {
  createNamespace as default
};
