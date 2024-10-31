import React from 'react'
import Hero from './Hero';
import SkillsGrid from './Skills/SkillsGrid';
import AboutMe from './About/AboutMe';
import Portfolio from './Portfolio/Portfolio'

export default  function Homepage () {
    return (
        <div>
            <Hero />
            <SkillsGrid />
            <AboutMe />
            <Portfolio />
        </div>
    )
}
