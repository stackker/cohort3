class ListNode {
  constructor(subject, amount) {
    this.nextNode = null;
    this.subject = subject;
    this.amount = amount;
  }
  show() {
    return { subject: this.subject, amount: this.amount };
  }
}
// ---------------------
class LinkedList {
  constructor() {
    // const node = new ListNode(null, null);
    this.current = null;
    this.headNode = null;
    this.nextNode = null;
    this.listAmount = 0;
  }
  showList() {
    this.first();
    const outputArr = [];
    while (this.current.nextNode !== null) {
      // while (!this.current.nextNode) {
      outputArr.push([
        this.current.subject,
        this.current.amount,
        this.current.nextNode.subject
      ]);

      this.next();
    }
    this.next();
    outputArr.push([this.current.subject, this.current.amount, "null"]);

    console.log(outputArr);
    return outputArr;
  }

  first() {
    // directly set to the head Node
    this.current = this.headNode;
  }

  prev() {
    const startLoc = this.current;
    this.current = this.headNode;
    while (this.current.nextNode !== startLoc) {
      this.next();
      // this.current = this.current.nextNode;
    }
    return this.current;
  }

  last() {
    // if nextnode is !null for the current Node  keep doing next()
    while (this.current.nextNode) {
      console.log(this.current);
      this.next();
      console.log(this.current);
    }
    // return this.current;
  }

  next() {
    this.current.nextNode
      ? (this.current = this.current.nextNode)
      : (this.current = this.current);
  }

  add(subject, amount) {
    const prevNode = this.current;
    const node = new ListNode(subject, amount);
    this.listAmount += node.amount;
    if (!this.headNode) {
      this.current = this.headNode = node;
      // return (this.current = this.headNode = node);
    } else {
      // first set where the current next node to the new node as it is inserted between existing nodes

      node.nextNode = this.current.nextNode;
      this.current.nextNode = node;
      this.current = node;
    }
    return this.current;
  } //add

  delete() {
    let marker = this.current;
    this.listAmount -= marker.amount;
    // if deleting the head
    if (this.current === this.headNode) {
      console.log("Deleting HeadNode");
      this.current = this.current.nextNode;
      this.headNode = this.current;
      // return this.current;
    }
    // if deleting intermediate  ones
    if (this.current !== this.headNode && this.current.nextNode !== null) {
      // current s next node is null, ie not the last entry
      console.log("Deleting Intermediate Node");
      // set Prev node's next node to this nextnode
      const prevNode = this.prev();
      this.next();
      prevNode.nextNode = marker.nextNode; // replace this next node on prev node
      // return (this.current = prevNode); // return the previous node to be consistnt  with the last Node removal action
    }
    //if deleting End Node
    if (this.current !== this.headNode && this.current.nextNode == null) {
      console.log("Deleting Last Node");
      let startLoc = this.current;
      let prevNode = this.prev();
      prevNode.nextNode = startLoc.nextNode;
      // return (this.current = prevNode);
    }
  }
}

export { ListNode, LinkedList };
