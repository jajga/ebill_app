import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderCounts } from '../actions/orderCountActions';
import ViewRepeatCustomerTemplate from '../templates/viewRepeatCustomer';
import ViewOrderCountTemplate from '../templates/viewOrderCountTemplate';
import { withRouter } from 'react-router-dom';


class ViewOrderCountComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end:'',
            orderErr: 0,
            startDate: new Date()
        };

    }

    componentDidMount(){
        if(!localStorage.getItem("token")){
            this.props.history.push('login')
        }
    }

    shouldComponentUpdate(nextProps,nextState) {
        if(typeof nextProps.error != 'object'){
            this.setState({orderErr:1}); 
            return true;   
        }
        console.log(nextProps);
      /* if(nextProps.repeatcustomers.repeatcustomer){
            return nextProps.repeatcustomers != this.props.repeatcustomers;
        }
       */ 
        return true;
        
    }



    onStartChange(date) {
        console.log(date);
        this.setState({ start : date });
        //this.setState({ [e.target.name]: e.target.value });
    }

    onEndChange(date) {
        console.log(date);
        this.setState({ end : date });
        //this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            startdate : this.state.start,
            enddate : this.state.end
        };


        this.props.getOrderCounts(post);
    }

    render() {
        console.log('repeat',this.props);
        return ViewOrderCountTemplate.call(this);
    }

}


const mapStateToProps = (state,ownProps) => ({
    ordercounts: state.ordercount.ordercounts,
    ordercount: state.ordercount.ordercount,
    error : state.order.error
});

export default withRouter(connect(mapStateToProps, {getOrderCounts})(ViewOrderCountComponent));
