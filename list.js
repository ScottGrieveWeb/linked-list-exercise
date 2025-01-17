import { Node } from "./node.js";

export class List {
    constructor(head = null){
        this.head = head;
        this.length = 0;
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
        this.length++;
    }
    prepend(value){
        let node = new Node(value);

        node.next = this.head;
        this.head = node;
        this.length++;
    }
    size(){
        return this.length;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        if (!this.head){
            return null;
        }
        let node = this.head;
        while (node){
            if(!node.next){
                return node;
            }
            node=node.next;
        }
    }
    toString() {
        // Start traversal from the head node
        let node = this.head;
        // Initialize an empty string to store the elements of the list
        let str = "(";
        // Traverse the list and concatenate each element to the string
        while (node) {
            str += node.data + ") -> (";
            node = node.next;
        }
        // Append "NULL" to indicate the end of the list
        str += "NULL)";
        // Print the string containing the list elements
        console.log(str);
    }
}