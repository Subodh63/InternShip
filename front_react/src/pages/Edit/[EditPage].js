import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




const EditPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    Address: '',
    Country: '',
    State: '',
    Qualification: '',
    Religion: ''
  });
  const { id } = useParams();

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/table');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log form data to check before submission
    try {
      const response = await axios.post('http://localhost:5000/table', formData);
      if (response.status === 200 || response.status === 201) {
        setData([...data, response.data]); // Add new employee to the list
        alert('Employee added successfully');
        setFormData({ name: '', Address: '', Country: '', State: '', Qualification: '', Religion: '' }); // Clear form
        getData();
      } else {
        console.error("Unexpected status code:", response.status);
        alert(`Error occurred: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert(`Error occurred: ${error.message}`);
    }
  
  };

useEffect(() => {
    getData(); // Fetch employee data when the component mounts
  }, []); 


  return (
    <div>
      <h3>Id is {id}</h3>
      
      <form onSubmit={handleSubmit} className="border p-3" style={{ borderColor: "black", backgroundColor: "#f8f9fa" }}>
        <h4 className="text-center mb-4" style={{ color: "darkblue" }}>
          Employee Registration
        </h4>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" style={{ color: "darkblue" }}>Name</label>
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
        <div className="mb-3">
          <label htmlFor="address" className="form-label" style={{ color: "darkblue" }}>Address</label>
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
        <div className="mb-3">
          <label htmlFor="country" className="form-label" style={{ color: "darkblue" }}>Country</label>
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
        <div className="mb-3">
          <label htmlFor="state" className="form-label" style={{ color: "darkblue" }}>State</label>
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
        <div className="mb-3">
          <label className="form-label" style={{ color: "darkblue" }}>Qualification</label>
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
              <label className="form-check-label" htmlFor="BCA" style={{ color: "darkblue" }}>BCA</label>
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
              <label className="form-check-label" htmlFor="MCA" style={{ color: "darkblue" }}>MCA</label>
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
              <label className="form-check-label" htmlFor="btech" style={{ color: "darkblue" }}>Btech</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: "darkblue" }}>Religion</label>
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
              <label className="form-check-label" htmlFor="hindu" style={{ color: "darkblue" }}>Hindu</label>
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
              <label className="form-check-label" htmlFor="muslim" style={{ color: "darkblue" }}>Muslim</label>
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
              <label className="form-check-label" htmlFor="sikh" style={{ color: "darkblue" }}>Sikh</label>
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
              <label className="form-check-label" htmlFor="christian" style={{ color: "darkblue" }}>Christian</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-dark w-100">Add Employee</button>
      </form>
    </div>
  );
};

export default EditPage;
