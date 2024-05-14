import Link from "next/link";
import Image from "next/image";
import fb from "../../../public/images/socialMediaIcons/fb.svg";
import pinterest from "../../../public/images/socialMediaIcons/pinterest.svg";
import insta from "../../../public/images/socialMediaIcons/insta.svg";
import twitter from "../../../public/images/socialMediaIcons/twitter.svg";

const socialMediaLinks = [
  { href: "/facebook", src: fb },
  { href: "/twitter", src: twitter },
  { href: "/pinterest", src: pinterest },
  { href: "/instagram", src: insta },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-6">
      {socialMediaLinks.map((socialMedia, index) => (
        <Link key={index} href={socialMedia.href} alt="No link">
          <Image src={socialMedia.src} width={20} alt="No img link" />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
