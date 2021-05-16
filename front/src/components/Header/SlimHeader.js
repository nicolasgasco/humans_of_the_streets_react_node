import MainLogo from "./MainLogo";
import UserIcon from "../UI/UserIcon";
import "./SlimHeader.css";

// Smaller header for pages other than home
const SlimHeader = (props) => {
  return (
    <div className="slim-header">
      <MainLogo />
      <UserIcon toggleUserPaneVisibility={props.toggleUserPaneVisibility} session={props.session}/>
    </div>
  );
};

export default SlimHeader;
