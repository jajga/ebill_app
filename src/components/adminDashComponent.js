import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            <div className="container">
                <h2> Welcome Admin Dashboard</h2> 
                <div className="nav-container">      
                    <Router>
                      <div>
                        <nav>
                          <ul>
                            <li>
                              <Link to="/vieworder">Orders</Link>
                            </li>
                          </ul>
                        </nav>
                        </div>
                    </Router>
                </div>
            </div>
            
        );
    }

}

const mapStateToProps = (state,ownProps) => ({
    user: state.user.user,
    error : state.user.error
});

export default connect(mapStateToProps)(AdminDashComponent);


