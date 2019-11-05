"use strict";
/**
 * the class Stack implemts the stack ADT
 */
class Stack {
    
    /**constructor function that create object properties
     */
    constructor() {
        this.storage = [];
    }
    
    /**
     * @param  {string} element the elemnt to be add in the storage
     * @returns {undefined}
     */
    push(element) {
        this.storage.push(element);
    }
     /**
     * @returns {string} returns the last element of the stack
     */
    pop() {
        return this.storage.pop();
    }
     /**
     * @returns {string} returns the current element of the stack
     */
    peek() {
        return this.storage[this.storage.length - 1];
    }
    /**
     * @returns {number} returns the lengths of the stack
     */
    size() {
        return this.storage.length;
    }
}
