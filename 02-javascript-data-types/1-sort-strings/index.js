/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr = [...arr];

  sortedArr.sort((a, b) => {
    if(param === 'asc') {
      return handlerLocaleCompare(a, b)
    } else if (param === 'desc') {
      return handlerLocaleCompare(b, a)
    }
  });

  return sortedArr;
}

function handlerLocaleCompare(firstParam, secondParam) {
  return firstParam.localeCompare(secondParam, ['ru', 'en'], {
    caseFirst: 'upper'
  });
}
