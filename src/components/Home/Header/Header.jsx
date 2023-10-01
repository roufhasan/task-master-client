import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import AddTask from "../../AddTask/AddTask";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import TaskCard from "../TaskCard/TaskCard";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tasks?email=${user?.email}`)
      .then((res) => {
        const tasks = res.data;
        setTasks(tasks);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, newTask]);
  return (
    <div className="min-h-[800px] w-full relative">
      <div
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 bg-green-500 hover:bg-green-800 cursor-pointer text-white rounded-full flex items-center justify-center absolute right-[3%] bottom-[12%]"
      >
        <p className="text-4xl" data-tooltip-id="add-new-task">
          +
        </p>
        <Tooltip id="add-new-task" place="top-end" content="Add New Task" />
      </div>
      <div className="">
        <h1 className="font-poppins">Welcome to Task Master</h1>
        <h3 className="font-delicious">Master your task with ease</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
        <AddTask
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          setNewTask={setNewTask}
        />
      </div>
    </div>
  );
};

export default Header;
