import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route , Switch , Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class AdminHeaderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};

    }

 



    render() {

        return (
            <div className="header">
                <div className="nav-container">      
                    <Router>
                      <div>
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                          <a className="navbar-brand" href="#">EBILL APP</a>
                          <ul className="navbar-nav">
                            <li>
                                <Link to="/vieworder" onClick={()=>this.props.history.push('vieworder')}>Orders</Link>
                            </li>
                            <li>
                                <Link to="/viewrepeatcustomer" onClick={()=>this.props.history.push('viewrepeatcustomer')}>Repeated Customer</Link>
                            </li>
                            <li>
                                <Link to="/viewordercount" onClick={()=>this.props.history.push('viewordercount')}>Orders Count</Link>
                            </li>
                            <li>
                                <Link to="/vieworderdetails" onClick={()=>this.props.history.push('vieworderdetails')}>Order Details</Link>
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

export default withRouter(connect(mapStateToProps)(AdminHeaderComponent));


