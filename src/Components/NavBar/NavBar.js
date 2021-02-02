import React from 'react'

function NavBar() {


    const [theme, setTheme] = useState("light");

    const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
  
    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };


    return (
        <div>
            <div className="hamburger">
            <div onClick={themeToggler}>{icon}</div>
          </div>
        </div>
    )
}

export default NavBar

