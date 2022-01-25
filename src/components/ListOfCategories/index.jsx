import React from "react";
import { Category } from "../Category";
import { CategoryLoading } from "../Category/CategoryLoading";

import { List, Item } from "./styles";
import { useCategoriesData } from "../../hooks/useCategoriesData";

const ListOfCategories = () => {
    const [showFixed, setShowFixed] = React.useState(false);
    const { categories, loading } = useCategoriesData();

    React.useEffect(() => {
        const onScroll = (e) => {
            const newShowFixed = window.scrollY > 200;
            showFixed != newShowFixed && setShowFixed(newShowFixed);
        };

        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
    }, [showFixed]);

    const renderList = (fixed) => {
        return (
            <List fixed={fixed}>
                {loading
                    ? [...Array(10)].map((e, i) => (
                          <Item key={i}>
                              <CategoryLoading />
                          </Item>
                      ))
                    : categories.map((category) => (
                          <Item key={category.id}>
                              <Category
                                  {...category}
                                  path={`/pet/${category.id}`}
                              />
                          </Item>
                      ))}
            </List>
        );
    };

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    );
};

export { ListOfCategories };
