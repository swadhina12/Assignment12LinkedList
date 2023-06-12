//Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL
function deleteMiddleNode(head) {
  if (head === null || head.next === null) {
    // If the input linked list is empty or has only one node, return null.
    return null;
  }

  let slowPtr = head;
  let fastPtr = head;
  let prevPtr = null;

  while (fastPtr !== null && fastPtr.next !== null) {
    fastPtr = fastPtr.next.next;
    prevPtr = slowPtr;
    slowPtr = slowPtr.next;
  }

  // Delete the middle node(s) by bypassing them
  prevPtr.next = slowPtr.next;

  return head;
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

const modifiedList1 = deleteMiddleNode(head1);

// Print the modified list: 1 -> 2 -> 4 -> 5
let current = modifiedList1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
