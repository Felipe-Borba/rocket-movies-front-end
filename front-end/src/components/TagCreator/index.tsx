import React from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import { Input } from "../Input";

interface Props {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TagCreator({ tags, setTags }: Props) {
  return (
    <OuterContainer>
      <h2>Marcadores</h2>

      <TagContainer>
        {tags.map((tag, index) => {
          return (
            <Tag key={index}>
              {tag}
              <AiOutlineClose onClick={() => console.log("todo")} />
            </Tag>
          );
        })}

        <AddButton>
          <input placeholder="Novo Marcador" />
          <AiOutlinePlus size={22} onClick={() => console.log("todo")} />
        </AddButton>
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
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;

  svg {
    fill: ${({ theme }) => theme.COLORS.PRIMARY_400};
    cursor: pointer;
  }
`;

const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 16px;

  border: 2px dashed ${({ theme }) => theme.COLORS.SECONDARY_200};
  border-radius: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};

  input {
    width: 100px;

    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.SECONDARY_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.SECONDARY_400};
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
`;
