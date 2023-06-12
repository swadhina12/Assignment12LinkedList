//Given a linked list of **N** nodes such that it may contain a loop.

function detectAndRemoveLoop(head) {
    let slowPtr = head;
    let fastPtr = head;
  
    // Step 1: Detect the loop using Floyd's Cycle Detection Algorithm
    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
  
      if (slowPtr === fastPtr) {
        // Loop detected
        break;
      }
    }
  
    if (fastPtr === null || fastPtr.next === null) {
      // No loop present, return the linked list as it is
      return head;
    }
  
    // Step 2: Move slowPtr back to the head
    slowPtr = head;
  
    // Step 3: Move both pointers one step at a time until they meet again
    while (slowPtr.next !== fastPtr.next) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }
  
    // Step 4: Break the loop by updating the next pointer of the last node
    fastPtr.next = null;
  
    return head;
  }
//Now, let's test the function with the given example:
// Create the linked list with a loop: R -> A -> D -> A -> R
const head = { value: 'R', next: null };
const nodeA1 = { value: 'A', next: null };
const nodeD = { value: 'D', next: null };
const nodeA2 = { value: 'A', next: null };
const nodeR = { value: 'R', next: null };

head.next = nodeA1;
nodeA1.next = nodeD;
nodeD.next = nodeA2;
nodeA2.next = nodeR;
nodeR.next = nodeD; // Creates a loop

const modifiedList = detectAndRemoveLoop(head);

// Print the modified list: R -> A -> D -> A
let current = modifiedList;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
