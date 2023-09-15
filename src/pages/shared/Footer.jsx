import React from 'react';
import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
      <div className='mt-32 bg-black'>
        <footer className="footer p-10 text-white ">
          <aside>
             <img src={logo} alt="" />
            <p>
              Car Doctor Industries Ltd.
              <br />
              Providing reliable tech since 2023
            </p>
          </aside>
          <nav>
            <header className="footer-title">Home</header>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Marketing</a>
         
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
           
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;