/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   let temp,a,b,answer;
   a=head;
   if(a = null || a.next == null ){
       return a;
   }
   answer=b=a.next;
//    while (b) {
//         temp = b.next;
//         b.next = null;
//         swap(a,b);
//         b.next = temp;
//         a.next = b;
//         a = b;
//         b = b.next;
//    }
   return 1;
   function swap(a,b) {
       let temp ;
       temp = b;
       b = a;
       a = temp;
   }

};
// @lc code=end

