const TaskCard = ({ task }) => {
  return (
    <div className="min-h[30px] border-2 border-[#e0e0e0] hover:shadow-2xl transition-all px-3 py-4">
      <h2 className="text-xl font-semibold mb-4">{task?.title}</h2>
      <p>{task?.description}</p>
      <p className="pt-6 text-sm text-[#aaa9a9]">
        <span>Last Edited: </span>
        {task?.date}
      </p>
    </div>
  );
};

export default TaskCard;
