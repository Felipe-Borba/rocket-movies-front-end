import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

export const AuthContext = createContext({
  data: {
    user: null,
  },
  async signIn({ email, password }: any) {},
  signOut() {},
  async updateUser(user: UserUpdate) {},
});

interface Props {
  children: JSX.Element;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState({
    user: null,
  });

  async function signIn({ email, password }: any) {
    api
      .post("/session", { email, password })
      .then((response) => {
        const { user, token } = response.data;

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setData({ user });

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
        localStorage.setItem("@rocketnotes:token", token);
      })
      .catch((error) => {
        if (error?.response) {
          alert(error.response.data.message);
        } else {
          alert("nao foi possível entrar");
        }
      });
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");
    setData({ user: null });
  }

  async function updateUser(user: UserUpdate) {
    api
      .put("/users", user)
      .then((response) => {
        const user = response.data;

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

        alert("Usuário atualizado com sucesso!");
      })
      .catch((error) => {
        // TODO code repetition
        if (error?.response) {
          alert(error.response.data.message);
        } else {
          alert("Nao foi possível atualizar!");
        }
      });
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }

    const token = localStorage.getItem("@rocketnotes:token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ updateUser, signIn, data, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

interface UserUpdate {
  name: string;
  email: string;
  passwordOld: string;
  password: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: string;
  updated_at: string;
}
