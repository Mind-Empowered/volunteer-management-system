import '../styles/membercard.css'

function MemberCard({image, name, role, bloodGroup, place}) {

    
    return (
        <div className="member-card">
            <img className="member-image" src={image} />
            <div className="member-details">
                <div>
                    <h3 className="member-name">{name}</h3>
                    <p className="member-info">Role : {role}</p>
                    <p className="member-info">Blood Group : {bloodGroup}+</p>
                    <p className="member-info">Place : {place}</p>
                </div>
                <button className="view-profile">View Profile</button>
            </div>
        </div>
    );
}

export default MemberCard;

