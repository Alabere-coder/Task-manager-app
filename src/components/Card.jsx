// CardComp.js

import { Card, CardBody, Text, Checkbox } from "@chakra-ui/react";
import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const CardComp = ({ taskObj, updateTask, deleteTask, handleCheckboxChange, isSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const update = (updatedTaskObj) => {
    const updatedTask = { ...taskObj, ...updatedTaskObj };
    updateTask(taskObj.id, updatedTask);
  };

  return (
    <div>
      <Card variant={isSelected ? "outline" : "filled"} width="40"  className="cursor-help">
        <CardBody>
          <Checkbox  isChecked={isSelected} onChange={() => handleCheckboxChange(taskObj.id)}>
            <Text onClick={handleOpen} fontSize="lg">{taskObj.Name}</Text>
          </Checkbox>
        </CardBody>
      </Card>
      <EditTask isOpen={isOpen} onClose={handleClose} update={update} taskObj={taskObj} deleteTask={deleteTask} />
    </div>
  );
};

export default CardComp;
