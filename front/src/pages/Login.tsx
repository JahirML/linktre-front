import { Link } from "react-router";

function Login() {
  return (
    <>
      <h2 className="text-4xl font-bold">Login</h2>

      <nav className="mt-10 text-cente">
        <Link to="/auth/register" className="text-lg block">
          ¿No tienes cuenta? <span className="text-sky-500">Crea una aqui</span>
        </Link>
      </nav>
    </>
  );
}

export default Login;
