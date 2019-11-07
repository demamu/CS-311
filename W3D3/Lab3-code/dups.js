"use strict";

/**remove duplicates
 * @param  {array} numList list of elements
 * @returns {array} mystorage duplicate removed item
 */
function removeDups(numList){
    let myset = new Set(numList);
    let mystorage=[];
    for(const key of myset){
        mystorage.push(key);

    }

    return mystorage;

}