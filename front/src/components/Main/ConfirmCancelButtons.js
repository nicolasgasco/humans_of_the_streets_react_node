import DarkButton from "../UI/DarkButton";
import classes from "./ConfirmCancelButtons.module.css";

const ConfirmCancelButtons = (props) => {
  return (
    <div>
      <DarkButton
        text="Cancel"
        className={classes["show-data-button"]}
        onClick={props.onCancel}
      />
      <DarkButton
        text="Confirm"
        className={classes["show-data-button"]}
        onClick={props.onConfirm}
      />
    </div>
  );
};

export default ConfirmCancelButtons;
