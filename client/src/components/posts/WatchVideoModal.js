import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PostContext } from "../../contexts/PostContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoEmbbed from "./VideoEmbbed";
const AddPostModal = () => {
  // context
  const { setShowVideoModal, showVideoModal, closePostVideo } =
    useContext(PostContext);
  const closeDialog = () => {
    setShowVideoModal(false);
    closePostVideo();
  };
  // state

  return (
    <Modal show={true} onHide={closeDialog} centered={true} fullscreen={true}>
      <Modal.Header className="text-center">
        <Modal.Title>Enjoy ^^</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <VideoEmbbed />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDialog}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPostModal;
