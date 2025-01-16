import { Node } from "./node.js";

export class List {
    constructor(head = null){
        this.head = head;
    }
    append(value){
        //create a new node
        let node = new Node(value);

        if (this.head == null){
            this.head = node;
        } else {
            let currentNode = this.head

            while (currentNode.next !== null){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
    }
}