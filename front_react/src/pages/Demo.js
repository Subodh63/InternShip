import React from "react";

const Demo = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Employee Registration Form */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <form className="border p-3" style={{ borderColor: "black", backgroundColor: "#f8f9fa" }}>
            <h4 className="text-center mb-4" style={{ color: "darkblue" }}>
              Employee Registration
            </h4>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={{ color: "darkblue" }}>Name</label>
              <input type="text" className="form-control border border-dark" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label" style={{ color: "darkblue" }}>Address</label>
              <input type="text" className="form-control border border-dark" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label" style={{ color: "darkblue" }}>Country</label>
              <input type="text" className="form-control border border-dark" id="country" />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label" style={{ color: "darkblue" }}>State</label>
              <input type="text" className="form-control border border-dark" id="state" />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "darkblue" }}>Qualification</label>
              <div className="d-flex flex-wrap">
                <div className="form-check me-3">
                  <input className="form-check-input" type="checkbox" id="bca" />
                  <label className="form-check-label" htmlFor="bca" style={{ color: "darkblue" }}>BCA</label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="checkbox" id="mca" />
                  <label className="form-check-label" htmlFor="mca" style={{ color: "darkblue" }}>MCA</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="btech" />
                  <label className="form-check-label" htmlFor="btech" style={{ color: "darkblue" }}>B.Tech</label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "darkblue" }}>Religion</label>
              <div className="d-flex flex-wrap">
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="religion" id="hindu" />
                  <label className="form-check-label" htmlFor="hindu" style={{ color: "darkblue" }}>Hindu</label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="religion" id="muslim" />
                  <label className="form-check-label" htmlFor="muslim" style={{ color: "darkblue" }}>Muslim</label>
                </div>
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="religion" id="sikh" />
                  <label className="form-check-label" htmlFor="sikh" style={{ color: "darkblue" }}>Sikh</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="religion" id="christian" />
                  <label className="form-check-label" htmlFor="christian" style={{ color: "darkblue" }}>Christian</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-dark w-100">Add Employee</button>
          </form>
        </div>

        {/* Employee List Table */}
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="table-responsive">
            <table className="table table-info table-striped border-info text-light">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Country</th>
                  <th scope="col">State</th>
                  <th scope="col">Qualification</th>
                  <th scope="col">Religion</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subodh Rajput</td>
                  <td>Mohali</td>
                  <td>India</td>
                  <td>Punjab</td>
                  <td>MCA</td>
                  <td>Hindu</td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Rajat Rajput</td>
                  <td>Kharar</td>
                  <td>India</td>
                  <td>Punjab</td>
                  <td>MCA</td>
                  <td>Hindu</td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Rajat Rajput</td>
                  <td>Kharar</td>
                  <td>India</td>
                  <td>Punjab</td>
                  <td>MCA</td>
                  <td>Hindu</td>
                  <td>
                    <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
