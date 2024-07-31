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
    let temp = ans;
    let carry = 0;
    while(l1 && l2) {
        let sum = l1.val+l2.val+carry;
        let val = 0;
        if(sum >= 10) {
            carry =  1, 
            val = sum - 10;
        }else { 
            carry = 0;
            val = sum;
        }
        
        temp.next = new ListNode(val);
        temp = temp.next
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1) {
        let sum = l1.val+carry;
        let val = 0;
        if(sum >= 10) {
            carry =  1, 
            val = sum - 10;
        }else { 
            carry = 0;
            val = sum;
        }
        temp.next = new ListNode(val)
        l1 = l1.next;
        temp = temp.next
    }
    while(l2) {
        let sum = l2.val+carry;
        let val = 0;
        if(sum >= 10) {
            carry =  1, 
            val = sum - 10;
        }else { 
            carry = 0;
            val = sum;
        }
        temp.next = new ListNode(val)
        l2 = l2.next;
        temp = temp.next
    }
    console.log(carry)
    if(carry > 0) {
        temp.next = new ListNode(carry)
        temp = temp.next
    }
    return ans.next;
};