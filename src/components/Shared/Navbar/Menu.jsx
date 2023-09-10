import { Link } from "react-router-dom";
import Button from "../Button";

const Menu = () => {
  return (
    <div className="flex justify-evenly items-center gap-x-10 font-medium">
      <Link to="/">
        <Button label={"Home"} />
      </Link>
      <Link to="/login">
        <Button label={"Login"}></Button>
      </Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Menu;
