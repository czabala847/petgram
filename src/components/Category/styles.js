import styled, { css } from "styled-components";
import { loadingSkeleton } from "../../styles/animation";
import { Link as LinkRouter } from "react-router-dom";

const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

const ImageContainer = () =>
  css`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
  `;

const Image = styled.img`
  ${ImageContainer}
`;

const ImageLoading = styled.div`
  ${ImageContainer()}
  ${loadingSkeleton()}
`;

export { Link, Image, ImageLoading };
