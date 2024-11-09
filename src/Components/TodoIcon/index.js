import { ReactComponent as CheckIcon } from "./CheckIcon.svg";
import { ReactComponent as DeleteIcon } from "./DeleteIcon.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckIcon className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteIcon className="Icon-svg" fill={color} />,
};
function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container  Icon-container${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
