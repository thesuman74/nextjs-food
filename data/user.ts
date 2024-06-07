const users = [
  {
    email: "atapas@email.com",
    password: "password",
  },
  {
    email: "all@gmail.com",
    password: "all",
  },
  {
    email: "bob@email.com",
    password: "password",
  },
];

export const getUserByEmail = (email: unknown) => {
  const found = users.find((user) => user.email === email);
  return found;
};
