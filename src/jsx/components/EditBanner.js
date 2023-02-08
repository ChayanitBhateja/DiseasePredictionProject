import React, { useEffect, useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  bannerById,
  createBannerApi,
  editBannerApi,
} from "../../services/AuthService";
import addPhoto from "../pages/test";

export default function EditBanner({ show, close, table, id }) {
  const [title, setTitle] = useState("");
  let errorsObj = { title: "", bannerType: "", bannerUrl: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [bannerType, setBannerType] = useState("");
  const [bannerImage, setBannerImage] = useState();
  const [bannerUrl, setBannerUrl] = useState("");
  const albumName = "banner";
  const [apiError, setApiError] = useState("");

  const notifyTopRight = () => {
    toast.success("✅ Create Banner successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const notifyError = () => {
    toast.error("❌ Error !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  function onCreateBanner(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (title === "") {
      errorObj.title = "Title is Required";
      error = true;
    }
    if (bannerType === "") {
      errorObj.bannerType = "Banner Type is Required";
      error = true;
    }

    if (bannerUrl === "") {
      errorObj.bannerUrl = "Banner URL is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }

    addPhoto(bannerImage, albumName)
      .then((response) => {
        // console.log(response, "s3 api uuuuuuuuuuuuuuuuu");
        // console.log(response.imageName, "s3 00000000000 response");
        // setImgLocation(response.Location);
        // var imageFromAws = ;
        editBannerApi(title, bannerType, response.imageName, bannerUrl, id)
          .then((response) => {
            console.log(response);
            close();
            table();
            notifyTopRight();
          })
          .catch((error) => {
            console.log(error.response, "create banner error");
            setApiError(error.response.message);
            notifyError();
          });
      })
      .catch((error) => {
        console.log(error, "s3 error");
      });
  }
  useEffect(() => {
    // setLoader(true);
    bannerById(id).then((response) => {
      console.log(response, "banner by id data response");
      //   setOneUsers(response.data.data);
      setTitle(response.data.data.title);
      setBannerType(response.data.data.type);
      setBannerUrl(response.data.data.url);
      //   setBannerId(id);
    });
  }, [id]);
  return (
    <>
      <Modal className="fade" show={show}>
        <Modal.Header>
          <Modal.Title>Craete Banner</Modal.Title>
          <Button variant="" className="close" onClick={() => close()}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          {apiError && (
            <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
              {apiError}
            </div>
          )}
          <form onSubmit={onCreateBanner}>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Title</strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                pattern="[a-zA-Z][a-zA-Z0-9\s]*"
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && (
                <div className="text-danger fs-12">{errors.title}</div>
              )}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Banner Type</strong>
              </label>
              <input
                type="text"
                className="form-control"
                pattern="[a-zA-Z][a-zA-Z0-9\s]*"
                value={bannerType}
                onChange={(e) => setBannerType(e.target.value)}
              />
              {errors.bannerType && (
                <div className="text-danger fs-12">{errors.bannerType}</div>
              )}
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Banner </strong>
              </label>
              <input
                type="file"
                className="form-control"
                onChange={(e) => setBannerImage(e.target.files[0])}
              />
            </div>
            <div className="form-group">
              <label className="mb-2 ">
                <strong className="">Banner url </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={bannerUrl}
                pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
                onChange={(e) => setBannerUrl(e.target.value)}
              />
              {errors.bannerUrl && (
                <div className="text-danger fs-12">{errors.bannerUrl}</div>
              )}
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary mr-3 ">
                Save
              </button>
              <button
                type="button"
                onClick={() => close()}
                className="btn btn-danger "
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
