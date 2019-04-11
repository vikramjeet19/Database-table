import React from 'react';
import { Table } from 'react-bootstrap';


const search = (props) => {
    console.log(props.searchData);
    return (
        <div>
            <Table style={{ marginTop: 20 }} striped bordered hover variant="dark" responsive >
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>ZIP</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Web</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.searchData.map(key => {
                            return (<tr key={key.id}>
                                <td>{key.first_name}</td>
                                <td>{key.last_name}</td>
                                <td>{key.company_name}</td>
                                <td>{key.city}</td>
                                <td>{key.state}</td>
                                <td>{key.zip}</td>
                                <td>{key.email}</td>
                                <td>{key.age}</td>
                                <td>{key.web}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>;
         </div>
    )
}
export default search;