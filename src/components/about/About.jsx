import "./about.css";
import Award from "../../img/award.png";
// import Link from 'react-dom'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://wcs.uwo.ca/upload/CE0060b.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Im Selfmotivated  MERN Stack Developer.
        </p>
        <p className="a-desc">
        An efficient and self-motivated individual open to exploring new areas of work. 
          <br />
       Skilled in JavaScript,ReactJS,Redux,Express,Mongoose, NodeJs,
        <br />
       A few facts about me, hardworking, focused and
        punctual individual with good analytical and problem solving skill. I have the ability to learn new things quickly and to juggle and prioritize different tasks. May not a 'know-it-all' but definitely a 'learn-it-all' guy. Always on the lookout for challenging opportunities.
          <br />
       My objective will be to secure a position where I can efficiently contribute my skills and abilities to the growth of the organization and build my professional career.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h3 className="a-award-title">Certification</h3>
            <p className="a-award-desc">
              Full-Stack Web Development by Codding Shuttle
              {/* <Link to='https://drive.google.com/file/d/1NhOGpgtkW9rmcwrr2xf4sYKnTA-Aip28/view?usp=share_link'>Click Here</Link> */}
              <br />
              <a className="a-link"  href="https://drive.google.com/file/d/1NhOGpgtkW9rmcwrr2xf4sYKnTA-Aip28/view?usp=share_link" target={"blank"} >Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;