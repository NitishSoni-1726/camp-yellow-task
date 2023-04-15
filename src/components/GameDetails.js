import React from "react";
import image from "./assets/images/test.png";
import Counter from "./Counter";
function GameDetails() {
  return (
    <>
      <div className="container gamedetails d-flex flex-column align-items-center">
        <h3 className="text-light w-100 text-center m-5 header">
          Create your own Game in minutes
        </h3>
        <form className="mt-2 text-light d-flex flex-column align-items-start justify-content-center w-100">
          <div className="w-100">
            <input
              className="bg-transparent border p-2 w-75 text-light"
              type="text"
              id="input"
              placeholder="Enter Your App Name"
              required
              autoFocus
            ></input>
          </div>
          <input
            type="file"
            className="d-none"
            id="fileupload"
            accept="image/png, image/jpeg"
            required
          />
          <div className="w-100 d-flex align-items-start">
            <div className="d-flex mt-4 flex-column align-items-center">
              <button
                className="btn btn-outline-success btn-sm rounded"
                onClick={function upload() {
                  document.getElementById("fileupload").click();
                }}
              >
                {" "}
                <i className="fa fa-camera upload-button"></i> Add App Icon
              </button>
            </div>
          </div>
          <div className="w-100">
            <div className="border p-3 mt-4 w-100 d-flex flex-column justify-content-center align-items-start">
              <h5 className="mt-2 text-start w-100">Upload Game Files :</h5>
              <div className="mt-2 p-2 d-flex justify-content-evenly w-100">
                <input
                  className="d-none"
                  type="file"
                  id="csv-file-upload"
                  required
                ></input>
                <button
                  className="btn btn-outline-success btn-lg"
                  onClick={function csvupload() {
                    document.getElementById("csv-file-upload").click();
                  }}
                >
                  <i class="fa fa-upload" aria-hidden="true"></i> CSV for Story
                </button>
                <input
                  className="d-none"
                  type="file"
                  id="assets-file-upload"
                  required
                ></input>
                <button
                  onClick={function assetsupload() {
                    document.getElementById("assets-file-upload").click();
                  }}
                  className="btn btn-outline-success btn-lg"
                >
                  <i class="fa fa-upload" aria-hidden="true"></i> Game Assets
                </button>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="d-flex w-100 justify-content-between mt-4">
              <div className="mt-4 d-flex align-items-center justify-content-center">
                <a
                  className="btn btn-outline-warning btn-sm d-flex align-items-center p-2 justify-content-center"
                  href={image}
                  download
                >
                  <p className="m-1">Download Sample Files </p>
                  <p className="m-1">
                    <i class="fa fa-download" aria-hidden="true"></i>
                  </p>
                </a>
              </div>
              <input
                type="submit"
                className="btn button flex-grow-1 ms-4 btn-lg mt-4 btn-outline-light"
                value="Build The Game"
                id="submit"
              ></input>
            </div>
          </div>
        </form>
        <div className="text-light mt-4 w-100 d-flex flex-column align-items-start">
          <Counter />
        </div>
      </div>
    </>
  );
}

export default GameDetails;
