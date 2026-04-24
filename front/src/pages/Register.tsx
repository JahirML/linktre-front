import { useForm } from "react-hook-form";
import { Link } from "react-router";
import ErrorMessage from "../components/ErrorMessage";

import type { RegisterForm } from "../types";
import { registerUser } from "../api/userApi";

function Register() {
  const initialValues = {
    name: "",
    email: "",
    handle: "",
    password: "",
    repeatPassword: "",
  };

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<RegisterForm>({ defaultValues: initialValues });

  async function onSubmit(data: RegisterForm) {
    // console.log(data);
    const res = await registerUser(data);
    console.log(res);

    // reset();
  }

  return (
    <>
      <h1 className="text-4xl font-bold">Crear cuenta</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10 text-slate-800"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-100 p-3 rounded-lg placeholder-slate-400"
            {...register("name", {
              required: "El nombre es requerido",
              minLength: {
                value: 2,
                message: "Mínimo 2 caracteres",
              },
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message} </ErrorMessage>}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-slate-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-100 p-3 rounded-lg placeholder-slate-400"
            {...register("handle", { required: "El handle es obligatorio" })}
          />
          {errors.handle && (
            <ErrorMessage>{errors.handle?.message}</ErrorMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "El campo es obligatorio",
              minLength: {
                value: 8,
                message: "La contraseña debe tener almenos 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.repeatPassword?.message}</ErrorMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="repeatPassword" className="text-2xl text-slate-500">
            Repetir Password
          </label>
          <input
            id="repeatPassword"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-100 p-3 rounded-lg placeholder-slate-400"
            {...register("repeatPassword", {
              required: "El campo es obligatorio",
              validate: (value) =>
                value === getValues("password") ||
                "Las contraseñas deben ser iguales",
            })}
          />
          {errors.repeatPassword && (
            <ErrorMessage>{errors.repeatPassword?.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-sky-500 text-slate-50 p-3 text-lg w-full uppercase rounded-lg font-bold cursor-pointer hover:bg-sky-600 transition-colors"
          value="Crear Cuenta"
        />
      </form>

      <nav className="mt-10 text-center">
        <Link to="/auth/login" className="text-lg block">
          ¿Ya tienes una cuenta?{" "}
          <span className="text-sky-500">Inicia sesión aquí</span>
        </Link>
      </nav>
    </>
  );
}

export default Register;
