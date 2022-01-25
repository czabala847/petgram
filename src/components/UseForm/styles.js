import styled from "styled-components";

const Form = styled.form`
  padding: 16px 0;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgba(219, 0, 0, 1) 0%,
    rgba(0, 0, 219, 1) 100%
  );
  border-radius: 5px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.section`
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

export { Form, Input, Button, Container, Title };
