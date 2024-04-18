/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  let dummy = new ListNode(-1)
  //starting point of the merge list

  let current= dummy;
  //initilise current point to dummy

  while( list1 !== null && list2 !== null){
    if(list1.val < list2.val){
      current.next = list1;
      list1=list1.next
    }else{
      current.next = list2;
      list2= list2.next;
    }

    current= current.next;
  }
    
  if(list1 !== null){r
    current.next = list1;
  }else{
    current.next = list2;
  }

  //returning the merged list startinbg from the dummy node's next
  return dummy.next
};