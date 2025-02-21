export type User = {
  id: number;
  name: string;
};
const users: User[] = [
  { id: 1, name: "Adrian" },
  { id: 2, name: "Ilona" },
  { id: 3, name: "Lisa" },
];

export const getAllUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};
export const getSingleUserById = (id: number): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      resolve(user || null);
    }, 1000);
  });
};

export const addNewUser = (name: string): Promise<User> => {
  const newUser: User = {
    id: users.length + 1,
    name,
  };
  users.push(newUser);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newUser);
    }, 1000);
  });
};
