import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-center text-center items-center flex-col h-auto p-[15px] sm:min-h-[70px] bg-navy">
      <div className="text-center items-center text-[13px] text-light_slate">
        <p className="p-2 font-sora">
          © 2023 ImaginAI, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
