import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";
// import { Detail } from "./pages/Detail";
// import { Favs } from "./pages/Favs";
// import { User } from "./pages/User";
// import { NotRegistered } from "./pages/NotRegistered";
import { Layout } from "./containers/Layout";
import { Context } from "./Context";

const Favs = React.lazy(() =>
    import("./pages/Favs").then((module) => ({ default: module.Favs }))
);

const Detail = React.lazy(() =>
    import("./pages/Detail").then((module) => ({ default: module.Detail }))
);

const NotFound = React.lazy(() =>
    import("./pages/NotFound").then((module) => ({ default: module.NotFound }))
);

const User = React.lazy(() =>
    import("./pages/User").then((module) => ({ default: module.User }))
);

const NotRegistered = React.lazy(() =>
    import("./pages/NotRegistered").then((module) => ({
        default: module.NotRegistered,
    }))
);

const App = () => {
    const context = useContext(Context);

    return (
        <BrowserRouter>
            <React.Suspense fallback={<div>Loading...</div>}>
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
            </React.Suspense>
        </BrowserRouter>
    );
};

export { App };
