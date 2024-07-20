import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, deserunt nostrum maxime, itaque enim officiis, quidem corporis nihil ea eveniet est. Culpa itaque consectetur architecto libero beatae ratione in nobis!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur suscipit velit similique non alias. Quasi iure natus omnis quibusdam deserunt ea, voluptatibus repellendus neque optio laborum voluptatum unde sequi blanditiis.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor in rem deleniti molestiae consequuntur suscipit exercitationem, ipsum sed nulla. Veniam deserunt adipisci, mollitia omnis nisi vel possimus sunt cum? Voluptatem.</p>
      </div>
    </div>
  )
}

export default About
