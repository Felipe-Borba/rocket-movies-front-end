import React from "react";
import { AiOutlineClose, AiOutlinePlus,  } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TagCreator({tags, setTags}: Props) {
  return (
    <OuterContainer>
      <h2>Marcadores</h2>

      <TagContainer>
        {tags.map((tag, index) => {
          return (
            <Tag key={index}>
              {tag} <AiOutlineClose size={22} />
            </Tag>
          );
        })}
        <AddButton>Novo Marcador <AiOutlinePlus size={22} /></AddButton>
      </TagContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;


  > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;

    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;

  svg {
    fill: ${({ theme }) => theme.COLORS.PRIMARY_400};
  }
`;

const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;

  border: 2px dashed ${({ theme }) => theme.COLORS.SECONDARY_200};
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`;

const Tag = styled.div`
  
`