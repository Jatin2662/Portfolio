


import react, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaLaptop } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import me from '../assets/me.jpg'
import './Nav.css'



function SideNav({ showNav, setShowNav }) {

    const nav = [
        {
            id: 1,
            title: 'About',
            path: '#',
            icon: <FaInfo />
        },
        {
            id: 2,
            title: 'Experience',
            path: '#experience',
            icon: <FaChartLine />
        },
        {
            id: 3,
            title: 'Skills',
            path: '#skills',
            icon: <FaCogs />
        },
        {
            id: 4,
            title: 'Projects',
            path: '#projects',
            icon: <FaLaptop />
        },
        {
            id: 5,
            title: 'Contact',
            path: '#contact',
            icon: <MdPermContactCalendar />
        },
    ]

    return (
        <div className="back">
            <div className="side-nav flex" >
                <div className="head flex">
                    <div className="top flex" onClick={() => setShowNav(!showNav)}>
                        <span>Portfolio</span>
                        <span><IoClose className="flex" /></span>
                    </div>
                    <div className="photo-cont flex" >
                        <div className="photo flex" >
                            <img src={me} alt="my image" />
                        </div>
                        <p>Jatin Arora</p>
                    </div>
                </div>
                <div className="nav flex">
                    {nav.map((nav) => (
                        <a href={nav.path} key={nav.id} className="nav-link" onClick={() => setShowNav(!showNav)}>{nav.icon}{nav.title}</a>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Nav({ showNav, setShowNav }) {


    return (
        <header>
            <button onClick={() => setShowNav(!showNav)} ><IoReorderThree className="flex" /></button>
            <div>
                Me Jatin Arora
            </div>
            <ul>
                <li><a href="#" >About</a></li>
                <li><a href="#experience" >Experience</a></li>
                <li><a href="#skills" >Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact" >Contact</a></li>
            </ul>
        </header>
    );
}

export {
    Nav,
    SideNav
}