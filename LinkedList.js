window.onload = function () {
    console.log('Hello, world!');
}

const node1 = {
    prev: null,
    next: null,
    data: "A"
}

const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "C"
}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

class LinkedList {

    constructor() {
        this.head = node1;
        this.next = node2;
        this.tail = node3;
    }

    dumpList() {
        let a_node = this.head;
        while (a_node != null) {
            console.log(`
            node: ${a_node.data}
            ----------------
                prev: ${a_node.prev?.data}
                next: ${a_node.next?.data}
            `);

            a_node = a_node.next;

        }
    }

    add(node) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    addLast(node) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    addFirst(node) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    }

    removeLast() {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    removeFirst() {
        this.head = this.head.next;
        this.head.prev = null;
    }

   
    removeNode(node) {
        if (node === this.head) {
            this.removeFirst();
        } else if (node === this.tail) {
            this.removeLast();
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }

    insertBefore(node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node;
        node.prev.next = newNode;
        node.prev = newNode;
    }

    insertAfter(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        node.next.prev = newNode;
        node.next = newNode;
    }

   indexOf(node) {
    let index = 0;
    let a_node = this.head;
    while (a_node != null) {
        if (a_node === node) {
            return index;
        }
        index++;
        a_node = a_node.next;
    }
    return -1;
   }

    get(index) {
     let i = 0;
     let a_node = this.head;
     while (a_node != null) {
          if (i === index) {
                return a_node;
          }
          i++;
          a_node = a_node.next;
     }
     return null;
    }

    first() {
        return this.head;
    }

    last() {
        return this.tail;
    }

    remove(index) {
        let a_node = this.get(index);
        this.removeNode(a_node);
    }

    swapNodes(nodeA, nodeB) {
        if (nodeA === nodeB) {
            return;
        }
        if (nodeA.next === nodeB) {
            this.removeNode(nodeA);
            this.insertBefore(nodeB, nodeA);
        } else if (nodeB.next === nodeA) {
            this.removeNode(nodeB);
            this.insertBefore(nodeA, nodeB);
        } else {
            let temp = nodeA.next;
            this.removeNode(nodeA);
            this.insertBefore(nodeB, nodeA);
            this.removeNode(nodeB);
            this.insertBefore(temp, nodeB);
        }
    
    }

}
    const ll = new LinkedList();
    console.log(ll);