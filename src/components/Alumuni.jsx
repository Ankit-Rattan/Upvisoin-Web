import React from "react";
import { Link } from "react-router-dom";
import DGS from "./DGS";
import GS from "../images/GS.jpg";
import "../Styles/Footer.css";
import Navbar from "./Navbar.jsx";
import AnimatedCursor from "react-animated-cursor";
import AlumCard from "./AlumCard.jsx";
import AyushPranav from "../images/AyushPranav.jpg";
import cpsir from "../images/cprakash.jpg"
import AlumFac from "./AlumFac.jsx";
import rbasu from "../images/rBasu.jpg"



const Alumni = () => {
  return (
    <>
      <AnimatedCursor/>
      <Navbar />
      
      <div className=" pb-5 px-[1rem] max-w-[100%]">
        <p className="text-slate-200 text-center text-3xl font-semibold mb-3">Our Alumni</p>
        <div className="">
          <div className=" pb-5 px-[1rem] max-w-[100%]">
            <div className="">
              <div className="allteam">
                <div className="">
                  <div className="">
                    <div className="card flex justify-evenly flex-wrap  gap-[.5rem]">
                    
                      <div>
                        <AlumFac
                          name="Dr. Chandra Prakash"
                          desig="Faculty Coordinator (2021-2022)"
                          img={cpsir}
                          linkedin="https://www.linkedin.com/in/chandraprakash86/"
                        />
                      </div>
                      <div>
                        <AlumFac
                          name="Dr. Rikmantra Basu"
                          desig="Faculty Coordinator (2021-2022)"
                          img={rbasu}
                          linkedin="https://www.linkedin.com/in/rikmantra-basu-56843b191/"
                          email="mailto:rikmantrabasu@nitdelhi.ac.in"
                        />
                      </div>
                    </div>
                    <hr className="my-[3rem]" />

                    <div className="card flex justify-around flex-wrap  gap-[.5rem]">
                    
                      <div>
                        <AlumCard
                          name="Navneet Singh"
                          desig="General Secretary (2022-2023)"
                          img="https://media.licdn.com/dms/image/D4D03AQGbWZbg7-DjVg/profile-displayphoto-shrink_400_400/0/1669055975082?e=1719446400&v=beta&t=HlIhpcl-TBBIo7tXws4FKCnWcH926EZQWebibW3wov4"
                          linkedin="https://www.linkedin.com/in/navneetsingh123/"
                          email="mailto:navneetsingh@example.com"
                          link = "/navneet"
                        />
                      </div>
                      <div>
                        <AlumCard
                          name="Rahul Sinha"
                          desig="General Secretary (2021-2022)"
                          img="https://media.licdn.com/dms/image/D4D03AQFM5Hf0qzvOMw/profile-displayphoto-shrink_400_400/0/1694754193166?e=1719446400&v=beta&t=kLVZmuIisoArINBdPdgmA5EUpMwl0rkKIHAbIY3A1Q4"
                          linkedin="https://www.linkedin.com/in/rahulsinha19/"
                          email="mailto:rahul_18@alumni.nitdelhi.ac.in"
                          link="/rahulsinha"
                        />
                      </div>
                      <div>
                        <AlumCard
                          name="Aditya Sharma"
                          desig="General Secretary (2020-2021)"
                          img="https://media.licdn.com/dms/image/D4D03AQErmwCsCtX7Sw/profile-displayphoto-shrink_400_400/0/1695185770687?e=1719446400&v=beta&t=8WgKpN9xjikqjFLgDcC6xxapYemJUBEtDXjez9Ullio"
                          linkedin="https://www.linkedin.com/in/aditya-sharma-6b18ba158/"
                          email="mailto:rituparn678@gmail.com"
                          link="/adityasharma"  
                        />
                      </div>
                      <div>
                        <AlumCard
                          name="Ayush Pranav"
                          desig="General Secretary (2018-2019)"
                          img={AyushPranav}
                          linkedin="https://www.linkedin.com/in/aditya-sharma-6b18ba158/"
                          email="mailto:ayushpranav10@gmail.com"
                          link="/ayushpranav"  
                        />
                      </div>
                    </div>
                    <hr className="my-[3rem]" />
                    <div className="card flex justify-around flex-wrap  gap-[.5rem]">

                      <div>
                        <AlumCard
                          name="Aryan shrivastava"
                          desig="Deputy Secretary General (2022-2023)"
                          img="https://media.licdn.com/dms/image/C4E03AQHnxbnWlra-Bw/profile-displayphoto-shrink_400_400/0/1617206667667?e=1719446400&v=beta&t=ekat9--hYJ3gPubIvNuMsjNaD7ctSNN3DVNoFRIu72s"
                          linkedin="https://www.linkedin.com/in/aryan-srivastava-17787b201/"
                          email="mailto:aryans@example.com"
                          link="/aryansrivastav"
                        />
                      </div>
                      <div>
                        <AlumCard
                          name="Abhishek Kumar Suman"
                          desig="Deputy Secretary General (2021-2022)"
                          img="https://media.licdn.com/dms/image/D4D03AQHMprxBOHeMRg/profile-displayphoto-shrink_400_400/0/1686179263863?e=1719446400&v=beta&t=q50YpIagDWvW8Mlo2ncvCj3Ju6ETXxOeBQ10RwgZDiA"
                          linkedin="https://www.linkedin.com/in/aksuman055/"
                          email="mailto:aksuman@example.com"
                          link="/aksuman"
                        />
                      </div>
                      <div>
                        <AlumCard
                          name="Rahul Sinha"
                          desig="Deputy General Secretary (2020-2021)"
                          img="https://media.licdn.com/dms/image/D4D03AQFM5Hf0qzvOMw/profile-displayphoto-shrink_400_400/0/1694754193166?e=1719446400&v=beta&t=kLVZmuIisoArINBdPdgmA5EUpMwl0rkKIHAbIY3A1Q4"
                          linkedin="https://www.linkedin.com/in/rahulsinha19/"
                          email="mailto:rahul_18@alumni.nitdelhi.ac.in"
                          link="/rahulsinha"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni;
