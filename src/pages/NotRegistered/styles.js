import styled from "styled-components";

const Paragraph = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: gray;
`;

const Link = styled.button`
  cursor: pointer;
  color: #0100da;

  &:hover {
    text-decoration: underline;
  }
`;

export { Paragraph, Link };
