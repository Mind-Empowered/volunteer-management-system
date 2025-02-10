import '../styles/body.css'
import Title from './title'
import MemberCard from './membercard'
import FilterSort from './filtersort'

function Body(){

    const members = [
        {
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe",
            role: "Software Engineer",
            bloodGroup: "O+",
            place: "New York"
        },
        {
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            name: "Jane Smith",
            role: "UX Designer",
            bloodGroup: "A-",
            place: "San Francisco"
        },
        {
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            name: "Mike Johnson",
            role: "Project Manager",
            bloodGroup: "B+",
            place: "Chicago"
        }
    ];
    return(
        <div className='body'>
            <Title/>
            <FilterSort/>
            <div className="member-cards-container">
                {members.map((member, index) => (
                    <MemberCard
                        key={index} // Unique key for React
                        image={member.image}
                        name={member.name}
                        role={member.role}
                        bloodGroup={member.bloodGroup}
                        place={member.place}
                    />
                ))}
            </div>
        </div>
    )
}


export default Body