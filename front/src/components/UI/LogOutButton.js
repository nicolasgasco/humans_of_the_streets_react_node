import StandardButton from "./StandardButton";

const logoutUser = () => {};

const LogOutButton = () => {
  return <StandardButton to="/" onClick={logoutUser} />;
};
