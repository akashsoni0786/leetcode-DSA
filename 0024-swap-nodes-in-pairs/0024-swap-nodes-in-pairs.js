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
var swapPairs = function(head) {
    if(head == null || head.next == null) return head
    let temp = head;
    while(temp && temp.next){
        let t = temp.val;
        temp.val = temp.next.val;
        temp.next.val = t;
        temp = temp.next.next
    }
    return head;
};