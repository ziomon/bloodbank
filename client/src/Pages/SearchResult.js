import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../Assets/SearchResults.css"
import Card from '../Components/Card'

function SearchResult(props) {
  const [userData, setUserData] = useState([]);
  const { bloodgroup, location } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://blood-bank-4lln.vercel.app/all`);
        console.log(response);
        const data = response.data.filter(user => user.bloodGroup === bloodgroup && user.location === location);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [bloodgroup, location]);

  return (
    <div className="searchResultsContainer">
      <p><span className='boldText'>Search Result /</span><span>{location} - {bloodgroup}</span></p>
      <div className="searchResults">
        {userData.length === 0 ? (
          <p>No results</p>
        ) : (
          userData.map((user, index) => (
            <Card
              key={index}
              name={user.name}
              phoneNumber={user.contactNumber}
              age={user.age}
              bloodGroup={user.bloodGroup}
              location={user.location}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default SearchResult;
