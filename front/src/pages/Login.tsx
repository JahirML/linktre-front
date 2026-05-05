import { useForm } from "react-hook-form";
import { Link } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import type { LoginForm } from "../types";
import useLogin from "../hooks/useLogin";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({ defaultValues: initialValues });

  const { login } = useLogin();

  function handleLogin(data: LoginForm) {
    login(data, {
      onSuccess: (data) => {
        localStorage.setItem("token", data);
        reset();
      },
    });
  }

  return (
    <>
      <h2 className="text-4xl font-bold">Login</h2>

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10 text-slate-600"
        noValidate
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-sky-500 text-slate-50 p-3 text-lg w-full uppercase rounded-lg font-bold cursor-pointer hover:bg-sky-600 transition-colors"
          value="Iniciar Sesión"
        />
      </form>

      <nav className="mt-10 text-center">
        <Link to="/auth/register" className="text-lg block">
          ¿No tienes cuenta? <span className="text-sky-500">Crea una aqui</span>
        </Link>
      </nav>
    </>
  );
}

export default Login;
