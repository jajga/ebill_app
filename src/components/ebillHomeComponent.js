import React, { Component } from 'react';
import { connect } from 'react-redux';

class EbillHomeComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {

        return (
            <div className="container">
                    <h2> Welcome Ebill System</h2>
            </div>
        );
    }

}

const mapStateToProps = (state,ownProps) => ({
    user: state.user.user,
});

export default connect(mapStateToProps)(EbillHomeComponent);


