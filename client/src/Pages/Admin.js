import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../Assets/Admin.css";
import RegisterUser from "./RegisterUser";

function Admin() {
  const [userData , setUserData] = useState([]);
  const [requestData , setRequestData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [showProfileIndex, setShowProfileIndex] = useState(-1);
  const [showSearch, setShowSearch] = useState(0);
  const [register, setRegister] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [request,setRequest] = useState(false);
  const [showAll,setShowAll] = useState(false);
  const [searchTable, setSearchTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`https://blood-bank-4lln.vercel.app/adminroute/user`);
        setUserData(userResponse.data);
      } catch (error) {
        console.error(error);
      }
      try{
        const requestResponse = await axios.get(`https://blood-bank-4lln.vercel.app/adminroute/request`);
        setRequestData(requestResponse.data);
      }catch(error){
        console.error(error);
      }
    };
    fetchData();
  },[]);

  useEffect(() => {
    let data = [];
    if(!request && !showAll){
       data = userData.map(({ name, bloodGroup, _id, email, contactNumber,location}) => ({
        name,
        bloodGroup,
        _id,
        email,
        contactNumber,
        location
      }));
    }else if(request && !showAll){
      data = requestData.map(({ patientName: name, bloodGroup, _id }) => ({ name, bloodGroup, _id }));
    }else{
      data = userData.concat(requestData.map(({ patientName : name , patientBloodGroup : bloodGroup, _id }) => ({ name, bloodGroup, _id })));
    }
    if (searchValue) {
      const filteredData = data.filter(({bloodGroup}) => bloodGroup === searchValue);
      setSearchTable(filteredData);
      setTableData(filteredData);
    } else {
      setSearchTable([]);
      setTableData(data);
    }
  }, [userData, requestData, request, showAll, searchValue]);

  const handleSearch = () => {
    if (searchValue) {
      const filteredData = tableData.filter(({bloodGroup}) => bloodGroup === searchValue);
      setSearchTable(filteredData);
      setTableData(filteredData);
    } else {
      setSearchTable([]);
      setTableData(tableData);
    }
  };
  const handleDelete = async (id) => {
    if (!request){
      try {
        await axios.delete(`https://blood-bank-4lln.vercel.app/adminroute/user/${id}`);
        // Remove the deleted user from userData state
        setUserData(userData.filter(user => user._id !== id));
      } catch (error) {
        console.error(error);
      }
    } else{
      try {
        await axios.delete(`https://blood-bank-4lln.vercel.app/adminroute/request/${id}`);
        // Remove the deleted user from userData state
        setRequestData(requestData.filter(user => user._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  return (
    <div className='Admin'>
      {/* UPdate the navbar such that when the url has /Admin the login and cotact button should be hidden */}
      <div className="tableContainer">
        <div className="tableHeading">
          <button className='primaryButton-invert' onClick={()=>{setShowAll(!showAll)}}>{showAll ? 'Not All': 'All'}</button>
          <button className='primaryButton-invert' onClick={()=>{setRequest(!request)}}>{request?'Users':'Requests'}</button>
          <span>
            {showSearch >= 1 && (
              <input
                type="text"
                name="searchTable"
                id="searchTable"
                placeholder='Blood Group'
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
            <button
              onClick={() => {
                if (showSearch === 0) {
                  setShowSearch(1);
                } else {
                  handleSearch();
                }
              }}
              className='primaryButton-invert'
            >
              Search
            </button>
          </span>
          <button
            className='primaryButton'
            onClick={() => {
              setRegister(!register);
            }}
          >
            +
          </button>
        </div>
        {register===1 && <RegisterUser admin={1} />}
        <div className="tableData">
          <div className="tableTitles">
            <span>ID</span>
            <span>Name</span>
            <span>Blood</span>
            <span>Actions</span>
          </div>
          {tableData.map((data, index) => (
            <div className="tableRow" key={index}>
              <p className="tableRowId">{data._id.slice(9, 15)}</p>
              <p className="tableRowName">{data.name}</p>
              <p className="tableRowBlood">{data.bloodGroup}</p>
              <div className="tableRowButton">
                <span
                  className='tableViewButton'
                  onClick={() => {
                    if(showProfileIndex === index){
                        setShowProfileIndex(-1);
                    }
                    else {
                        setShowProfileIndex(index);
                    }
                  }}
                >
                  View
                </span>
                <span className='tableDeleteButton' onClick={() => handleDelete(data._id)}>Delete</span>
              </div>
              {showProfileIndex === index && (
                <div className="tableRowProfile">
                  <p className="tableProfileNumber">{data.contactNumber}</p>
                  <p className="tableProfileEmail">{data.email}</p>
                  <p className="tableProfileLocation">{data.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
