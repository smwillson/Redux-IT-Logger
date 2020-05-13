import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className='collection-item'>
      {" "}
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i className='fas fa-trash-alt'></i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
