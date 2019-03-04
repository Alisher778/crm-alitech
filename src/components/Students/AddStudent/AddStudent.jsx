import React, { Component } from 'react';

class AddStudent extends Component {
    state = {}

    render() {
        return(
            <div>
                <h2>Add New Student</h2>
                <form>
                    <div id="bio">
                        <h4>Biography</h4>
                        <input type="text" name="firstName" placeholder="First Name"/>
                        <input type="text" name="lastName" placeholder="Last Name"/>
                        <input type="email" name="email" placeholder="email"/>
                        <input type="number" name="phone" placeholder="Phone"/>
                    </div>
                </form>
            </div>
        );
    }
}