/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];

    let dfs = function (nums,index,list) {
        // recursion terminator  终止条件
            if(index == nums.length){
                ans.push(list);
                return;
            }

        // process logic in current level  处理当前层逻辑代码
        // drill down  进入下一层

            dfs(nums,index+1,[...list]);
            list.push(nums[index])
            dfs(nums,index + 1,[...list]);

        // reverse the current level status if needed  如果需要，清理当前层状态
            // list.pop()
    }
    dfs(nums, 0, []);

    return ans;
};
// @lc code=end

