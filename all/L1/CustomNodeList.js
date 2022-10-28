import { CustomNode } from './CustomNode';

export default class CustomList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    add(value) {
        const newNode = new CustomNode(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            newNode.prev = this.last
            this.last = newNode;
            this.last.next = newNode;
        }

    }
}