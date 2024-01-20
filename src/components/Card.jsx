// CardComp.js

import {
  Card,
  CardBody,
  Text,
  Checkbox,
  Heading,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import Delete from "./Delete";

const CardComp = ({
  taskObj,
  updateTask,
  handleCheckboxChange,
  isSelected,
  deleteTask,
}) => {
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
      <Card
        variant={isSelected ? "outline" : "filled"}
        width="full"
        className="cursor-pointer"
      >
        <CardBody>
          {/* <Checkbox
            isChecked={isSelected}
            onChange={() => handleCheckboxChange(taskObj.id)}
          > */}
          <Heading size="md">{taskObj.Name}</Heading>
          <Text fontSize="lg">{taskObj.Note}</Text>
          {/* </Checkbox> */}
          <div className="flex justify-end gap-4 mt-4">
            <Button onClick={handleOpen} colorScheme="whatsapp">
              Update
            </Button>
            <Delete deleteTask={deleteTask} taskObj={taskObj} />
          </div>
        </CardBody>
      </Card>
      <EditTask
        isOpen={isOpen}
        onClose={handleClose}
        update={update}
        taskObj={taskObj}
      />
    </div>
  );
};

export default CardComp;
