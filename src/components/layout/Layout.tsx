import React from "react";
import Header from "./Header";
import Main from "./Main";

const Layout:React.SFC = ({ children }) => {
        return(
                <>
                <Header/>
                <Main>{children}</Main>
                </>
        )
};


export default Layout;
