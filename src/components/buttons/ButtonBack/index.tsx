import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ButtonText } from "../ButtonText";
import { useNavigate } from "react-router-dom";

export default function ButtonBack() {
  const navigate = useNavigate();

  return (
    <ButtonText onClick={() => navigate(-1)}>
      <AiOutlineArrowLeft />
      Voltar
    </ButtonText>
  );
}
