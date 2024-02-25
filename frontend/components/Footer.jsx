import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-center flex-col md:flex-row gap-[50px] md:gap-0">
        {/* LEFT START */}

        <div className="flex gap-4 justify-center md:justify-start">
          {/* <div
                        onClick={() =>
                            window.open("https://facebook.com", "_blank")
                        }
                        className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
                    >
                        <FaFacebookF size={20} />
                    </div> */}
          <Link
            href="https://twitter.com"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
          >
            <FaTwitter size={20} />
          </Link>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
        {/* RIGHT END */}
      </Wrapper>
      <Wrapper className="flex justify-center mt-10 flex-col md:max-lg:flex-row gap-[10px] md:gap-0 items-center">
        {/* LEFT START */}
        <div className="mb-[20px] flex gap-10">
          <Link
            href="/terms"
            className="text-[20px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left"
          >
            Terms and Conditions
          </Link>
          <Link
            href="/privacy"
            className="text-[20px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refund"
            className="text-[20px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left"
          >
            Refund Policy
          </Link>
          <Link
            href="/support"
            className="text-[20px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left"
          >
            Customer Support
          </Link>
          <Link
            href="/shipping"
            className="text-[20px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left"
          >
            Shipping Policy
          </Link>
        </div>
        <div className="text-[20px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Undiscovered, Inc. All Rights Reserved
        </div>
        {/* LEFT END */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
