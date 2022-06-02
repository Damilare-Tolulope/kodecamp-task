import React from 'react'

const Users = (props) => {
    const { name, company, username, address, phone, email, website } = props.user
  return (
    <div style={{margin: "40px 20px"}}>
        <h1 style={{fontSize: "40px", margin: "0px"}}>{name}</h1>
        <p>{company.catchPhrase}</p>

        <div>
            <h3 style={{marginTop:"30px"}}>General Information</h3>
            <table>
                <tbody>
                <tr>
                    <td><b>Username</b></td>
                    <td>{username}</td>
                </tr>
                <tr>
                    <td><b>Email</b></td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td><b>Address</b></td>
                    <td>{address.suite}, {address.street}, {address.city}</td>
                </tr>
                <tr>
                    <td><b>Phone</b></td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td><b>Website</b></td>
                    <td>{website}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users