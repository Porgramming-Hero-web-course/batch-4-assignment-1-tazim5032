"use strict";
{
    function getProperty(personInfo, key) {
        return personInfo[key];
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
