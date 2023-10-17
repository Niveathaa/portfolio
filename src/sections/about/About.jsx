import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/resume.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects and learning has been my passion. I'm always pushed myself to do more!
                </p>
                <p>
                Hi, my name is Niveatha Nagarajan. I'm a full-stack web developer with a Bachelors degree in Information Technology.I have always pushed myself towards my passion and at reaching heights.Tap to give a look at my resume below and get to know more about me
                </p>
                <a href={CV} download className='btn primary'>Download Resume <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About