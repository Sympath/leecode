//数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。 
//
// 
//
// 示例： 
//
// 输入：n = 3
//输出：[
//       "((()))",
//       "(()())",
//       "(())()",
//       "()(())",
//       "()()()"
//     ]
// 
// Related Topics 字符串 回溯算法

//递归 可以进行分支化，一层递归分树状向下渗入两层
package com.cute.leetcode.editor.cn;

import java.util.ArrayList;
import java.util.List;

public class GenerateParentheses {
    public static void main(String[] args) {
        Solution solution = new GenerateParentheses().new Solution();
        solution.generateParenthesis(1);
    }
    //leetcode submit region begin(Prohibit modification and deletion)
class Solution {
        private List<String> result;
    public List<String> generateParenthesis(int n) {
        result = new ArrayList<String>();
        _generate(n,"",0,0);
        System.out.println(result);

        return  result;
    }

        private void _generate(int n,String s,int leftNum,int rightNum) {
            // recursion terminator  终止条件
            if(leftNum == n && rightNum == n) {
                result.add(s);
                return;
            }
            // process logic in current level  处理当前层逻辑代码
            // drill down  进入下一层
            if(leftNum < n)
                _generate(n,s + '(',leftNum + 1,rightNum);
            if(leftNum > rightNum)
                _generate(n,s + ')',leftNum,rightNum + 1);
            // reverse the current level status if needed  如果需要，清理当前层状态
        }
    }
//leetcode submit region end(Prohibit modification and deletion)

}