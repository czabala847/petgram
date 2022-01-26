import React from "react";

import { useGetFavorites } from "../../hooks/useGetFavorites";
import { Grid, Link, Image } from "./styles";

const ListOfFavorites = () => {
    const { data, error, loading } = useGetFavorites();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Ocurrió un error {error}</p>;

    return (
        <Grid>
            {data.favs.length === 0 ? (
                <p>No tienes favoritos</p>
            ) : (
                data.favs.map((fav) => (
                    <Link key={fav.id} to={`/detail/${fav.id}`}>
                        <Image src={fav.src} />
                    </Link>
                ))
            )}
        </Grid>
    );
};

export { ListOfFavorites };
