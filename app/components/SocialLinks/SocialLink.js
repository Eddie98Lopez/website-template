import React from "react";
import Link from "next/link";
import styles from './Social.module.css'
import { FaGithub,FaGlobe } from "react-icons/fa";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";

const SocialLink = ({ link, ...props }) => {
  const { platform, href } = link;
  return (
    <li >
      <Link href={href} target="_blank" >
        {platform == "facebook" && <BiLogoFacebookCircle />}
        {platform == "instagram" && <BiLogoInstagramAlt />}
        {platform == "linkedIn" && <BiLogoLinkedinSquare />}
        {platform == "tikTok" && <BiLogoTiktok />}
        {platform == "twitter" && <BiLogoTwitter />}
        {platform == 'github' && <FaGithub/>}
        {platform == 'web-url' && <FaGlobe/>}
      </Link>
    </li>
  );
};

export default SocialLink;
