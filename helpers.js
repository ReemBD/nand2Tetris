const EMPTY_SPACE = ' ';

function trimExpanded(str) {
  let retval = '';

  for (let i = 0; i < str.length; i++) {
    const lastEmptySpaceIdx = getLastEmptySpaceIdx(str, i);
    let currIdx = i;
    if (lastEmptySpaceIdx !== i) i = lastEmptySpaceIdx - 1;
    retval += str[currIdx];
  }

  return retval;
}

function getLastEmptySpaceIdx(str, i) {
  if (i >= str.length) return i;

  if (str[i] === EMPTY_SPACE) {
    return getLastEmptySpaceIdx(str, i + 1);
  }

  return i;
}

/* you've been given an array of numbers and you need to find a pair of numbers that are equal to the given target value. Numbers can be either positive, negative, or both. Can you design an algorithm that works in O(n)—linear time or greater? */

void function pairValues() {
  const pairValues = (nums, pairSum = 11) => {
    const pairSet = new Set();

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const pair = pairSum - num;
      if (pairSet.has(pair)) return [num, pair];
      pairSet.add(num);
    }
  };

  /* START COMMENT OUT WHEN NOT IN USE */
    let sequence = [8, 10, 2, 7, 9];
    let result = pairValues(sequence);
    console.log('pairValues: ', result);
  /* END COMMENT OUT WHEN NOT IN USE   */
}();
