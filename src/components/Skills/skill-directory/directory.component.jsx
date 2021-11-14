import React from "react";

import MenuItem from "../skill-menu-item/skill-menu.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "html",
          imageUrl:
            "https://i.postimg.cc/brx1rT0p/Screen-Shot-2021-09-28-at-19-36-58.png",
          id: 1,
        },
        {
          title: "scss",
          imageUrl:
            "https://i.postimg.cc/fRGWqNnq/Screen-Shot-2021-09-28-at-19-37-34.png",
          id: 2,
        },
        {
          title: "css",
          imageUrl:
            "https://i.postimg.cc/nzHXTJqb/Screen-Shot-2021-11-14-at-14-29-03.png",
          id: 3,
        },
        {
          title: "JavaScript",
          imageUrl:
            "https://i.postimg.cc/rmJ8pRd7/Screen-Shot-2021-09-28-at-19-38-36.png",
          size: "large",
          id: 4,
        },
        {
          title: "React",
          imageUrl:
            "https://i.postimg.cc/SR1k60fr/Screen-Shot-2021-09-28-at-19-40-04.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="skill-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
