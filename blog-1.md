
# Union and Intersection Types in TypeScript

Union and intersection types are important features in TypeScript that help ensure type safety in your code.

## Union Type

A **union type** allows a variable to hold multiple types. It's denoted using the `|` symbol, which means that the variable can be one type or another, but never both at the same time.

### Example 1

```typescript
let Id: string | number;
Id = 'A23'; 
Id = 12;
```

In this example, `Id` can be either a `string` or a `number`. The union type makes it flexible to hold both types.

### Example 2

```typescript
type FrontendDeveloper = 'SeniorDev' | 'juniorDev';
const newDeveloper: FrontendDeveloper = 'juniorDev';
```

Here, `FrontendDeveloper` is a union type that can only be either `'SeniorDev'` or `'juniorDev'`. This ensures that only predefined values are allowed.

---

## Intersection Type

An **intersection type** combines multiple types into one. It's denoted using the `&` symbol. This means that the object must have properties from all combined types.

### Example 1

```typescript
interface User {
    name: string;
}

interface Admin {
    role: string;
}

let userAdmin: User & Admin = {
    name: 'Fakhrul Islam',
    role: 'admin'
};
```

In this case, `userAdmin` must have both `name` (from `User`) and `role` (from `Admin`), enforcing that the object meets both interface requirements.

### Example 2

```typescript
type FrontendDeveloper = {
    skills: string[];
    designation1: 'FrontendDeveloper';
};

type BackendDeveloper = {
    skills: string[];
    designation2: 'BackendDeveloper';
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'JS', 'Express'],
    designation1: 'FrontendDeveloper',
    designation2: 'BackendDeveloper'
};
```

Here, `FullStackDeveloper` combines the properties from both `FrontendDeveloper` and `BackendDeveloper`, ensuring the object has both frontend and backend attributes.

---

## Summary

- **Union types** allow a variable to hold values of different types, offering flexibility for handling multiple possibilities.
- **Intersection types** combine multiple types into one, ensuring that an object has all the required properties from each type.

Both **union** and **intersection** types in TypeScript make your code more flexible, reliable, and type-safe, ensuring that data matches the expected structure while allowing flexibility where needed.

