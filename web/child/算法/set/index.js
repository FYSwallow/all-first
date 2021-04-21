/* 
    集合
    添加元素： add
    移除一个元素： delete
    判断有无该元素： has
    移除集合中的所有元素： clear
    包含元素的数量： size
    返回集合中所有值的数组： values
*/

function Set() {
  this.items = {};
}

Set.prototype.has = function (element) {
  return element in this.items;
};

Set.prototype.add = function (element) {
  if (!this.has(element)) {
    this.items[element] = element;
    return true;
  }
  return false;
};

Set.prototype.delete = function (element) {
  if (this.has(element)) {
    delete this.items[element];
    return true;
  }
  return false;
};

Set.prototype.clear = function (element) {
  return (this.items = {});
};

Set.prototype.size = function () {
  return Object.keys(this.items).length;
};
Set.prototype.values = function () {
  return Object.values(this.items);
};

// 并集
Set.prototype.unions = function (otherSet) {
  const unionSet = new Set();
  this.values.forEach((item) => unionSet.add(item));
  otherSet.values.forEach((item) => unionSet.add(item));
  return unionSet;
};

// 交集
Set.prototype.intersection = function (otherSet) {
  const intersectionSet = new Set();
  const values = this.values;
  values.forEach((item) => {
    if (otherSet.has(item)) {
      intersectionSet.add(item);
    }
  });
  return intersectionSet;
};
// 差级
Set.prototype.diff = function (otherSet) {
  const diffSet = new Set();
  const values = this.values;
  values.forEach((item) => {
    if (!otherSet.has(item)) {
      diffSet.add(item);
    }
  });
  return diffSet;
};
// 子级
Set.prototype.isSubSet = function (otherSet) {
  if (this.size() > otherSet.size) {
    return false;
  }
  let isSubSet = true;
  const values = this.values;
  values.forEach((item) => {
    if (!otherSet.has(item)) {
      return isSubSet = false;
    }
  });
  return isSubSet;
};
