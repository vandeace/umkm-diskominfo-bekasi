import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalCustom = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.modal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ModalBody className="text-danger text-center">
          <h3>{props.message}</h3>
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={() => props.toggle()}>
            CLOSE
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCustom;
