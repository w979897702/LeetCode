// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0
var lengthOfLastWord = function (s) {
    let end = s.length - 1;
    while (end >= 0 && s[end] == ' ') end--;
    if (end < 0) return 0;
    let start = end;
    while (start >= 0 && s[start] != ' ') start--;
    return end - start;
};
