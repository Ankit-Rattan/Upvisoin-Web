import React from 'react'
import Navbar from './Navbar'
import AnimatedCursor from 'react-animated-cursor'
import AlumProfile from './AlumProfile'
import img from "../images/AyushPranav.jpg"

const Adityasharma = () => {
    return (
        <div>
            <Navbar />
            <AnimatedCursor />
            <AlumProfile
                name="Ayush Pranav"
                desig="General Secretary (2018-2019)"
                img={img}
                linkedin="https://www.linkedin.com/in/ayushpranav10/"
                email="mailto:rahulsinha@example.com"
                mess="During my tenure as the GS of the Technical Club, the key idea was to share the experiences, skills & insights with fellow juniors, aiming to spare them from the obstacles that we once faced. This led to numerous engaging sessions and exchanges with the juniors. Whether it was spearheading the inaugural robotics workshops or facilitating coding sessions, I was inspired by the enthusiastic energy and impressive potential displayed by all involved. The intense gaming battles of FIFA and Counter Strike remain memorable highlights.
There were demanding days of coordinating semester schedules for various events and programs (especially securing available venues in the old campus), as well as procuring the college's inaugural robotics and technical club gear.  However, credit goes to the incredible team that helped navigate through these challenges. Looking back on my journey, I can say it was an incredibly enriching experience that gifted me with memories to last a lifetime.

I extend my best wishes to the club for a bright future and hope they surpass our achievements, reaching new heights and accomplishing all the amazing goals that eluded us."
work="Former GS and DGS, Technical Club"
            />
        </div>
    )
}

export default Adityasharma
