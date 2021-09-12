import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./page/home-page/homepage.component";
import Aboutpage from "./components/about-page/aboutpage.component";
import Skillspage from "./components/Skills/skills-page/skills.component";
import Blogpage from "./components/blog-page/blog.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/skills" component={Skillspage} />
        <Route path="/blog" component={Blogpage} />
        {/* <Route path="/projects" component={ProjectsPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />  */}
      </Switch>
    </div>
  );
}

export default App;
