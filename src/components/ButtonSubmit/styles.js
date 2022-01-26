import styled from "styled-components";

const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgba(219, 0, 0, 1) 0%,
    rgba(0, 0, 219, 1) 100%
  );
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.3;
  }
`;

export { Button };
