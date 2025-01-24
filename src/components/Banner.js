import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Computer Engineering Student", "Tech Reviewer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div className={"animate__animated animate__fadeIn"}>
                <span className="tagline">Hi, Welcome to my website!</span>
                <h1>{`Jason Hsu`}</h1>
                <h3>{`UBC Computer Engineering Student`}</h3>
                  <p>I’m a 3rd year Computer Engineering student at the University of British Columbia, originally from Taiwan and raised in Canada from age ten. Growing up near a hub of semiconductor manufacturing sparked my fascination with computers early on, and this interest flourished when I built my own PCs and helped friends and clients. Eager to stay on the cutting edge and share my interest, I launched my YouTube channel “Peezs,” which now boasts more than 2 million views and 6,000 subscribers—covering gaming, tech reviews, and tutorials on everything from OS upgrades to network setups. My passion for software development took root in high school, where I self-taught Python and Java using resources like Codecademy, CodeHS, and CodingBat. My programming journey continued in University, where I am actively taking software and computer engineering courses, participating in hackathons and joining design teams. Outside of coding and content creation, I enjoy basketball, table tennis, baseball, and snowboarding, continually seeking new challenges and embracing the dynamic world of technology. Ultimately, I look forward to tackling software challenges that allow me to grow as a developer while creating impactful solutions. Feel free to reach out to me!</p>
                  <a style={{ textDecoration: 'none', outline: 'none' }} href="mailto:jasonhsubusiness@gmail.com">
                    <button style={{ outline: 'none', boxShadow: 'none' }}>Send me a message <ArrowRightCircle size={25} /></button>
                  </a>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div className={"animate__animated animate__zoomIn"}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
