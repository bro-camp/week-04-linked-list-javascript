class Node {
  #data;

  #next;

  constructor(data, next = null) {
    this.#data = data;
    this.#next = next;
  }

  setData(data) {
    this.#data = data;
  }

  setNext(node) {
    this.#next = node;
  }

  next() {
    return this.#next;
  }

  data() {
    return this.#data;
  }
}

module.exports = Node;
