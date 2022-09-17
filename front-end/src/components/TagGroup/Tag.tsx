import React from "react";
import styled from "styled-components";

interface Props extends React.BaseHTMLAttributes<HTMLSpanElement> {}
export const Tag: React.FC<Props> = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

const Container = styled.span`
  padding: 5px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
