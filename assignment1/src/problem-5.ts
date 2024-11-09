{
  function getProperty<T, K extends keyof T>(personInfo: T, key: K): T[K] {
    return personInfo[key];
  }


  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

}




