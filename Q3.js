//Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

function findNthNodeFromEnd(head, N) {
    let firstPtr = head;
    let secondPtr = head;
  
    // Move firstPtr N nodes ahead
    for (let i = 0; i < N; i++) {
      if (firstPtr === null) {
        // N is greater than the length of the linked list
        return null;
      }
      firstPtr = firstPtr.next;
    }
  
    while (firstPtr !== null) {
      firstPtr = firstPtr.next;
      secondPtr = secondPtr.next;
    }
  
    return secondPtr;
  }
//Now, let's test the function with the given example:
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head1 = { value: 1, next: null };
const node2 = { value: 2, next: null };
const node3 = { value: 3, next: null };
const node4 = { value: 4, next: null };
const node5 = { value: 5, next: null };

head1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const N = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head1, N);
console.log(nthNodeFromEnd.value); // Output: 4
