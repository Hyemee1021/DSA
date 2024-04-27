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
var middleNode = function(head) {
//using two pointer
//one goes one step, the other goes two steps
  let slow=head;
  let fast = head;

  //it iterate until it reaches at the end 
  while(fast && fast.next){
    slow = slow.next
    fast= fast.next.next
  }
  //when it reaches at the end it returns slow
    return slow
};