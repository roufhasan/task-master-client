import { Dialog } from "@headlessui/react";
import axios from "axios";
import toast from "react-hot-toast";

const AddTask = ({ isOpen, setIsOpen, user, setNewTask }) => {
  const date = new Date().toLocaleString();

  const handleNewTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    const taskDetails = {
      email: user?.email,
      title,
      description,
      date,
    };

    axios
      .post("http://localhost:5000/add-task", taskDetails)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          toast.success("Task Added");
        }
        setNewTask(true);
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full min-h-full md:w-1/2 md:min-h-[570px] md:border-2 border-[#DEE2E6] px-10 py-9 shadow-2xl py-[calc(100vh + 20px)]"
      >
        <Dialog.Panel>
          <Dialog.Title className="text-2xl font-semibold text-center">
            Add Task
          </Dialog.Title>
          <Dialog.Description className="font-medium text-gray-400 text-center border-b-2 border-gray-200 pb-7 pt-3 mb-8">
            Keep track of your new task.
          </Dialog.Description>
          <form onSubmit={handleNewTask}>
            <div className="flex flex-col gap-y-3">
              <label htmlFor="title" className="text-lg font-medium">
                Title
              </label>
              <input
                required
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="text-[#ACACAC] focus:text-black py-3 px-4 border border-[#D1D1D1] rounded-lg focus:outline-0"
              />
              <label
                htmlFor="description"
                className="text-lg font-medium mt-5 md:mt-0"
              >
                Description
              </label>
              <textarea
                required
                name="description"
                id="description"
                placeholder="Description"
                className="w-full min-h-[150px] text-[#ACACAC] focus:text-black py-3 px-4 border border-[#D1D1D1] rounded-lg focus:outline-0"
              ></textarea>
              <div className="flex flex-wrap items-center mx-auto gap-x-10 mt-16 md:mt-0">
                <button
                  onClick={() => setIsOpen(false)}
                  className="border border-red-300 bg-red-100 px-5 py-3 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  value="Add Task"
                  className="border border-green-300 bg-green-300 px-5 py-3 rounded-lg font-medium cursor-pointer"
                />
              </div>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default AddTask;
