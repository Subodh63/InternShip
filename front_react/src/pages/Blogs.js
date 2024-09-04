import React from 'react';

const Blogs = () => {
  return (
    <div className="card bg-dark text-white" style={{ width: '18rem' }}>
      <img src="https://getbootstrap.com/docs/4.5/assets/img/bootstrap-icons.png" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">Bootstrap</h5>
        <p className="card-text">Bootstrap is a free, open-source front-end development framework for creating responsive web applications.</p>
        <a href="https://getbootstrap.com/docs/5.3/components/card/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </div>
  );
};

export default Blogs;
