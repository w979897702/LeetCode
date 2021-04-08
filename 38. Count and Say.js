// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let prevStr = '1'; //先定义上一个字符串为"1"
    for (let i = 1; i < n; i++) {
        //对n做一次循环
        let newStr = ''; //新定义一个newStr
        let curStr = ''; //定义一个当前字符串curStr
        let count = 1; //一个当前字符串出现的次数
        for (let j = 0; j < prevStr.length; j++) {
            curStr = prevStr[j]; //当前字符
            if (prevStr[j] == prevStr[j + 1]) {
                //当重复出现时 count+=1
                count += 1;
            } else {
                //否则，计数中断，把count和curStr加到新字符串里  并重置计数器
                newStr += count + curStr;
                count = 1;
            }
        }
        prevStr = newStr;
    }
    return prevStr;
};
//题解
// var countAndSay = function (n) {
//     if (n === 1) return '1';
//     const temp = countAndSay(n - 1).match(/(\d)\1*/g);
//     let result = '';
//     for (let i = 0; i < temp.length; i++) {
//         result += temp[i].length + '' + temp[i].substring(0, 1);
//     }
//     return result;
// };
countAndSay(6);
