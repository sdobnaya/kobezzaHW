import { CustomNode } from './CustomNode';

export default class CustomList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //working with head
    //add to head
    unshift(value) {
        const newNode = new CustomNode(value);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    //remove from head   
    shift() {

    }

    //working with tail
    //add to tail
    push(value) {
        const newNode = new CustomNode(value);

        if (!this.tail || !this.head) {
            this.tail = newNode;
            this.head = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

    }

    //remove from tail 
    pop() {

    }

}