const LinkedList = require('../src/index');

// const list = new LinkedList(167);

// const list = new LinkedList([2, 3, 4]);
// list.insertFirst(1);
// list.insertLast(5);

const list = new LinkedList([2, 3, 4, 5]);
// console.log(list.toString());
// list.insertAfter(list.tail().tail().tail().tail().head(), 6)
// console.log(list.toString());
// console.log(list.last().data());
// list.insertAfter(list.tail().tail().head(), 34);
// list.insertBefore(list.tail().tail().head(), 23);
// console.log(list.toString());
// list.reverse();
// console.log(list.toString());
// list.deleteFirst();
console.log(list.toString());
for (const value of list) {
  console.log(`${value}`);
}
// list.deleteFirst();
// console.log(list.toString());
// console.log(list.last());
// let iter = list[Symbol.iterator]();
// const a = [1, 2, 3, 4];
// const iter = a[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// console.log(list.secondLast()?.data());

// console.log(list.tail().tail().tail().tail().head().data());
// console.log(`data: ${list.tail().tail().head().data()}`);
// list.insertLast(6);
// list.insertLast(7);
// list.insertLast(70);
// console.log(list.getTail());

// let node = list.head();
// while (node !== null) {
//   console.log(node.data());
//   node = node.next();
// }

// console.log(`One: ${list.data}, ${list.next}`);
