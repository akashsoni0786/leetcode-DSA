/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
       let ans = new ListNode();
    let head = ans;
    let carry = 0;
  while(l1 && l2) {
    const val1 = l1 && l1.val?l1.val:0;
    const val2 = l2 && l2.val?l2.val:0;

    let val = val1  + val2 + carry;
    if(val>=10) {
        val = (10 - val)>0? 10 - val : -(10 - val);
        carry = 1;
    } else carry = 0;

    l1 = l1.next;
    l2 = l2.next;
    head.next = new ListNode(val);
    head = head.next;
  }  
  
while(l1) {
    const val1 = l1 && l1.val?l1.val:0;
    const val2 = 0;

    let val = val1  + val2 + carry;
    if(val>=10) {
       val = (10 - val)>0? 10 - val : -(10 - val);
        carry = 1;
    } else carry = 0;

    l1 = l1.next;
    head.next = new ListNode(val);
    head = head.next;
} 
  
while(l2) {
    const val1 = 0;
    const val2 = l2 && l2.val?l2.val:0;

    let val = val1  + val2 + carry;
    if(val>=10) {
        val = (10 - val)>0? 10 - val : -(10 - val);
        carry = 1;
    } else carry = 0;

    l2 = l2.next;
    head.next = new ListNode(val);
    head = head.next;
} 
  if(carry > 0) {
    head.next = new ListNode(carry);
  }
  return ans.next;
};