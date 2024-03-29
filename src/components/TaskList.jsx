import { Button, Heading, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import CreateTask from "../modals/CreateTask";
import CardComp from "./Card";

const TaskList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [taskList, setTaskList] = useState(storedTasks);

  const saveTask = (taskObj) => {
    const updatedTasks = [
      ...taskList,
      { ...taskObj, id: Math.random().toString(36).substr(2, 9) },
    ];
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTask = (id, updatedTaskObj) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, ...updatedTaskObj } : task
    );
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="text-center max-w-full">
      <div className="bg-gray-400 h-32 flex items-center justify-end">
        <Heading as="h3" size="lg" margin="auto">
          Todo App
        </Heading>
        <Button onClick={onOpen} margin="auto">
          Create Task
        </Button>
      </div>
      <div className="mx-12 my-8 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4">
        {taskList.map((list) => (
          <div key={list.id} className="my-2 flex flex-row">
            <CardComp
              taskObj={list}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </div>
        ))}
      </div>
      <CreateTask isOpen={isOpen} onClose={onClose} save={saveTask} />
    </div>
  );
};

export default TaskList;
