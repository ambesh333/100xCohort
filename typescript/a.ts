type User = {
  id: string;
  username: string;
};
// type users = {
//   [key: string]: User;
// };

type users = Record<string, User>;

const users: users = {
  f: {
    id: "gad",
    username: "uytfasd",
  },
  gh: {
    id: "ysg",
    username: "uysdgf",
  },
};
