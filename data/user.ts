const users = [
  {
    email: "atapas@email.com",
    password: "password",
  },
  {
    email: "all@gamil.com",
    password: "all",
  },
  {
    email: "bob@email.com",
    password: "password",
  },
];

export const getUserByEmail = (username: string) => {
  const found = users.find((user) => user.email === username);
  return found;
};
