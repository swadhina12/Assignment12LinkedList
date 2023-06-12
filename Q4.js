//Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

function isPalindrome(head) {
    if (head === null || head.next === null) {
      // Empty list or single node, considered as a palindrome
      return true;
    }
  
    // Step 1: Traverse the linked list and store characters in a stack
    let current = head;
    const stack = [];
  
    while (current !== null) {
      stack.push(current.value);
      current = current.next;
    }
  
    // Step 2: Traverse the linked list again and compare characters with the stack
    current = head;
    while (current !== null) {
      const top = stack.pop();
      if (current.value !== top) {
        // Characters don't match, not a palindrome
        return false;
      }
      current = current.next;
    }
  
    // Step 3: All characters match, it's a palindrome
    return true;
  }
//Now, let's test the function with the given examples:
// Create the linked list: R -> A -> D -> A -> R
const head1 = { value: 'R', next: null };
const nodeA1 = { value: 'A', next: null };
const nodeD = { value: 'D', next: null };
const nodeA2 = { value: 'A', next: null };
const nodeR = { value: 'R', next: null };

head1.next = nodeA1;
nodeA1.next = nodeD;
nodeD.next = nodeA2;
nodeA2.next = nodeR;

const isPalindrome1 = isPalindrome(head1);
console.log(isPalindrome1); // Output: true
////The output is true, indicating that the linked list "R -> A -> D -> A -> R" is a palindrome.
//Examle2
// Create the linked list: C -> O -> D -> E
const head2 = { value: 'C', next: null };
const nodeO = { value: 'O', next: null };
const nodeD = { value: 'D', next: null };
const nodeE = { value: 'E', next: null };

head2.next = nodeO;
nodeO.next = nodeD;
nodeD.next = nodeE;

const isPalindrome2 = isPalindrome(head2);
console.log(isPalindrome2); // Output: false
////The output is false, indicating that the linked list "C -> O -> D -> E" is not a palindrome.