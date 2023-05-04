import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub, FaMedium } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hakanbilgi/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/hakanbilgi" target="_blank">
        <FaGithub />
      </a>
      <a href="https://medium.com/@hakanbilgi" target="_blank">
        <FaMedium />
      </a>
    </div>
  );
}

export default HeaderSocials