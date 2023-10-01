import { Link } from "react-router-dom";
import Button from "../Button";
import { FaXmark } from "react-icons/fa6";

const SmallDevicesMenu = ({ toggleMenu, user, handleLogOut }) => {
  return (
    <div className="h-screen bg-white w-full absolute left-0 top-0 flex flex-col justify-center items-center z-20">
      <div className="flex items-center justify-center flex-col gap-y-4">
        <Link to="/">
          <Button label={"Home"} />
        </Link>
        {user ? (
          <Link onClick={handleLogOut}>
            <Button label={"Logout"}></Button>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <Button label={"Login"}></Button>
            </Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
      <div className="mt-16">
        <FaXmark onClick={toggleMenu} className="text-4xl text-red-600" />
      </div>
    </div>
  );
};

export default SmallDevicesMenu;
