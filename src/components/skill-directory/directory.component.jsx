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
          imageUrl: "https://www.svgrepo.com/show/58911/html.svg",
          id: 1,
        },
        {
          title: "css",
          imageUrl: "https://cdn.svgporn.com/logos/css-3.svg",
          id: 2,
        },
        {
          title: "scss",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJGt-1CbUlZPgGh_GYwEEipQZ35kO0L344jymj33Bp4t6rqOHc15xhqD2NSj84_eYnMo&usqp=CAU",
          id: 3,
        },
        {
          title: "JavaScript",
          imageUrl: "https://cdn.svgporn.com/logos/javascript.svg",
          size: "large",
          id: 4,
        },
        {
          title: "React",
          imageUrl: "https://cdn.svgporn.com/logos/react.svg",
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
