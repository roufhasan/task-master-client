import { useContext, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa6";
import SmallDevicesMenu from "./SmallDevicesMenu";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("We will miss you :(");
    });
  };
  return (
    <>
      <nav className="flex items-center justify-between py-2">
        <Logo />
        {/* Menu For Medium Devices */}
        <div className="hidden md:flex">
          <Menu user={user} handleLogOut={handleLogOut} />
        </div>
        {/* Menu For Small Devices */}
        <div onClick={toggleMenu} className="md:hidden">
          <FaBars className="text-2xl" />
        </div>
        {isOpen && (
          <div>
            <SmallDevicesMenu toggleMenu={toggleMenu} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
