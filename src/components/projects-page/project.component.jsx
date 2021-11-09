import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import cardgame from "../../assets/cardgame.png";
import "./project.styles.scss";

const Projectpage = () => (
  <div className="project">
    <div className="project-menu">
      <div className="project-item">
        <div className="project-content">
          <h1 className="project-title">Project 1</h1>
          <div
            style={{
              backgroundImage: `url(${cardgame})`,
              backgroundSize: "cover",
              height: "470px",
            }}
            className="image"
          ></div>
          <a
            className="link"
            target="blank"
            href="https://rob-cards-game.netlify.app/"
          >
            <h3>Card-Game link</h3>
          </a>

          <span className="project-subtitle">
            This is a fun card game. The game has 2 players, playing in rounds -
            In each turn, a player flips a card as many times as he/she wishes.
            Each result get added to his ROUND score - BUT, if the player rolls
            a 1(A) or 11(J), all his ROUND score gets lost. After that, it's the
            next player's turn - The player can choose to 'Hold', which means
            that his ROUND score gets added to his GLOBAL score. Players take a
            turn - The first player to reach 100 points on GLOBAL score wins the
            game.
          </span>
        </div>
      </div>
      <div className="project-item">
        <div className="project-content">
          <h1 className="project-title">Project 2</h1>
          <div
            style={{
              backgroundImage: `url(${project1})`,
              backgroundSize: "cover",
              height: "470px",
            }}
            className="image"
          ></div>
          <a
            className="link"
            target="blank"
            href="https://crwn-fun-shopping.herokuapp.com/"
          >
            <h3>Project-Shopping link</h3>
          </a>

          <span className="project-subtitle">
            A blog (a truncation of "weblog")[1] is a discussion or
            informational website published on the World Wide Web consisting of
            discrete, often informal diary-style text entries (posts). Posts are
            typically displayed in reverse chronological order, so that the most
            recent post appears first, at the top of the web page. Until 2009,
            blogs were usually the work of a single individual,[citation needed]
            occasionally of a small group, and often covered a single subject or
            topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring
            the writing of multiple authors and sometimes professionally edited.
            MABs from newspapers, other media outlets, universities, think
            tanks, advocacy groups, and similar institutions account for an
            increasing quantity of blog traffic. The rise of Twitter and other
            "microblogging" systems helps integrate MABs and single-author blogs
            into the news media. Blog can also be used as a verb, meaning to
            maintain or add content to a blog.A blog (a truncation of
            "weblog")[1] is a discussion or informational website published on
            the World Wide Web consisting of discrete, often informal
            diary-style text entries (posts). Posts are typically displayed in
            reverse chronological order, so that the most recent post appears
            first, at the top of the web page. Until 2009, blogs were usually
            the work of a single individual,[citation needed] occasionally of a
            small group, and often covered a single subject or topic. In the
            2010s, "multi-author blogs" (MABs) emerged, featuring the writing of
            multiple authors and sometimes professionally edited. MABs from
            newspapers, other media outlets, universities, think tanks, advocacy
            groups, and similar institutions account for an increasing quantity
            of blog traffic. The rise of Twitter and other "microblogging"
            systems helps integrate MABs and single-author blogs into the news
            media. Blog can also be used as a verb, meaning to maintain or add
            content to a blog.
          </span>
        </div>
      </div>
      <div className="project-item">
        <div className="project-content">
          <h1 className="project-title">Project 3</h1>
          <div
            style={{
              backgroundImage: `url(${project2})`,
              backgroundSize: "cover",
              height: "470px",
            }}
            className="image"
          ></div>

          <a
            className="link"
            target="blank"
            href="https://forkify-rabin.netlify.app"
          >
            <h3>Project-Forkify link</h3>
          </a>

          <span className="project-subtitle">
            A blog (a truncation of "weblog")[1] is a discussion or
            informational website published on the World Wide Web consisting of
            discrete, often informal diary-style text entries (posts). Posts are
            typically displayed in reverse chronological order, so that the most
            recent post appears first, at the top of the web page. Until 2009,
            blogs were usually the work of a single individual,[citation needed]
            occasionally of a small group, and often covered a single subject or
            topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring
            the writing of multiple authors and sometimes professionally edited.
            MABs from newspapers, other media outlets, universities, think
            tanks, advocacy groups, and similar institutions account for an
            increasing quantity of blog traffic. The rise of Twitter and other
            "microblogging" systems helps integrate MABs and single-author blogs
            into the news media. Blog can also be used as a verb, meaning to
            maintain or add content to a blog.A blog (a truncation of
            "weblog")[1] is a discussion or informational website published on
            the World Wide Web consisting of discrete, often informal
            diary-style text entries (posts). Posts are typically displayed in
            reverse chronological order, so that the most recent post appears
            first, at the top of the web page. Until 2009, blogs were usually
            the work of a single individual,[citation needed] occasionally of a
            small group, and often covered a single subject or topic. In the
            2010s, "multi-author blogs" (MABs) emerged, featuring the writing of
            multiple authors and sometimes professionally edited. MABs from
            newspapers, other media outlets, universities, think tanks, advocacy
            groups, and similar institutions account for an increasing quantity
            of blog traffic. The rise of Twitter and other "microblogging"
            systems helps integrate MABs and single-author blogs into the news
            media.
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Projectpage;
