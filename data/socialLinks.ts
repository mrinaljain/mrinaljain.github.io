import { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

interface Link {
   id: string;
   href: string;
   icon: IconType;
}

export const socialLinks: Link[] = [
   { id: "linkedin", href: "https://www.linkedin.com/in/mrinaljain", icon: FaLinkedin },
   { id: "github", href: "https://github.com/mrinaljain", icon: FaGithub },
   { id: "twitter", href: "https://twitter.com/_mrinaljain", icon: FaTwitter },
   { id: "email", href: "mailto:jain.mrinal140@gmail.com", icon: FaEnvelope },
   { id: "facebook", href: "https://www.facebook.com/TheIntrovertInfluencer/", icon: FaFacebook },
];