import { useState } from "react";
import { Tooltip } from "react-tooltip";
import AddTask from "../../AddTask/AddTask";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen w-full">
      <div
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 bg-green-500 hover:bg-green-800 cursor-pointer text-white rounded-full flex items-center justify-center absolute right-[3%] bottom-[4%]"
      >
        <p className="text-4xl" data-tooltip-id="add-new-task">
          +
        </p>
        <Tooltip id="add-new-task" place="top-end" content="Add New Task" />
      </div>
      <div className="relative">
        <h1 className="font-poppins">Welcome to Task Master</h1>
        <h3 className="font-delicious">Master your task with ease</h3>
        <AddTask isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Header;
