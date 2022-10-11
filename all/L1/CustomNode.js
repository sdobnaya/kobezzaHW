export default class CustomNode {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    get() {
        return this.value;
    }
}