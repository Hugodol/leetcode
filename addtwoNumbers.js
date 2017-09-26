// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
};

// Create list 1 and 2 for testing
const listOne = new ListNode(2);
listOne.next = new ListNode(4);
listOne.next.next = new ListNode(3);

const listTwo = new ListNode(5);
listTwo.next = new ListNode(6);
listTwo.next.next = new ListNode(4);

// START PROBLEM
const addTwoNumbers = function(l1, l2) {
  const head = new ListNode(0);
  let current = head;
  let listOne = l1;
  let listTwo = l2;
  let carry = 0;

  while (listOne || listTwo) {
    let x = listOne ? listOne.val : 0;
    let y = listTwo ? listTwo.val : 0;
    const newValue = carry + x + y;
    carry = Math.floor(newValue / 10);
    current.next = new ListNode(Math.floor(newValue % 10));
    current = current.next;
    if (listOne) listOne = listOne.next; 
    if (listTwo) listTwo = listTwo.next; 
  };

  if (carry > 0) {
    current.next = new ListNode(carry);
  };

  return head.next;
};
