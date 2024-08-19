import { Button, Modal } from "amvasdev-ui";
import { useToggle } from "usehooks-ts";

const ModalStory = () => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <>
      <Button variant="primary" onClick={toggle} className="w-80">
        Open Modal
      </Button>
      {isOpen ? (
        <Modal
          title="Modal title"
          onClose={toggle}
          confirmButton={{
            children: "Confirm",
            onClick: () => alert("confirm"),
          }}
          cancelButton={{
            children: "Cancel",
            variant: "error",
            onClick: () => alert("cancel"),
          }}
          closeOnConfirm
          closeOnCancel
        >
          <p className="my-4">Modal content goes here</p>
        </Modal>
      ) : null}
    </>
  );
};

export default ModalStory;
