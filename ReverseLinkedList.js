/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  //current
  let current = head;
  //head.previous
  let previous = null;
  let next = null;
  //head.next
  //loop unitl current === null
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;

    current = next;
  }

  return previous;
};
//pre   currnet  next
//       1->2
