import React, { useState } from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import { uuid } from "../lib/uuid";

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    width: 100%;
    height: 100%;
    color: lightgray;
    line-height: 30px;
    padding: 10px 0;
  }
`;

const CommentForm: React.FC<{ comments: any }> = ({ comments }) => {
  const [comment, setComment] = useState(null);
  const { handleSubmit, register, reset } = useForm();

  React.useEffect(() => {
    console.log(comments);
  }, []);

  const onSubmit = (data: object) => {
    console.log(data);
    // TODO: dispatch comment here and userID and postID
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          type="text"
          name="comment"
          placeholder="type your comment here..."
        />
      </form>
    </>
  );
};

export default CommentForm;
