/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var obj={
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz'
      }
      if (!digits) {
          return []
      }
    let sour = digits.split('').map(item=>obj[item].split(''));
    let res = [];  
    function dfs(currents,level,ans) {

        // recursion terminator  终止条件
        if(level == sour.length){
            console.log(ans);
            
            return res.push(ans.join(''))
         }
        // process logic in current level  处理当前层逻辑代码
         // drill down  进入下一层
        for (let index = 0; index < currents.length; index++) {
            const element = currents[index];
            let currentList = [...ans];
            currentList.push(element);
           
            dfs(sour[level+1],level+1,currentList)
        }
       
        
        // reverse the current level status if needed  如果需要，清理当前层状态
    }
    dfs(sour[0],0,[]);
    return res;
    
};
letterCombinations('23')
// @lc code=end

