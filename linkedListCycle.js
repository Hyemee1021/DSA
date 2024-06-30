/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    // no cycle its dead end
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    //there is a cotigious step
    if (slow === fast) {
      //they meet each other it means there is a cycle
      return true;
    }

    //lets move
    slow = slow.next; //one step
    fast = fast.next.next; //two steps
  }

  return false; // No cycle
};
