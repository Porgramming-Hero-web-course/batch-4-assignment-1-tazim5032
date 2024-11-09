{
  const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    let flag: boolean = true;

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
