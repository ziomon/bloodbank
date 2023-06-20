import React, { useState } from 'react';

function Donate() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired actions with the collected data
    alert(`Thank you, ${name}, for your donation of $${amount}!`);
    // Reset the form fields
    setName('');
    setAmount('');
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="formTitle">Donate</h2>
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="formInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="amount">Donation Amount:</label>
          <input
            type="number"
            id="amount"
            className="formInput"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="primaryButton">Donate</button>
      </form>
    </div>
  );
}

export default Donate;
