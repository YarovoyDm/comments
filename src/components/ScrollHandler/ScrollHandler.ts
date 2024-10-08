import React, { useEffect, useLayoutEffect } from "react";
import { SCROLL_POSITION_KEY } from "constants/localStorage";

interface ScrollHandlerProps {
    isDataLoaded: boolean;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ isDataLoaded }) => {
    const saveScrollPosition = () => {
        const scrollPosition = window.scrollY;

        localStorage.setItem(SCROLL_POSITION_KEY, String(scrollPosition));
    };

    useLayoutEffect(() => {
        if (isDataLoaded) {
            const savedPosition = localStorage.getItem(SCROLL_POSITION_KEY);

            if (savedPosition) {
                setTimeout(() => {
                    window.scrollTo(0, Number(savedPosition));
                }, 100);
            }
        }
    }, [isDataLoaded]);

    useEffect(() => {
        window.addEventListener("scroll", saveScrollPosition);
        return () => {
            window.removeEventListener("scroll", saveScrollPosition);
        };
    }, []);

    return null;
};

export default ScrollHandler;
