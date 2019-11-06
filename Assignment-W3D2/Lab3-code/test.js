"use strict";
/* global describe */
/* global it */
/* global assert */
/* global Employee */
/* global nameComparator */

describe("nameComparator", function() {

    employees.sort(nameComparator)

    it("Compares Employees by salary", function() {
        employees.sort(salaryComparator)
        assert.equal(employees[0].salary,50000);
        assert.equal(employees[1].salary,40000);
        assert.equal(employees[2].salary,45000);  
    });
    it("Compares Employees by name", function() {
        employees.sort(nameComparator)
        assert.equal(employees[0].name,"Dave");
        assert.equal(employees[1].name,"George");
        assert.equal(employees[2].name,"Richard");  
    });
    it("Compares Employees by time", function() {
        employees.sort( HairingComparator);
        assert.equal(employees[2].hireDate,"Wed Feb 07 2001 00:00:00 GMT-0600 (Central Standard Time)");
        assert.equal(employees[1].hireDate,"Mon Jan 03 2000 00:00:00 GMT-0600 (Central Standard Time)");
        assert.equal(employees[0].hireDate,"Tue Nov 05 1996 00:00:00 GMT-0600 (Central Standard Time)");  
    });
});