import React from 'react';

const studentList = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Group</th>
                    <th>Payment</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alisher Musurmonov</td>
                    <td>AWS 4</td>
                    <td>12</td>
                    <td>:</td>
                </tr>
            </tbody>
        </table>
    );
}

export default studentList;