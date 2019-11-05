
"use strict";
/* global Stack */
/**checks whether the string is balanced or not
 */
class SymbolBalancer {
    /**constructor function that creat the bases for SymbolBalancer class
     * @param  {string} text the program text that to be checked
     * @return {undefined} creates object properties
     */
    constructor(text) {
        this.text = text;
        this.stack = new Stack();
    }
    /**
     * @param  {string} delimiters the delimiter to be checked
     * @return {boolean} return whether the string is balnced or not
     */
    isBalanced(delimiters) {
        let balanceCounter = 0;
        let splitedText = this.text.split("");

        for (let key of splitedText) {
            this.stack.push(key);
        }

        while (this.stack.peek() !== undefined) {  // checking the stack element is not undefined

            if (delimiters.includes(this.stack.pop())) {
                balanceCounter++;
            }

        }
        if (balanceCounter % 2 == 0) { return true; }
        else { return false; }
    
    }
}