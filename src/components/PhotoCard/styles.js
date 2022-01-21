import styled from "styled-components";

import { fadeIn } from "../../styles/animation";
import { loadingSkeleton } from "../../styles/animation";

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${fadeIn()}
`;

const ImgLoading = styled.div`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  ${loadingSkeleton()}
`;

const Article = styled.article`
  min-height: 300px;
  margin: 1rem 0;
`;

export { ImgWrapper, Img, Article, ImgLoading };
