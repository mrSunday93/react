import React from "react";
import Profile from '../4565922-assassin039s-creed-assassin039s-creed-syndicate-video-games-assassin039s-creed-syndicate.jpg';

const About = () => {
      return(
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-8 text-gray-800">
                    Tentang Saya
                </h2>
                <div className="flex flex-col items-center mb-12">
                    <img src={`${Profile}`} alt="Profile Picture" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"/>
                    <p className="text-lg text-gray-600 mb-2">Streamer & Gamer</p>
                    <p className="text-xl text-gray-700 font-semibold">I'm Streamer and Gamer Content Creator</p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">IoT</h3>
                        <p className="text-gray-700 mb-4">
                            I teach Student how to implement a devices into real life

                        </p>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">ProGayming</h3>
                        <p className="text-gray-700 mb-4">
                            I teach Student how to create a systems using a tech industrial framework such as ReactJS, AmbatuJS

                        </p>

                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition-colors duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-rose-700">Mobile apps</h3>
                        <p className="text-gray-700 mb-4">
                            I teach Student how to create a mobile apps

                        </p>

                    </div>

                </div>
                <p className="text-lg-gray-600 mt-8"> 
                   I do also provide gaming mentoring a competition and projects gayming
                </p>

            </div>

        </section>
      )
}

export default About;