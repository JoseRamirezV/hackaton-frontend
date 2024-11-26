import { toast } from 'sonner';
import { login as loginService } from '../services/auth.service';
import { saveLocalToLS } from '../utils/handleToken';
import { useNavigate } from 'react-router';

export default function useAuth() {
   const navigate = useNavigate()
   
   const login = async (id, password) => {
      const { ok, user, token } = await loginService(id, password);
      if (!ok) return toast();

      saveLocalToLS(token);
      navigate('/dashboard', { state: user });
   };

   return { login };
}
