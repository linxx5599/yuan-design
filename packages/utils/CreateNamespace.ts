interface optsType {
  preCls?: string;
  comCls: string;
}
class createNamespace {
  preCls: String;
  comCls: String;
  constructor(opts: optsType) {
    const { preCls, comCls } = opts || {};
    this.preCls = preCls || "yuan";
    this.comCls = comCls;
  }
  n() {
    return `${this.preCls}-${this.comCls}`;
  }
  fix(fixCls: string) {
    return `${this.preCls}-${this.comCls}-${fixCls}`;
  }
}

export default createNamespace;
