import React, { useEffect, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { UserProvider, UserContext } from '../UserContext';
import Form from '../Form/Form';
import Table from '../Table/Table';
function App() {
  return (
    <UserProvider>
      <div className='App'>
        <h2>Form</h2>
        <Form />
        <Table />
      </div>
    </UserProvider>
  );
}

export default App;
