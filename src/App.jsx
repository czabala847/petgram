import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Detail } from "./pages/Detail";
// import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegistered } from "./pages/NotRegistered";
import { Layout } from "./containers/Layout";
import { Context } from "./Context";

const Favs = React.lazy(() =>
    import("./pages/Favs").then((module) => ({ default: module.Favs }))
);

const App = () => {
    const context = useContext(Context);

    return (
        <React.Suspense fallback={<div />}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/pet/:categoryId"
                            element={<Home />}
                        />
                        <Route
                            exact
                            path="/detail/:detailId"
                            element={<Detail />}
                        />
                        <Route
                            exact
                            path="/favs"
                            element={
                                context.isAuth ? <Favs /> : <NotRegistered />
                            }
                        />
                        <Route
                            exact
                            path="/user"
                            element={
                                context.isAuth ? <User /> : <NotRegistered />
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </React.Suspense>
    );
};

export { App };
