import React from "react";

import { Helmet } from "react-helmet";

import { Div, Title, Subtitle } from "./styles";

const HelmetContainer = ({ children, title, subtitle, detail = false }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                {title && <title>{title} | Petgram 🐱</title>}
                {subtitle && <meta name="description" content={subtitle} />}
            </Helmet>
            {detail && (
                <Div>
                    {title && <Title>{title}</Title>}
                    {subtitle && <Subtitle>{subtitle}</Subtitle>}
                </Div>
            )}
            {children}
        </>
    );
};

export { HelmetContainer };
