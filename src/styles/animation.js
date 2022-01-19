import { keyframes, css } from "styled-components";

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to{
        filter: blur(0);
        opacity:1
    }
`;

const fadeIn = ({ time = "1s", type = "ease" } = {}) => {
  return css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;
};

const loadingSkeletonFrames = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`;

const loadingSkeleton = () =>
  css`
    background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
    background-size: 400% 400%;
    animation: ${loadingSkeletonFrames} 1.2s ease-in-out infinite;
  `;

export { fadeIn, loadingSkeleton };
