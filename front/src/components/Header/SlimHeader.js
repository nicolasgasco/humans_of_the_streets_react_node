import MainLogo from "./MainLogo";
import UserIcon from "../UI/UserIcon";
import "./SlimHeader.css";

// Smaller header for pages other than home
const SlimHeader = () => {
  return (
    <div className="slim-header">
      <MainLogo />
      <UserIcon />
    </div>
  );
};

export default SlimHeader;
