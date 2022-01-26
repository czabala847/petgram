import styled from "styled-components";

const Form = styled.form`
  padding: 16px 0;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

const Container = styled.section`
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const ErrorContainer = styled.div`
  background-color: rgba(219, 0, 0, 0.7);
  color: white;
  margin: 0.5rem 0;
  padding: 0.3rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

export { Form, Input, Container, Title, ErrorContainer };
