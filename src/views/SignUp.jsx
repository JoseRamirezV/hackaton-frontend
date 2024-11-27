import { toast, Toaster } from "sonner";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";

export default function SignUp() {
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new window.FormData(form));

    if (data.password !== data.password2)
      return toast.error("Verifique que ambas contraseñas sean iguales");

    //  return console.log(data);

    signup(data);
    form.reset();
  };

  return (
    <div className="mx-auto min-h-full flex flex-col items-center justify-center gap-2 px-4 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Regístrate con nosotros
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="text-sm/6 font-medium text-gray-900">
            Nombre
            <input
              name="name"
              type="text"
              required
              autoComplete="name"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </label>

          <label className="block text-sm/6 font-medium text-gray-900">
            Correo electrónico
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </label>

          <label className="block text-sm/6 font-medium text-gray-900">
            Teléfono
            <input
              name="phoneNumber"
              type="tel"
              required
              autoComplete="phone"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </label>

          <label className="block text-sm/6 font-medium text-gray-900">
            Contraseña
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </label>

          <label className="block text-sm/6 font-medium text-gray-900">
            Confirma tu contraseña
            <input
              name="password2"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </label>

          <label className="block text-sm/6 font-medium text-gray-900">
            Escoge tu rol
            <select
              name="role"
              type="select"
              required
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            >
              <option disabled>Selecciona tu rol</option>
              <option value="usuario">Usuario</option>
              <option value="emprendedor">Emprendedor</option>
            </select>
          </label>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
          >
            Registrarse
          </button>
        </form>
      </div>
      <span className="text-gray-700 flex gap-1">
        Ya tienes una cuenta?
        <Link to={"/login"} className="text-blue-500">
          Inicia Sesión!
        </Link>
      </span>
      <Toaster richColors />
    </div>
  );
}
