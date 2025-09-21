import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import History from './History.jsx';
import Education from './Education.jsx';
import Awards from './Awards.jsx';
import Experience from './Experience.jsx';
import Project from './Project.jsx';
import HtmlCss from './HtmlCss.jsx';
import Javascript from './Javascript.jsx';
import ReactProjects from './ReactProjects.jsx';
import Video from './Video.jsx';
import HelloWorld from './HelloWorld.jsx';
import Hello from './Hello.jsx';

function App() {
  return (
    <>
      <h1>정연수의 포트폴리오 사이트</h1>
      <nav>
        <Link to="/history">History</Link> | {" "}
        <Link to="/project">Project</Link> | {" "}
        <Link to="/hello-world">Hello World!</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/history" element={<History />}>
          <Route path="education" element={<Education />} />
          <Route path="awards" element={<Awards />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="/project" element={<Project />}>
          <Route path="html-css" element={<HtmlCss />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="react" element={<ReactProjects />} />
          <Route path="video" element={<Video />} />
        </Route>
        <Route path="/hello-world" element={<HelloWorld />}>
          <Route path="hello" element={<Hello />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
