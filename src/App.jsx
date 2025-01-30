import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  const handleSaveEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = editingText;
    setTasks(newTasks);
    setEditingIndex(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center py-6">To-Do App</h1>
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <div>
          <ul className="space-y-2 mb-4">
            {tasks.map((task, index) => (
              <li
                className="text-gray-800 rounded-md p-2 my-2 border border-gray-300 flex justify-between items-center"
                key={index}
              >
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="flex-1 p-1 border border-gray-300 rounded-md focus:outline-none"
                  />
                ) : (
                  task
                )}
                <div className="flex justify-end gap-2 items-center">
                  {editingIndex === index ? (
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-300 ml-2"
                      onClick={() => handleSaveEdit(index)}
                    >
                      Kaydet
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-md cursor-pointer"
                      onClick={() => handleEditTask(index)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          placeholder="Add a new task"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;
