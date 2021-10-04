import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./page/home-page/homepage.component";
import Aboutpage from "./components/about-page/aboutpage.component";
import Skillspage from "./components/Skills/skills-page/skills.component";
import Blogpage from "./components/blog-page/blog.component";
import Projectpage from "./components/projects-page/project.component";
import Mailingpage from "./components/contact-page/contact.component";
import Form from "../src/components/blog-page/form/Form";
import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/skills" component={Skillspage} />
        <Route path="/blog" component={Blogpage} />
        <Route path="/Form" component={Form} />
        <Route path="/contact" component={Mailingpage} />
        <Route path="/projects" component={Projectpage} />
      </Switch>
    </div>
  );
}

export default App;
