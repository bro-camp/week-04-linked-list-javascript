const Node = require('./node');

class LinkedList {
  #head;

  #last;

  constructor(values = []) {
    if (values.length === 0) {
      this.#head = null;
      this.#last = null;
    } else {
      this.#head = new Node(values[0]);
      this.#last = this.#head;
      for (let i = 1, n = values.length; i < n; i += 1) {
        this.insertLast(values[i]);
      }
    }
  }

  setHead(node) {
    this.#head = node;
  }

  setLast(node) {
    this.#last = node;
  }

  head() {
    return this.#head;
  }

  tail() {
    const list = new LinkedList();
    list.setHead(this.#head.next());
    list.setLast(this.#last);
    return list;
  }

  last() {
    return this.#last;
  }

  isEmpty() {
    return this.#head === null;
  }

  insertLast(data) {
    const node = new Node(data);
    if (this.#head === null) {
      this.#head = node;
      this.#last = node;
    } else {
      this.#last.setNext(node);
      this.#last = node;
    }
  }

  insertFirst(data) {
    if (this.#head === null) {
      this.#head = new Node(data);
      this.#last = this.#head;
    } else {
      this.#head = new Node(data, this.#head);
    }
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return null;
    }

    // When 1 node
    if (this.#head.next() === null) {
      this.#head = null;
      this.#last = null;
      return null;
    }

    this.#head = this.#head.next();
    return this.#head;
  }

  deleteLast() {
    if (this.isEmpty()) {
      return null;
    }

    // When 1 node
    if (this.#head.next() === null) {
      this.#head = null;
      this.#last = null;
      return null;
    }

    let node = this.#head;
    while (node.next().next() !== null) {
      node = node.next();
    }

    node.setNext(null);
    this.#last = node;

    return node;
  }

  toString() {
    let str;

    if (this.#head === null) {
      str = '()';
    } else {
      str = '(';
      let node = this.#head;
      //
      while (node.next() !== null) {
        str += `${node.data()} `;
        node = node.next();
      }
      str += `${this.#last.data()})`;
    }

    return str;
  }

  // eslint-disable-next-line class-methods-use-this
  insertAfter(node, data) {
    const newNode = new Node(data, node.next());
    node.setNext(new Node(data, node.next()));

    if (node === this.#last) {
      this.#last = newNode;
    }

    return newNode;
  }

  // eslint-disable-next-line class-methods-use-this
  insertBefore(node, data) {
    const newNode = new Node(node.data(), node.next());
    node.setData(data);
    node.setNext(newNode);
    return node;
  }

  reverse() {
    if (this.isEmpty()) {
      return this;
    }

    let curr = this.#head;
    let next = this.#head.next();
    while (next !== null) {
      const temp = next.next();
      next.setNext(curr);
      curr = next;
      next = temp;
    }
    this.#head.setNext(null);

    const temp = this.#head;
    this.#head = this.#last;
    this.#last = temp;

    return this;
  }

  [Symbol.iterator]() {
    let currNode = new Node(null, this.#head);
    return {
      next() {
        return {
          value: (currNode = currNode?.next())?.data(),
          done: !currNode,
        }
      }
    }
  }
}

module.exports = LinkedList;
