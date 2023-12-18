import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState} from "react";
import { uselocation } from 'react-router-dom';
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import joginlogo from "@/assets/images/je-logo.png"
import Image from "next/image";


const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  // const [navbg, setnavbg] = react.usestate("transparent");
  // const location = uselocation();
  const [navColor, setnavColor] = useState("transparent");
  // useEffect(() => {
  //   if (window.location.pathname === "/projects") {
  //     setnavColor("#ffffff");
  //   } 
  // }, [location]);
  const listenScrollEvent = () => {
    
    window.scrollY > 200 ? setnavColor("#000000") : setnavColor("transparent");
    
   
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header className="header-responsive">
        <div className="container mt-14" style={{height:"3.8rem",backgroundColor:navColor,marginLeft:"0px",transition:"0.3s ease-in"}}>
          <div className="logo" style={{marginLeft:"5%"}}>
            <Link href="/">
            <div className="title-card">
              <Image src={joginlogo} width={60} height={60} alt="image" className="logo-main"/>
              <div style={{marginTop:"-7%"}}> 
              <TitleLogo title="JoginElectricals" caption="" className="logomin" />
              </div>
              </div>
               {/* <Image src="./logo.jpg" alt="choose" width={20} height={20}/> */}
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
            style={{paddingLeft:"20%",paddingTop:"0.5%"}}
          >
            <Link
              href="/"
              // className={activeLink == "/" ? "activeLink" : "none"}
              className="beaut"
              style={{color:"white"}}
            >
              Home
            </Link>
            
            <Link
              href="/services"
              // className={activeLink == "#expertise" ? "activeLink" : "none"} 
              className="beaut"
              style={{color:"white"}}
            >
              Services
            </Link>
            {/* <Link
              href="/projects"
              // className={activeLink == "#portFolio" ? "activeLink" : "none"}
              className="beaut"
              style={{color:"white"}}
            >
              Our Projects
            </Link> */}
            <Link
              href="/#about-us"
              // className={activeLink == "#about-us" ? "activeLink" : "none"}
              className="beaut"
              style={{color:"white"}}
            >
             About
            </Link>
            <Link
              href="/our-projects"
              // className={activeLink == "#portFolio" ? "activeLink" : "none"}
              className="beaut"
              style={{color:"white"}}
            >
             Our Projects
            </Link>
            <Link
              href="/#foot"
              // className={activeLink == "#foot" ? "activeLink" : "none"}
              className="beaut"
              style={{color:"white"}}
            >
              Contact
            </Link>
          </nav>
          <button className="button-hidden" onClick={() => setOpen(!open)} style={{
            visibility:"none"
          }}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
