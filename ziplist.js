function zipItUp (list1, list2) {
  const list3 = [];

  let i = 0;
  while (i < list1.length) {
    list3.push(list1[i]);
    list3.push(list2[i]);
    i++;

  }
  return list3;
}

function easyZipItUp(list1, list2) {
  const list3 = _.zip(list1, list2);
  return _.flatten(list3);
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipItUp(list1, list2));

console.log(easyZipItUp(list1, list2));