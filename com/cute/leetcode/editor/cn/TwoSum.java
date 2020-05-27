//给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。 
//
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。 
//
// 
//
// 示例: 
//
// 给定 nums = [2, 7, 11, 15], target = 9
//
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]
// 
// Related Topics 数组 哈希表

package com.cute.leetcode.editor.cn;

import java.util.HashMap;

public class TwoSum {
    public static void main(String[] args) {
        Solution solution = new TwoSum().new Solution();
    }
    //leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public int[] twoSum(int[] nums, int target) {
//        创建hash表
        HashMap<Integer, Integer> map = new HashMap<>();
//        遍历nums存入 num & target - num
        for (int i = 0; i < nums.length; i++) {
            int component = target - nums[i];
//        如果hash中已经有target - num  则返回结果
            if(map.containsKey(component)){
                return  new int[]{i,map.get(component)};
            }
            map.put(nums[i],i);
        }
//        如果一直没返回，则抛出异常~
        throw new IllegalArgumentException("no answer");


    }
}
//leetcode submit region end(Prohibit modification and deletion)

}