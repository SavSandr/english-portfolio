import React, { useRef } from "react";
import styled from "styled-components";

import Menu from "./Menu";
import { WIDTH } from "../../helpers/mediaQueriesValue";
import  mediaQueries  from "../../helpers/mediaQueries";

const unFreezeBackground = () => {
    if (
        typeof window !== "undefined" &&
        typeof document !== "undefined" &&
        document.body.style
    ) {
        const scrollY = parseInt(document.body.style.top || "0");
        document.body.removeAttribute("style");
        window.scrollTo(0, scrollY * -1);
    }
};

const freezeBackground = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
        document.body.setAttribute(
            "style",
            `position: fixed; top: -${window.scrollY}px`,
        );
    }
};

const Header = () => {
    const menuStateRef = useRef(null);
    const langSelectRef = useRef(null);

    const closeMenu = () => {
        if (menuStateRef.current) {
            menuStateRef.current.checked = false;
        }
        if (langSelectRef.current) {
            langSelectRef.current.checked = false;
        }
        unFreezeBackground();
    };
    const toggleMenu = () => {
        if (menuStateRef.current) {
            const isOpen = menuStateRef.current.checked;
            // gaMobileMenu(isOpen ? "close" : "open");
            if (!isOpen) {
                freezeBackground();
            } else {
                unFreezeBackground();
            }
        }
    };
    return (
        <>
            <Input id="menu-state" type="checkbox" ref={menuStateRef} />
            <Input id="lang-picker-state" type="checkbox" ref={langSelectRef} />
            <HeaderSection>
                <Container>
                    <Menu closeMenu={closeMenu} toggleMenu={toggleMenu} />
                </Container>
            </HeaderSection>
        </>
    );
};

const Input = styled.input`
    display: none;
`;

const HeaderSection = styled.header`
    width: 100%;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
    border-bottom: 1px solid ${({ theme }) => theme.colors.font};

    background-color: ${({ theme }) => theme.colors.background};
    opacity: 1;
    backdrop-filter: blur(2px);

    transition: height 0.3s ease-in-out;
    height: 3rem;
    input#menu-state:checked ~ & {
        height: 100%;
    }

    ${mediaQueries.laptop(`
        overflow: visible;
        input#menu-state:checked ~ & {
            height: 3rem;
            transition: none;
        }
    `)}
`;

const Container = styled.nav`
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    ${mediaQueries.tablet(`max-width: ${WIDTH.tablet}px;`)}

    ${mediaQueries.laptop(`max-width: ${WIDTH.laptop}px;`)}
        
    ${mediaQueries.desktop(`max-width: ${WIDTH.desktop}px;`)}
`;

export default Header;
