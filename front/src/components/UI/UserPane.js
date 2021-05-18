import classes from './UserPane.module.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserPane = (props) => {
  const [paneVisiblity, setPaneVisiblity] = useState(false);

  useEffect(() => {
    setPaneVisiblity(props.userPaneVisibility);
  }, [props.userPaneVisibility]);

  const showLinks = props.linksToShow.map((link, index) => {
    return (
      <li key={`link-${index}`}>
        <Link
          to={link[1]}
          className={classes["user-pane-link"]}
          onClick={props.toggleUserPaneVisibility}
        >
          {link[0]}
        </Link>
      </li>
    );
  });

  return (
    <>
      <section
        className={classes["user-pane"]}
        style={{ display: `${paneVisiblity ? "block" : "none"}` }}
      >
        <ul>
          {showLinks}
          <br/>
          <li>
            <Link to="/" onClick={props.logOutUser}>
              Logout
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default UserPane;
