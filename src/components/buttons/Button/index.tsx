import React from "react";
import { Container } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}
export const Button: React.FC<Props> = (props) => {
  const { children, loading = false, ...rest } = props;
  return (
    <Container type="button" {...rest} disabled={loading}>
      {loading ? "Carregando..." : children}
    </Container>
  );
};
