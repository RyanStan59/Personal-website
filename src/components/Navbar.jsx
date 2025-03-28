import React from 'react';

function Navbar({ scrollToSection, welcomeRef, skillsRef, projectsRef }) {
    return (
        <nav className="flex justify-between items-center p-4 bg-white">
            {/* Left Section: Website title */}
            <div className="left text-black">
                <a href="/">Ryan Stanisci (Web page is still in progress)</a>
            </div>
            
            {/* Floating Navigation Links */}
            <div className="floating-nav flex space-x-4">
                <a href="#section3" className="nav-item text-black" onClick={(e) => { e.preventDefault(); scrollToSection(welcomeRef); }}>Welcome</a>
                <a href="#skills" className="nav-item text-black" onClick={(e) => { e.preventDefault(); scrollToSection(skillsRef); }}>Skills</a>
                <a href="#section3" className="nav-item text-black" onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }}>Projects</a>
            </div>
            
            {/* Right Section: Links */}
            <div className="right flex space-x-4 items-center">
            <a href="\images\Most_Updated_Ryan_s_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-black">
                    <i class="fa-solid fa-file-pdf"></i>
                    <span> Resume</span>
                </a>
                <a href="https://github.com/RyanStan59" target="_blank" rel="noopener noreferrer" className="text-black">
                    <i className="fa-brands fa-github"></i>
                    <span> Github</span>
                </a>
                <a href="http://Linkedin.com/in/ryan-stanisci" target="_blank" rel="noopener noreferrer" className="text-black">
                    <i className="fa-brands fa-linkedin"></i>
                    <span> LinkedIn</span>
                </a>
                <a href="mailto:ryanstanisci@gmail.com" target="_blank" rel="noopener noreferrer" className="text-black">
                    <i className="fa-solid fa-envelope"></i>
                    <span> Email</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;

