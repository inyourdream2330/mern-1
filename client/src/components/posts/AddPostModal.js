import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PostContext } from "../../contexts/PostContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddPostModal = () => {
  // context
  const { showAddPostModal, setShowAddPostModal, addPost, setShowToast } =
    useContext(PostContext);
  const closeDialog = () => {
    resetPostData();
  };
  // state
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    url: "",
    status: "TO LEARN",
  });

  const { title, description, url } = newPost;
  const notify = () =>
    toast.success("Happy learning 😍", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });

  const onChangeNewPostForm = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const { success, message } = await addPost(newPost);
    setShowToast({
      show: true,
      message: message,
      type: success ? "success" : "danger",
    });
    notify();
    resetPostData();
  };

  const resetPostData = () => {
    setNewPost({
      title: "",
      description: "",
      url: "",
      status: "TO LEARN",
    });
    setShowAddPostModal(false);
  };
  return (
    <Modal show={showAddPostModal} onHide={closeDialog}>
      <Modal.Header closeButton>
        <Modal.Title>What do you want to learn?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChangeNewPostForm}
              required
            />
            <Form.Text id="title-help" muted>
              Required
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Description"
              row={3}
              value={description}
              onChange={onChangeNewPostForm}
              name="description"
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Youtube tutorial URL"
              name="url"
              value={url}
              onChange={onChangeNewPostForm}
            />
          </Form.Group>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Get started !!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddPostModal;
