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
} from "@chakra-ui/react";
import { useState } from "react";

const CreateTask = ({ isOpen, onClose, save }) => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    if (name === "task") {
      setTask(value);
    } else {
      setNote(value);
    }
  };

  const handleSave = () => {
    if (!note || !task) return;

    let taskObj = { Name: task, Note: note };
    save(taskObj);
    onClose();
    setTask("");
    setNote("");
  };

  const isError = !note || !task;

  return (
    <div>
      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add your Task</ModalHeader>
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
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}

                <Button
                  onClick={handleSave}
                  size="md"
                  width="full"
                  backgroundColor="black"
                  color="blue.300"
                  mt="10"
                >
                  Add
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
    </div>
  );
};

export default CreateTask;
