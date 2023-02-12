import { isVNode, Fragment, RendererElement, RendererNode, VNode } from "vue";

export function isValid(value: any): boolean {
  return value !== undefined && value !== null && value !== "";
}

export function isEmptyElement(c:any) {
  return (
    c &&
    (c.type === Comment ||
      (c.type === Fragment && c.children.length === 0) ||
      (c.type === Text && c.children.trim() === ""))
  );
}

export function flattenChildren(children: Array<any> = [], filterEmpty = true) {
  const temp = Array.isArray(children) ? children : [children];
  const res: VNode<RendererNode, RendererElement, { [key: string]: any; }>[] = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty));
    } else if (child && child.type === Fragment) {
      res.push(...flattenChildren(child.children, filterEmpty));
    } else if (child && isVNode(child)) {
      if (filterEmpty && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty) {
        res.push(child);
      }
    } else if (isValid(child)) {
      res.push(child);
    }
  });
  return res;
}


/**
 * @example
 * const obj = { a: { b: "123" } }
 * safeGet(obj, "a.b") => 123
 * safeGet(obj, "a.b.c", "default") => default
 * @param {Object} source 
 * @param {String}path 
 * @param {any} defaultValue 
 */
export function safeGet(source:Object, path:String, defaultValue: any = undefined) {
  // a[3].b -> a.3.b -> [a,3,b]
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split('.')
  let result = source;
  for (const key of paths) {
    result = Object(result)[key];
    if(result === undefined) {
      return defaultValue;
    }
  }
  return result;
}