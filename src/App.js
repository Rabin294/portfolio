import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home-page/homepage.component";

import Header from "./components/header/header.component";
import Aboutpage from "./components/about-page/aboutpage.component";
import Skillspage from "./components/skills-page/skills.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/skills" component={Skillspage} />
        {/* <Route path="/projects" component={ProjectsPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />  */}
      </Switch>
    </div>
  );
}

export default App;
