// at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。
const at = [5, 12, 8, 130, 44];
// console.log(at.at(2)); // 数组.at(索引)

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
const concat1 = ["a", "b", "c"];
const concat2 = ["d", "e", "f"];
const concat3 = concat1.concat(concat2);
// console.log(concat1, concat2, concat3);

// copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度 (会改变原数组)
const copyWithin = ["a", "b", "c", "d", "e"];
// console.log(copyWithin, copyWithin.copyWithin(0, 1, 2)); //copyWithin(target,start,end)

// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
const entries = ["a", "b", "c"];
const entries1 = entries.entries(); //返回值是一个新的迭代器对象(不改变原数组)
// console.log(entries, entries1.next());

// every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。(若收到一个空数组，此方法在一切情况下都会返回 true)
const every = [1, 30, 39, 29, 10, 13];
const isBigger = (val) => val < 40; // 注意是所有
// console.log(every.every(isBigger));

// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引
const fill = [1, 2, 3, 4]; // fill(value,start,end)
// console.log(fill.fill(0, 1, 2));

// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
// console.log(result);

// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const find = [5, 12, 8, 130, 44];
// console.log(find.find((val) => val > 10));

// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
const findIndex = [5, 12, 8, 130, 44];
// console.log(findIndex.findIndex((val) => val > 10));

//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。(数组扁平化)
const flat = [0, 1, 2, [3, 4]];
const flat2 = flat.flat(Infinity); // flat(传展开的层数，不传默认为1，传Infinity则展开所有)
// console.log(flat, flat2);
