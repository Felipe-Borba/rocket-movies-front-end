import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext({
  data: {
    user: null,
  },
  async signIn({ email, password }: any) {},
  signOut() {},
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

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, data, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
