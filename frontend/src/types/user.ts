export interface Hobby {
  id: string;
  name: string;
}

export interface User {
  id: string;
  username: string;
  age: number;
  hobbies: Hobby[];
}
