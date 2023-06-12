//Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

function isCircularLinkedList(head) {
    let slowPtr = head;
    let fastPtr = head;
  
    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
  
      if (slowPtr === fastPtr) {
        // Cycle detected
        return true;
      }
    }
  
    // No cycle present
    return false;
  }
//Now, let's test the function with an example of a circular linked list:
// Create a circular linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 2 (connecting back to the second node)
const head = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };
const node4 = { value: 4, next: null };
const node5 = { value: 5, next: null };

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2; // Connect back to the second node to form a cycle

const isCircular = isCircularLinkedList(head);
console.log(isCircular); // Output: true
