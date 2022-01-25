import React from "react";

const useCategoriesData = () => {
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async function fetchCategories() {
      setLoading(true);
      const response = await fetch(
        "https://petgram-server-edsf8xpy2.now.sh/categories"
      );
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    })();
  }, []);

  return { categories, loading };
};

export { useCategoriesData };
