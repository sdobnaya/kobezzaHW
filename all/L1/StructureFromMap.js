export default class Structure {
    constructor(arrValue) {
        // this.array = [];
        // this.array.push(arrValue);
        // this.values = new Map(array);

        this.values = new Map();

        arrValue.forEach(element => {
            this.values.set(element, null)
        });

    }

    set(key, value) {
        this.values.set(key, value);
    }

    get(key) {
        return this.values.get(key);
    }

    size() {
        return this.values.size;
    }
}

let struct = new Structure(['name', 'lastName', 'age']);

struct.set('name', 'Jack');
struct.set('lastName', 'Black');
struct.set('age', 53);

jackBlack.get('name') // 'Jack'