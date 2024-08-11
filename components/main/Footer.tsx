import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full mt-5 bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="flex mb-5 gap-5 z-[999]">
                    <a className="flex items-center" href="https://github.com/aliturab99" target="_blank">
                        <RxGithubLogo /> <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a className="flex items-center">
                        <RxDiscordLogo /> <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                    <a className="flex items-center" href="https://x.com/yawaraliturab" target="_blank">
                        <FaTwitter /> <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </a>
                    <a className="flex items-center" href="https://www.linkedin.com/in/ali-turab-naqvi/" target="_blank">
                        <FaLinkedinIn /> <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
            </div>

            <div className="mb-[20px] text-[15px] text-center z-[999]">
                &copy; All rights reserved by Ali Turab
            </div>
        </div>
    </div>
  )
}

export default Footer