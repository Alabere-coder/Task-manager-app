import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  FormHelperText,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EditTask = ({ isOpen, onClose, update, taskObj }) => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "task") {
      setTask(value);
    } else {
      setNote(value);
    }
  };

  useEffect(() => {
    if (taskObj) {
      setTask(taskObj.Name || "");
      setNote(taskObj.Note || "");
    }
  }, [taskObj]);

  const handleUpdate = () => {
    if (!note || !task) return;

    let updatedTaskObj = { id: taskObj.id, Name: task, Note: note };
    update(updatedTaskObj);
    onClose();
  };

  const isError = !note || !task;

  if (!taskObj) {
    return null;
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired isInvalid={isError}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="task"
                placeholder="Add new Task"
                value={task}
                onChange={handleChange}
              />
              <FormLabel mt="4">Add Note</FormLabel>
              <Textarea
                rows="5"
                name="note"
                value={note}
                onChange={handleChange}
              ></Textarea>
              {!isError ? (
                <FormHelperText>
                  Both Title and Note are required.
                </FormHelperText>
              ) : (
                <FormErrorMessage>
                  Both Title and Note are required.
                </FormErrorMessage>
              )}

              <Button
                onClick={handleUpdate}
                size="md"
                width="full"
                backgroundColor="black"
                color="blue.300"
                mt="4"
              >
                Update
              </Button>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default EditTask;
