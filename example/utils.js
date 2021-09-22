// 防栈溢出深拷贝
export function cloneLoop(x) {
  const root = {};

  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    },
  ];

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }

    for (let k in data) {
      if (Object.hasOwnProperty.call(data, k)) {
        if (typeof data[k] === "object") {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
}
// 对象抽离
export function get(messages, path, args) {
  return path.split(".").reduce((x, y) => {
    switch (typeof x[y]) {
      case "object":
        return x[y];
      case "undefined":
        return path;
      case "string":
        return Object.keys(args).reduce((n, m) => {
          return n.replace(`{${m}}`, args[m]);
        }, x[y]);
    }
  }, messages);
}
