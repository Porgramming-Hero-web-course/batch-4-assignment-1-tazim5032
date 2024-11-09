"use strict";
{
    const validateKeys = (obj, keys) => {
        let flag = true;
        keys.forEach((element) => {
            if (!obj[element]) {
                flag = false;
            }
        });
        return flag;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}
