/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head) this.head = newNode;
    if(this.tail) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if(this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);

  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length < 2) this.tail = this.head;
    return firstNode.val;
  }

  /** getNodeAt(idx): get node at idx. */

  getNodeAt(idx){
    let currentNode = this.head;
    let count = 0;

    while (currentNode && count !== idx){
      count++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  
  /** getValAt(idx): get val at idx. */

  getValAt(idx) {
    return this.getNodeAt(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let targetNode = this.getNodeAt(idx)
    targetNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.length < idx || idx < 0) {
      throw new Error("Invalid index");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prevNode = this.getNodeAt(idx - 1);
    let newNode = new Node(val);
    
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length <= idx || idx < 0) {
      throw new Error("Invalid index");
    }

    let targetNode = this.getNodeAt(idx);
    let prevNode = this.getNodeAt(idx - 1);

    if (idx === 0) this.head = this.head.next;
    else if (idx === this.length - 1){
      prevNode.next = null;
      this.tail = prevNode;
    }
    else targetNode = targetNode.next;

    this.length--;
    if (this.length < 2) this.tail = this.head;

    return targetNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let currentNode = this.head;
    let total = 0;

    while(currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }

    return total / this.length;
    
  }
}

module.exports = LinkedList;
