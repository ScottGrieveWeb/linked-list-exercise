import { List } from "./list.js";

let list = new List;

console.log(list);
console.log(list.size());
console.log(list.getFirst());

list.append(12);
list.append(5);
list.append(6);
list.append(1);

console.log(list);
// console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());

list.prepend(0);

console.log(list);
// console.log(list.size());
console.log(list.getFirst());