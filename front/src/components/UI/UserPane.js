import "./UserPane.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserPane = (props) => {
  const [paneVisiblity, setPaneVisiblity] = useState(false);
  console.log(props.userPaneVisibility);

  useEffect(() => {
    setPaneVisiblity(props.userPaneVisibility);
  }, [props.userPaneVisibility]);

  const showLinks = props.linksToShow.map((link, index) => {
    return (
      <li key={`link-${index}`}>
        <Link to={link[1]} className="user-pane-link" onClick={props.toggleUserPaneVisibility} >
          {link[0]}
        </Link>
      </li>
    );
  });

  return (
    <>
      <section
        className="user-pane"
        style={{ display: `${paneVisiblity ? "block" : "none"}` }}
      >
        <ul>{showLinks}</ul>
      </section>

    </>
  );
};

export default UserPane;
