import React from "react";
import Image from "next/image";
import Link from "next/link";
 
const Footer = () => {
  return (
    // <footer className="flex h-24 w-full items-center justify-center border-t">
    <footer className="h-auto w-full py-2 md:py-8 text-md md:text-md justify-around sm:flex sm:flex-row grid grid-cols-1 px-4 md:px-2 border-t">
      <div className="w-36 md:w-52 md:md:w-36 my-2 md:my-auto space-y-2">
        <Link href="/">
            <Image
              src="/logo2.png"
              width={800}
              height={1000}
              alt="Picture of the author"
            />
        </Link>
      </div>
      <div className="flex flex-col my-2 md:my-auto space-y-2">
        <div className="hover:underline">
          <Link href="/#home">
            Home
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/#services">
            Services
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/#testimonials">
            Testimonials
          </Link>
        </div>
      </div>
      <div className="flex flex-col my-2 md:my-auto space-y-2">
        <div className="hover:underline">
          <Link href="/#team">
            Team
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/#contact">
            blog
          </Link>
        </div>
        <div className="hover:underline">
          <Link href="/#contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;