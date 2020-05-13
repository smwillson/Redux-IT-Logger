import React from "react";

const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large large blue darken-2 modal-trigger'
      >
        <i className='fas fa-plus-circle'></i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='fas fa-user'></i>
          </a>
        </li>
        <li>
          <a
            href='#add-tech-modal'
            className='btn-floating purple modal-trigger'
          >
            <i className='fas fa-user-plus'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
