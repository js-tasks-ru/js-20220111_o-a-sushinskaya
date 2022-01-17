/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr = [...arr];

  sortedArr.sort((a, b) => {
    return param === 'asc' ? handlerLocaleCompare(a, b) : handlerLocaleCompare(b, a);
  });

  return sortedArr;
}

function handlerLocaleCompare(firstParam, secondParam) {
  return firstParam.localeCompare(secondParam, [], {
    caseFirst: 'upper'
  });
}
