import React from "react";

const Comment = () => {
  return (
    <>
      <div className="comment-container text-white w-full">
        <div className="comment-section-header">
          <h1>Comment section</h1>
        </div>
        <div className="comment-section-body content-center">
          <div className="comment-section-body-header self-center">
            <div className="input-container flex justify-between ">
              <input type="text" className="flex self-center w-full" placeholder="add your comment.."/>
              <button className="w-[2.5em] self-center bg-white rounded-md ml-3"><img className="w-[2em] " src="./src/assets/UI/icons/Send-icon.png" alt="logo" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
