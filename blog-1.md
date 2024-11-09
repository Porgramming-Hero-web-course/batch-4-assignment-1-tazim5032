Union and Intersection types are important features in TypeScript that help to ensure type safety in the code.









#Union Type


A union type allows a variable to hold multiple types. It’s denoted using "|" symbol. This means that the variable can be one type or another, but never both simultaneously.

##Example 1

let userId: string | number;
userId = 'A23'; 
userId = 12;

In this example, "userId" is a union type that can hold either a string or a number. This allows "userId" to accept both types of values, making it flexible. Here, "userId" is first assigned a string "A23" and then a number 12, both of which are valid assignments due to the union type. 

Using union types like this is useful when a variable may need to accommodate multiple types, such as when handling different formats of IDs.







##Example 2

type FrontendDeveloper = 'SeniorDev'|'juniorDev'

const newDeveloper : FrontendDeveloper = 'juniorDev'

Here, FrontendDeveloper is a union type that can only be either 'SeniorDev' or 'juniorDev'. The variable newDeveloper is assigned 'juniorDev', which is valid because it matches one of the options in FrontendDeveloper.

Union types like this are useful for restricting values to a predefined set.













#Intersection Type

Intersection types allow you to combine multiple types into a single type. It’s denoted using "&" symbol. It’s like saying, "this must have all these types' properties." 










##Example 1

interface User {
    name: string;
}

interface Admin {
    role: string;
}

let userAdmin: User & Admin = {
    name: 'John Doe',
    role: 'admin'
};


In this code, userAdmin must have both name (from User) and role (from Admin). Using intersections, we enforce that userAdmin meets both interface requirements, making it versatile for scenarios where combined properties are needed.






##Example 2

type FrontendDeveloper = {
    skills: string[],
    designation1: 'FrontendDeveloper'
}

type BackendDeveloper = {
    skills: string[],
    designation2: 'BackendDeveloper'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'JS', 'Express'],
    designation1: 'FrontendDeveloper',
    designation2: 'BackendDeveloper'
};


In the above code, the intersection ensures that FullStackDeveloper has both frontend and backend attributes, making it a combination of both roles. This is useful when you need to represent a developer who works in both frontend and backend, with properties from each role.