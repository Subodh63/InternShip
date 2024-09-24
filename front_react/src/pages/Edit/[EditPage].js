import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPage = () => {
  // Initial form state
  const [formData, setFormData] = useState({
    name: '',
    Address: '',
    Country: '',
    State: '',
    Qualification: '',
    Religion: ''
  });

  const { id } = useParams();  // Getting employee ID from route parameters
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Fetch the employee details based on the ID
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/table/${id}`);
      if (response.data) {
        setFormData(response.data); // Populate the form with fetched data
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Update employee function
  const update = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/table/${id}`, formData);
      if (response.status === 200) {
        alert('Employee updated successfully');
        // Redirect to main table after successful update
        navigate('/Demo');  // Redirect to main table page
      } else {
        alert('Error occurred while updating');
      }
    } catch (error) {
      console.error('Error occurred while updating employee:', error.response || error.message);
      alert(`Error occurred: ${error.response ? error.response.data : error.message}`);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fetch the employee data when the component mounts or when `id` changes
  useEffect(() => {
    if (id) {
      fetchEmployees();
    }
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    update(); // Call the update function on form submission
  };

  return (
    <div>
      <h3>Editing Employee with ID: {id}</h3>

      <form onSubmit={handleSubmit} className="border p-3" style={{ borderColor: 'black', backgroundColor: '#f8f9fa' }}>
        <h4 className="text-center mb-4" style={{ color: 'darkblue' }}>
          Edit Employee
        </h4>
        {/* Name field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ color: 'darkblue' }}>Name</label>
          <input
            type="text"
            className="form-control border border-dark"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Address field */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label" style={{ color: 'darkblue' }}>Address</label>
          <input
            type="text"
            className="form-control border border-dark"
            id="address"
            name="Address"
            value={formData.Address}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Country field */}
        <div className="mb-3">
          <label htmlFor="country" className="form-label" style={{ color: 'darkblue' }}>Country</label>
          <input
            type="text"
            className="form-control border border-dark"
            id="country"
            name="Country"
            value={formData.Country}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* State field */}
        <div className="mb-3">
          <label htmlFor="state" className="form-label" style={{ color: 'darkblue' }}>State</label>
          <input
            type="text"
            className="form-control border border-dark"
            id="state"
            name="State"
            value={formData.State}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Qualification radio buttons */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'darkblue' }}>Qualification</label>
          <div className="d-flex flex-wrap">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Qualification"
                id="BCA"
                value="BCA"
                checked={formData.Qualification === 'BCA'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="BCA" style={{ color: 'darkblue' }}>BCA</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Qualification"
                id="MCA"
                value="MCA"
                checked={formData.Qualification === 'MCA'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="MCA" style={{ color: 'darkblue' }}>MCA</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Qualification"
                id="btech"
                value="Btech"
                checked={formData.Qualification === 'Btech'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="btech" style={{ color: 'darkblue' }}>Btech</label>
            </div>
          </div>
        </div>
        {/* Religion radio buttons */}
        <div className="mb-3">
          <label className="form-label" style={{ color: 'darkblue' }}>Religion</label>
          <div className="d-flex flex-wrap">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Religion"
                id="hindu"
                value="Hindu"
                checked={formData.Religion === 'Hindu'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="hindu" style={{ color: 'darkblue' }}>Hindu</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Religion"
                id="muslim"
                value="Muslim"
                checked={formData.Religion === 'Muslim'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="muslim" style={{ color: 'darkblue' }}>Muslim</label>
            </div>
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Religion"
                id="sikh"
                value="Sikh"
                checked={formData.Religion === 'Sikh'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="sikh" style={{ color: 'darkblue' }}>Sikh</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Religion"
                id="christian"
                value="Christian"
                checked={formData.Religion === 'Christian'}
                onChange={handleInputChange}
                required
              />
              <label className="form-check-label" htmlFor="christian" style={{ color: 'darkblue' }}>Christian</label>
            </div>
          </div>
        </div>
        {/* Update button */}
        <button type="submit" className="btn btn-outline-dark w-100">Update Employee</button>
      </form>
    </div>
  );
};

export default EditPage;
