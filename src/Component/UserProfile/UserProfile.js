import React, { useEffect, useState } from 'react';
// import "./Cover.css"
const UserProfile = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);
    return (
        <div className=''>
             {user.map(item =>
    <div className="testimonial" key={item?._id}>
    
        <div className="single-testimonial">
          
            <p>{item?.email}</p>
            <div className="autor-info">
                <h4>{item?.displayName}</h4>
            </div>
        </div>
       
        </div>
)}
				
			</div>
        
        
    );
};

export default UserProfile;