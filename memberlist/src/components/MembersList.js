import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const membersData = [
  { name: "Ananya", role: "Volunteer", blood: "A+ve", location: "Thrissur" },
  { name: "Nandini", role: "Volunteer", blood: "A-ve", location: "Trivandrum" },
  { name: "Sanjay", role: "Volunteer", blood: "O+ve", location: "Kochi" },
  { name: "Rohit", role: "Volunteer", blood: "B+ve", location: "Kochi" },
  { name: "Divya", role: "Volunteer", blood: "A-ve", location: "Bangalore" },
  { name: "Priya", role: "Volunteer", blood: "A+ve", location: "Chennai" },
  { name: "Akshay", role: "Volunteer", blood: "O-ve", location: "Kannur" },
  { name: "Amal", role: "Volunteer", blood: "O+ve", location: "Kollam" },
  { name: "Harsha", role: "Volunteer", blood: "A+ve", location: "Mumbai" },
];

const MembersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;

  // Pagination Logic
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = membersData.slice(indexOfFirstMember, indexOfLastMember);

  const totalPages = Math.ceil(membersData.length / membersPerPage);

  return (
    <div className="container-fluid">
      <div className="row">
       
        

        {/* Content */}
        <div className="col-md-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Members</h2>
           
          </div>

          <div className="row">
            {currentMembers.map((member, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card shadow-sm p-3">
                  <h5>{member.name}</h5>
                  <p>Role: {member.role}</p>
                  <p>Blood: {member.blood}</p>
                  <p>Location: {member.location}</p>
                  <button className="btn btn-warning">View Profile</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
         {/* Dot-Style Pagination with Next Arrow */}
<nav className="mt-3">
  <ul className="pagination justify-content-center align-items-center">
    {[...Array(totalPages)].map((_, i) => (
      <li key={i} className="page-item">
        <button
          className={`page-link border-0 bg-transparent ${
            currentPage === i + 1 ? "text-dark fw-bold" : "text-muted"
          }`}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          •
        </button>
      </li>
    ))}
    
    {/* Next Arrow Button */}
    <li className="page-item">
      <button
        className="page-link border-0 bg-transparent text-muted"
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          fontSize: "20px",
          background: "none",
          border: "none",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        ➝
      </button>
    </li>
  </ul>
</nav>



        </div>
      </div>
    </div>
  );
};

export default MembersList;
