import Card from "./carduse"
import Wave from "./svgwave"
import './home.css'

const para = `Personal Portfolio Website as well as my first reactjs project.
This website contains an accumulation of all my projects and skills.
This website was made by me in my first year where i explored and gained a bit of experience in various fields of computer science. My top skills include css and web front end desiging , python automation and web scrapping.`
function Home() {
  return (
    <>
      <Wave/>
      <section id='section1'>
        <div className="titlebox">
          <h1 id="intro">Welcome to my Webstie | Arnab</h1>
          <p>{para}</p>
          <button id="resume">Download Resume</button>
        </div>
        <img id='webdesign' src={require("./images/webdesign.jpg")} alt='.'/>
      </section>
      <div className="flexbox"><Card/></div>
        <img id='frontpage' src={require("./images/frontpage.png")} alt='.'/>
    </>);
}
export default Home;