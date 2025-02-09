const MemberCard = ({ member }) => {
    return (
      <div className="card border-0 shadow-sm">
        <div className="card-body text-center" style="width: 20rem;">
          <div className="mb-3">
            <div className="rounded-circle bg-warning d-inline-block" style={{ width: "60px", height: "50px" }}></div>
          </div>
          <h5 className="card-title">{member.name}</h5>
          <p className="card-text">Role: {member.role}</p>
          <p className="card-text">Blood: {member.blood}</p>
          <p className="card-text">Location: {member.location}</p>
          <button className="btn btn-warning">View Profile</button>
        </div>
      </div>
    );
  };
  
  export default MemberCard;
  