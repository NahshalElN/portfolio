import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';

export default function Projects() {
  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col"
      style={{
        background: '#f1f1f1',
      }}
      id="myprojects"
    >
      <main className="min-h-screen font-dosis p-12">
      <section className="container mx-auto">
        <h1 className="my-8 flex justify-center text-5xl font-dosis font-bold">My Projects</h1>

        <section className="grid md:grid-cols-3 gap-8 grid-cols-1">
          {content.projects.list.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-10">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span>
                    {project.tags}
                  </span>
                </div>
                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                  {project.desc}
                </p>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 font-bold hover:underline hover:text-blue-400"
                >
                  View Project
                </a>
              </article>
            ))}
        </section>
      </section>
    </main>
    </div>
  );
}
