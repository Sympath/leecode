/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {

    function dfs(head,linkListHead) {
        if(head == null){
            return  result = linkListHead;
        }
        let newLinkListHead = head.next;
        head.next = linkListHead;
        dfs(newLinkListHead,head)
    }
    let result = null;
    dfs(head,null)
    return result
};
// @lc code=end

