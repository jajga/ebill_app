import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHeaderComponent from './adminHeaderComponent';
import { BrowserRouter as Router, Route , Switch , Link } from "react-router-dom";

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
            <>
                <AdminHeaderComponent/>
                <div className="container page">
                    <div className="page-title">
                        <h2>Welcome Admin</h2>
                    </div>
                </div>
            </>        
            
        );
    }

}

const mapStateToProps = (state,ownProps) => ({
    user: state.user.user,
    error : state.user.error
});

export default connect(mapStateToProps)(AdminDashComponent);


