import React from "react";
import { Container } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  alt?: boolean;
}

export const Button: React.FC<Props> = (props) => {
  const { children, loading = false, alt=false, ...rest } = props;
  return (
    <Container type="button" {...rest} disabled={loading} alt={alt}>
      {loading ? "Carregando..." : children}
    </Container>
  );
};
