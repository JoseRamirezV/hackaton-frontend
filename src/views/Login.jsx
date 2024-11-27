import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { toast, Toaster } from "sonner";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.unauthorized)
      toast.error("Acceso no autorizado");
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = Object.fromEntries(new window.FormData(form));
    login(email, password);
  };

  return (
    <>
      <div className="w-[1280] sm:w-auto min-h-full flex flex-col items-center gap-4 justify-center px-6 py-12 lg:px-8">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Ingresa a tu cuenta
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 mt-6 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <label
            htmlFor="email"
            className="flex flex-col gap-1 text-sm/6 font-medium text-gray-900"
          >
            Correo electrónico
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm/6"
            />
          </label>

          <label
            htmlFor="password"
            className="flex flex-col gap-1 text-sm/6 font-medium text-gray-900"
          >
            Contraseña
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm/6"
            />
          </label>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
        <span className="flex gap-1 text-gray-700">
          No tienes cuenta?
          <Link to={"/signup"} className="block text-blue-700 w-fit">
            Registrate
          </Link>
        </span>
      </div>
      <Toaster richColors />
    </>
  );
}
