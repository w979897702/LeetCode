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
// Input: head = [1, 1, 2];
// Output: [1, 2];
// Input: head = [1, 1, 2, 3, 3];
// Output: [1, 2, 3];
var deleteDuplicates = function (head) {
    let obj = {};
    function changeList(list) {
        if (list == null) return list;
        if (!obj[list.val]) {
            obj[list.val] = true;
            list.next = changeList(list.next);
            return list;
        } else {
            list.next = changeList(list.next);
            return list.next;
        }
    }
    changeList(head);
    return head;
};

let l1 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                },
            },
        },
    },
};
console.log(deleteDuplicates(l1));
