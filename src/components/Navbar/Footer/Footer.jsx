import React from "react";
import "./Footer.css";
import logo from "../../../assets/logo_nagagiri.png";
import {
  FaFacebook,
  FaLocationDot,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {

  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  return (
    <>
      <section className="bg-[#e2e8f0] border-t-2 border-t-slate-950 py-8 mt-20">
        <div className="main flex container items-center justify-center mx-auto">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-2">
            <div>
              <img
                className="max-w-48"
                src={logo}
                alt="nagagiri_comforts_logo"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 py-4">
              <FaFacebook className="cursor-pointer fill-blue-700 text-3xl" />
              <FaInstagram className="cursor-pointer fill-pink-800 text-3xl" />
              <FaYoutube className="cursor-pointer fill-red-700 text-3xl" />
            </div>

            {/* Location */}

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
              <FaLocationDot />
              <h1 className="text-center">
                Hebbale Kalasa Hornadu Road Chikmagalur District - 577124
              </h1>
            </div>

            {/* Email */}
            <div className="flex items-center justify-start gap-5">
              <FaEnvelope />
              <h1 className="text-center">E-mail: adishjain73@gmail.com</h1>
            </div>

            {/* Mobile Number */}
            <div className="flex items-start justify-start gap-5">
              <FaMobileScreenButton />
              <h1 className="text-center">+91 903 509 0689 </h1>
            </div>
          </div>
          <section className="flex flex-col justify-center items-center gap-4">
            <div>
              <h1 className="font-bold text-primary">Quick Links</h1>
            </div>
            <div className="flex justify-center items-center">
              <ul className="flex justify-center flex-col items-center">
                <Link to="/" onClick={handleExploreClick}>
                  Home
                </Link>
                <Link to="nagagiri_comforts/about" onClick={handleExploreClick}>
                  About
                </Link>
                <Link
                  to="nagagiri_comforts/place-to-visit"
                  onClick={handleExploreClick}
                >
                  Places To Visit
                </Link>
                <li>
                  <Link
                    to="nagagiri_comforts/gallery"
                    onClick={handleExploreClick}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="nagagiri_comforts/contact"
                    onClick={handleExploreClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.584411575398!2d75.34926337489814!3d13.251377487090314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb362d714e4d23%3A0x3a345d04f91a8135!2sNagagiri%20Comforts!5e0!3m2!1sen!2sin!4v1722515561849!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
