import { List } from "./list.js";

let list = new List;

console.log(list);
console.log(list.size());

list.append(12);
list.append(5);
list.append(6);
list.append(1);

console.log(list);
console.log(list.size());

list.prepend(0);

console.log(list);
console.log(list.size());