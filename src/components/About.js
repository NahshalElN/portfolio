import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import content from '../content';

export default function About() {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      style={{
        background: '#f1f1f1',
      }}
      id="myabout"
    >
      <h1 className="text-5xl font-dosis font-bold mt-8">About Me</h1>
      <p className="mt-2 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis">
        {content.stack.desc}
      </p>
      <h1 className="text-3xl font-dosis font-bold my-8">Tech I Work With</h1>
      <div>
        <div className="flex flex-wrap justify-center items-center">
          {content.stack.tech.map((tech, index) => (
            <div>
              <span
            key={index}
            className={` h-20 w-20 bg-white shadow-xl  mx-6  rounded-full flex justify-center items-center p-4 ${
              index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
            }`}
          >
            <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} />
          </span>
          <span className="font-bold font-dosis flex justify-center items-center p-4 mx-3">{tech.title}</span>
          </div>
            
          ))}
        </div>
        <span className="font-bold font-dosis flex justify-center items-center">Frontend: </span>
        <div className="flex flex-wrap justify-center items-center">
          
          {content.stack.Frontend.map((tech, index) => (
            <div>
              <span className="bg-white shadow-xl  m-3  rounded-lg flex justify-center items-center p-3">{tech}</span>
            </div>
          ))}
        </div>

        <br/>
        <span className="font-bold font-dosis flex justify-center items-center">Backend/DBMS: </span>
        <div className="flex flex-wrap justify-center items-center">
          
          {content.stack.Backend.map((tech, index) => (
            <div>
              <span className="bg-white shadow-xl m-3 rounded-lg flex justify-center items-center p-3">{tech}</span>
            </div>
          ))}
        </div>

        <br/>
        <span className="font-bold font-dosis flex justify-center items-center">Others: </span> 
        <div className="flex flex-wrap justify-center items-center">
          
          {content.stack.Misc.map((tech, index) => (
            <div>
              <span className="bg-white shadow-xl m-3 rounded-lg flex justify-center items-center p-3">{tech}</span>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
}
