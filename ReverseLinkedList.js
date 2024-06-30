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
  //edge case handling
  if (head === null || head.next === null) {
    return head;
  }

  //I need three pointers
  let prev = null;
  let current = head;
  let nextNode;

  while (current !== null) {
    nextNode = current.next; //save next value
    current.next = prev; //point baack
    prev = current;
    current = nextNode; //passing next value move forward
  }
  return prev;
};

//pre   currnet  next
//       1->2
