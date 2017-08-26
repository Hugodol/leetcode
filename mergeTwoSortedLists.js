// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  // if (!l1) {
  //   return l2;
  // }
  // if (!l2) {
  //   return l1;
  // }
  const numbers = [];
  let first = l1;
  let second = l2;
  while (first || second) {
    if (first && first.val) {
      numbers.push(first.val);
      first = first.next;
    }
    if (second && second.val) {
      numbers.push(second.val);
      second = second.next;
    }
  }
  numbers.sort(function(a, b) {
    return a - b;
  });
  const newList = new ListNode(numbers[0]);
  currentNode = newList;
  for (let i = 1; i < numbers.length; i++) {
    currentNode.next = new ListNode(numbers[i]);
    currentNode = currentNode.next;
  }
  return newList;
};


const list1 = new ListNode(2);
const node1_1 = list1.next = new ListNode(4);
const node1_2 = node1_1.next = new ListNode(6);

const list2 = new ListNode(1);
const node2_1 = list2.next = new ListNode(3);
const node2_2 = node2_1.next = new ListNode(5);
const node2_3 = node2_2.next = new ListNode(7);

const test = null;

// console.log(JSON.stringify(mergeTwoLists(list1, list2)));
console.log(JSON.stringify(mergeTwoLists(test, list2)));
