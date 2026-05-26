export type User = {
  name: string;
  email: string;
  handle: string;
  _id: string;
  description: string;
  image: string;
};

export type RegisterForm = Pick<User, "email" | "name" | "handle"> & {
  password: string;
  repeatPassword: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};

export type UpdateProfileForm = Pick<User, "handle" | "description">;
