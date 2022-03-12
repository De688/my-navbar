import React from "react";
import {FaHome,FaShoppingCart,FaWpforms,FaProductHunt,FaBuysellads} from 'react-icons/fa';



export const navbardata = [
    {
        name:"Home",
        path: "/",
        icon: <FaHome />,
        classname:'navbar-items'
    },
    {
        name:"Shop",
        path: "/shop",
        icon: <FaShoppingCart />,
        classname:'navbar-items'
    },
    {
        name:"About",
        path: "/about",
        icon: <FaWpforms />,
        classname:'navbar-items'
    },
    {
        name:"Products",
        path: "/products",
        icon: <FaProductHunt />,
        classname:'navbar-items'
    },
    {
        name:"Mail",
        path: "/mail",
        icon: <FaHome />,
        classname:'navbar-items'
    },
    {
        name:"Sells",
        path: "/sells",
        icon: <FaBuysellads />,
        classname:'navbar-items'
    },
]