import { toast } from "sonner";
import {
  login as loginService,
  signup as signupService,
} from "../services/auth.service";
import { saveLocalToLS } from "../utils/handleToken";
import { useNavigate } from "react-router";

export default function useAuth() {
  const navigate = useNavigate();

  const login = async (id, password) => {
    const { ok, user, token } = await loginService(id, password);
    if (!ok) return toast();

    saveLocalToLS(token, user);
    navigate("/dashboard", { state: user });
  };

  const signup = async (user) => {
    const { ok, error } = await signupService(user);
    if (!ok) return toast.error(error ?? "Hubo un error");

    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(), 2000)
      );

    toast.promise(promise, {
      description: "Registrado con exito",
      loading: "Redirigiendo...",
      success: () => {
        return navigate("/login");
      },
      error: "Error",
    });
  };

  return { login, signup };
}
