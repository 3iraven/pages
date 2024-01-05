import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

import TableGrid from './TableGrid';

const Home: React.FC = () => {

  // Example columns
const columns = [
    { field: 'sid', headerName: 'SID', width: 100, type: 'number' },
    { field: 'email', headerName: 'Email', width: 200, type: 'string' },
    { field: 'employee_status', headerName: 'Status', width: 130, type: 'string' },
    { field: 'comment', headerName: 'Comment', width: 300, type: 'string', editable: true },
    { field: 'date_created', headerName: 'Date Created', width: 150, type: 'dateTime' },
    { field: 'date_modified', headerName: 'Date Modified', width: 150, type: 'dateTime' },
    // ... other columns ...
  ];
  
  // Some rows to display
  const rows = [
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},
    { id: 1, sid:'test', email: 'example@email.com', employee_status: 'active', comment: 'This is the employee', date_created: '', date_modified: ''},


    // ... other rows ...
  ];
  

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ASSETS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>909</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LICENSES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>123</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>EMPLOYEES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>343</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>432</h1>
            </div>
    </div>
    <TableGrid columns={columns} rows={rows} />

    </main>
  );
};

export default Home;
