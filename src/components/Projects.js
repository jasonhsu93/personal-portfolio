import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/demoshot.jpg";
import projImg2 from "../assets/img/antiyap2.png";
import projImg3 from "../assets/img/amongus.png";
import projImg4 from "../assets/img/riscmachine.png";
import projImg5 from "../assets/img/minesweeper.png";
import projImg6 from "../assets/img/IoT Concurrent Server.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BasketBot",
      description: "🏆 Winner of ProduHacks 2024! An automatic basketball scorekeeper using computer vision and speech recognition in Python",
      imgUrl: projImg1,
      url: "https://github.com/04christopher/basketbot"
    },
    {
      title: "AntiYapAI",
      description: "An AI-powered web chat application that supports message and chat history summarization using JavaScript, MongoDB, Llama 3.2, Express",
      imgUrl: projImg2,
      url: "https://github.com/jasonhsu93/AntiYapAI"
    },
    {
      title: "AmongUs Data Searcher",
      description: "A web application that allows users to search for in game player data and statistics built with SQL, OracleDB, JavaScript",
      imgUrl: projImg3,
      url: "https://github.com/jasonhsu93/AmongUs-Data-Searcher"
    },
    {
      title: "RISC Machine",
      description: "A RISC machine developed on a DE1-SoC FPGA motherboard that supports basic arithmetic and storing operations, utilizing SystemVerilog",
      imgUrl: projImg4,
      url: "https://github.com/jasonhsu93/CPU-Classic-RISC-Pipeline-Machine"
    },
    {
      title: "Minesweeper",
      description: "A classic minesweeper game built using TypeScript, React",
      imgUrl: projImg5,
      url: "https://github.com/jasonhsu93/minesweeper2"
    },
    {
      title: "IoT Concurrent Server",
      description: "A concurrent server that can connect multiple clients to simulated IoT devices using Java",
      imgUrl: projImg6,
      url: "https://github.com/jasonhsu93/IoT-Data-Analytics-Client-Server"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            
              <div>
                <h2>Projects</h2>
                <p>github pages are linked, just click on the coresponding cards if interested~</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
