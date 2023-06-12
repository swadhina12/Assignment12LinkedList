//Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

function hasLoop(head) {
    let slowPtr = head;
    let fastPtr = head;
  
    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
  
      if (slowPtr === fastPtr) {
        // Loop detected
        return true;
      }
    }
  
    // No loop found
    return false;
  }
//Now, let's test the function with the given example:
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 3 (loop)
const head1 = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };
const node4 = { value: 4, next: null };
const node5 = { value: 5, next: null };
const node6 = { value: 6, next: null };

head1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node3; // Creates a loop

const hasLoop1 = hasLoop(head1);
console.log(hasLoop1); // Output: true
