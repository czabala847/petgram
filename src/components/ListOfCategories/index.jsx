import React from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

const ListOfCategories = () => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        (async function fetchCategories() {
            const response = await fetch(
                "https://petgram-server-edsf8xpy2.now.sh/categories"
            );
            const data = await response.json();
            setCategories(data);
        })();
    }, []);

    return (
        <List>
            {categories.map((category) => (
                <Item key={category.id}>
                    <Category {...category} />
                </Item>
            ))}
        </List>
    );
};

export { ListOfCategories };
