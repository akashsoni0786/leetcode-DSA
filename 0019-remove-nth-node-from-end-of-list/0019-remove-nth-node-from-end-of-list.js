/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
     let c = 0;
            let list = head
            while(list != null) {
                c++;
                list = list.next;
            }
            if(n === c)
                return head.next;
    
            let idxBeforeRemoval = (c-n) - 1;
            let ptr = head;
            while(idxBeforeRemoval > 0){
                ptr = ptr.next;
                idxBeforeRemoval--;
            }
            if(ptr.next.next == null){
                ptr.next = null
            }else{
                let temp = ptr.next.next;
                ptr.next = temp;
            }

            return head;
};