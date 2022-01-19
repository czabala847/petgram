import React from "react";

const useNearScreen = () => {
  const element = React.useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return [show, element];
};

export { useNearScreen };
