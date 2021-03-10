import React from 'react';
import { SocialIcon } from "react-social-icons";
import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {
  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen bg-cover flex justify-center items-center bg-fixed"
      id="mycontact"
      style={{
        backgroundImage: `url(${content.header.bg})`
      }}
    >
      <div className="w-full flex md:flex-row flex-col-reverse justify-around items-center">
        <div className="font-dosis mt-5 transtion duration-2000">
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } animate-bounce transform transition duration-3000 text-center mb-3 text-white text-5xl font-bold`}
          >
            Contact Me
          </h1>
          <div
            className={`animate-bounce flex ${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 `}
          >
            <SocialIcon
            url="https://github.com/nahshaleln"
            className="m-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="mailto:nahshaleln@gmail.com"
            className="m-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://linkedin.com/in/nahshaleln"
            className="m-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          />
          </div>
        </div>
      </div>
      
    </div>
  );
}
