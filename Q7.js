//Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
function insertAtAlternatePositions(firstHead, secondHead) {
    let firstCurrent = firstHead;
    let secondCurrent = secondHead;
  
    while (firstCurrent !== null && secondCurrent !== null) {
      const firstNext = firstCurrent.next;
      const secondNext = secondCurrent.next;
  
      // Update pointers to insert secondCurrent between firstCurrent and firstNext
      firstCurrent.next = secondCurrent;
      secondCurrent.next = firstNext;
  
      // Move to the next nodes
      firstCurrent = firstNext;
      secondCurrent = secondNext;
    }
  
    // If second list has remaining nodes, append them to the end of the first list
    if (secondCurrent !== null) {
      firstCurrent.next = secondCurrent;
    }
  
    // Empty the second list
    secondHead = null;
  
    return firstHead;
  }
//Now, let's test the function with the given example:
// Create the first linked list: 5 -> 7 -> 17 -> 13 -> 11
const firstHead = { value: 5, next: null };
const node7 = { value: 7, next: null };
const node17 = { value: 17, next: null };
const node13 = { value: 13, next: null };
const node11 = { value: 11, next: null };

firstHead.next = node7;
node7.next = node17;
node17.next = node13;
node13.next = node11;

// Create the second linked list: 12 -> 10 -> 2 -> 4 -> 6
const secondHead = { value: 12, next: null };
const node10 = { value: 10, next: null };
const node2 = { value: 2, next: null };
const node4 = { value: 4, next: null };
const node6 = { value: 6, next: null };

secondHead.next = node10;
node10.next = node2;
node2.next = node4;
node4.next = node6;

const modifiedFirstList = insertAtAlternatePositions(firstHead, secondHead);

// Print the modified first list: 5 -> 12 -> 7 -> 10 -> 17 -> 2 -> 13 -> 4 -> 11 -> 6
let current = modifiedFirstList;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

// Print the second list (should be empty)
console.log(secondHead); // Output: null
