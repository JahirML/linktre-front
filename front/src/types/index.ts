export type User = {
  name: string;
  email: string;
  handle: string;
};

export type RegisterForm = Pick<User, "email" | "name" | "handle"> & {
  password: string;
  repeatPassword: string;
};
