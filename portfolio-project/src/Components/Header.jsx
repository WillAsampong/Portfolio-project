// import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between py-6 w-4/5 mx-auto">
      <div className="flex items-center gap-x-4">
        <div className="logo">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0.5C9 0.5 0 9.5 0 20.5C0 31.5 9 40.5 20 40.5C31 40.5 40 31.5 40 20.5C40 9.5 31 0.5 20 0.5ZM11.8 28C9.6 28 7.8 26.2 7.8 24C7.8 21.8 9.6 20 11.8 20C14 20 15.8 21.8 15.8 24C15.8 26.2 14 28 11.8 28ZM28.5 26.9C26.7 28 24.3 27.3 23.2 25.5L17.6 15.8C16.5 14 17.2 11.6 19 10.5C20.8 9.4 23.2 10.1 24.3 11.9L29.9 21.6C31 23.5 30.3 25.9 28.5 26.9Z" fill="#232E35"/>
          </svg>
        </div>
        <div className="name">
          <p className="font-bold">Will</p>
        </div>
      </div>
      <nav className="nav-links">
        <ul className="flex items-center gap-x-6">
          <li>Services</li>
          <li>Portfolios</li>
          <li>Experience</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="resume">
        <button className="px-4 py-2 rounded-md border">Resume</button>
      </div>
    </header>
  )
}

export default Header