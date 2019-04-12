import React from 'react';
import { Table } from 'react-bootstrap';

const detail = (props) => {
    let userDetails = props.location.state.user;
    console.log(userDetails)
    return (
        <Table striped bordered hover variant="dark" style={{ marginTop: 70 }} responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>{userDetails.first_name} {userDetails.last_name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>City</td>
                    <td>{userDetails.city}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Company Name</td>
                    <td>{userDetails.company_name}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>State</td>
                    <td>{userDetails.state}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Age</td>
                    <td>{userDetails.age}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Email</td>
                    <td>{userDetails.email}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Website</td>
                    <td>{userDetails.web}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Zip Code</td>
                    <td>{userDetails.zip}</td>
                </tr>

            </tbody>
        </Table>
    )
}
export default detail;