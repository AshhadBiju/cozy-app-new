"use client";
import Link from "next/link";
import Image from "next/image";
// import fb from "@images/socialMediaIcons/fb.svg";
// import pinterest from "@images/socialMediaIcons/pinterest.svg";
// import insta from "@images/socialMediaIcons/insta.svg";
// import twitter from "@images/socialMediaIcons/twitter.svg";
import Icon from "@components/UIComponents/Icon";

const socialMediaLinks = [
  { href: "/facebook", name: "fb" },
  { href: "/twitter", name: "twitter" },
  { href: "/pinterest", name: "pinterest" },
  { href: "/instagram", name: "insta" },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-6">
      {socialMediaLinks.map((socialMedia, index) => (
        <Link key={index} href={socialMedia.href} alt="No link">
          <Icon
            name={socialMedia.name}
            width={20}
            alt="No img link"
            className="hover:scale-110 transition ease-in-out duration-200"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
