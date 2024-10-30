import React from "react";
import dps from '../345484-Eivor-Female-Assassins-Creed-Valhalla-AC-Valhalla-Video-Game-Viking-Army.jpg';
import maximum from '../saka.png';
import bi from '../346869-Eivor-Axe-AC-Valhalla-Assassins-Creed-Valhalla-Video-Game-Viking-Warrior.jpg';
import porto from '../4588616-video-games-playstation-4-xbox-one-playstation-3-xbox-assassin039s-creed.jpg'


const Projects = () => {
     return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-8">My Projects</h2>
                {/* Update grid to 4 columns on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={dps} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Caleg DPRD</h3>
                        <p className="text-gray-700">Profile Website Caleg</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={maximum} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Maximum Alpha</h3>
                        <p className="text-gray-700">Profesional footballer</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={bi} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">CV BIntang Perkasa</h3>
                        <p className="text-gray-700">Profesioanl Landing page</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={porto} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Profesional Streamer</h3>
                        <p className="text-gray-700">Profesional Portofolio Website ElysaJS</p>
                    </div>
                    {/* This container is now inside the grid */}
                    <div className="bg-gray-100 p-4 rounded">
                        <img src={porto} alt="Perrel Brown" className="w-full h-48 object-cover mb-4 rounded"/>
                        <h3 className="text-2xl font-bold mb-2">Profesional Website 2</h3>
                        <p className="text-gray-700">Profesional Website Using Tailwind</p>
                    </div>
                </div>
            </div>
        </section>
     )
}

export default Projects;


