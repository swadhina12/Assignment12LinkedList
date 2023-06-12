//Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

function retainDelete(head, M, N) {
    let current = head;
    let prev = null;
  
    while (current !== null) {
      // Traverse M nodes
      let count = 0;
      while (count < M && current !== null) {
        prev = current;
        current = current.next;
        count++;
      }
  
      // Delete N nodes
      count = 0;
      while (count < N && current !== null) {
        current = current.next;
        count++;
      }
  
      // Update the next pointer of the previous node
      prev.next = current;
    }
  
    return head;
  }
  