export type User = {
  name: string;
  email: string;
  handle: string;
  _id: string;
};

export type RegisterForm = Pick<User, "email" | "name" | "handle"> & {
  password: string;
  repeatPassword: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};
