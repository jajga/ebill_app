import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminDashComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentWillMount(){
        if(!localStorage.getItem("token")){
            this.props.history.push('login')
        }
    }

    render() {

        return (
            <div className="container">
                    <h2> Welcome Admin Dashboard</h2>
                    <ul>
                        <li>
                            <a href=''>View Orders</a>
                        </li>
                    </ul>
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => ({
    user: state.user.user,
    error : state.user.error
});

export default connect(mapStateToProps)(AdminDashComponent);


