import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Timeline() {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#f1f1f1',
      }}
      id="Timeline"
    >
      <h1 className="text-3xl font-dosis font-bold">Timeline</h1>
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <div
          className="bg-white transtion shadow-xl duration-2000 ease-in-out max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
          style={{
            border: '1px solid #e5ecf9',
          }}
        >
          <TimeLineDetails />
        </div>
        <div className="flex justify-center items-center md:hidden">
          <TimeLineDetails />
        </div>
      </div>
      
    </div>
  );
}

const TimeLineDetails = () => {
  return (
    <div class="relative font-dosis w-full m-8">
  <div class="border-r-2 border-indigo-500 absolute h-full top-0" style={{left: 11 + 'px'}}></div>
  <ul class="list-none m-0 p-0">
    <li class="mb-2">
      <div class="flex items-center mb-1">
        <div class="bg-indigo-500 rounded-full h-6 w-6"></div>
        <div class="flex-1 ml-4 font-bold">DEC 2020 - BSc. Computer Science and Engineering.</div>
      </div>
      <div class="ml-12">
        Graduated from Al Ghurair University - Dubai.
      </div>
    </li>
    <li class="mb-2">
      <div class="flex items-center mb-1">
        <div class="bg-indigo-500 rounded-full h-6 w-6"></div>
        <div class="flex-1 ml-4 font-bold">SEPT 2018 - FEB 2020 - Frontend Developer at C.L Seifert.</div>
      </div>
      <div class="ml-12">
      <a class="text-blue-500" href="https://clseifert.ae" target="blank">clseifert.ae</a> <br/> <p>Developed landing pages, worked on several frontend projects, maintained Magento DB.</p>
      
      </div>
    </li>
    <li class="mb-2">
      <div class="flex items-center mb-1">
        <div class="bg-indigo-500 rounded-full h-6 w-6"></div>
        <div class="flex-1 ml-4 font-bold">OCT 2019 - DEC 2019 - Junior Developer at Starc.</div>
      </div>
      <div class="ml-12">
      <a class="text-blue-500" href="https://starc.io" target="blank">starc.io</a> <br/> <p>I was part of the Starc team participating in Dubai Future Accelerators, as a Junior Dev. We were testing a live implementation in a school.</p>
      </div>
    </li>
    <li class="mb-2">
      <div class="flex items-center mb-1">
        <div class="bg-indigo-500 rounded-full h-6 w-6"></div>
        <div class="flex-1 ml-4 font-bold">APRIL 2018 - 1MAC Full Stack Developer Track.</div>
      </div>
      <div class="ml-12">
        Completed the 1 Million Arab Coders Full Stack Track.
      </div>
    </li>
  </ul>
</div>
  );
};
