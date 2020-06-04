import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderDetails } from '../actions/orderDetailsActions';
import ViewOrderDetailsTemplate from '../templates/viewOrderDetails';



class ViewOrderDetailsComponent extends Component{
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
        if(nextProps.orders.order){
            return nextProps.orders != this.props.orders;
        }
        
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


        this.props.getOrderDetails(post);
    }

    render() {

        return ViewOrderDetailsTemplate.call(this);
    }

}


const mapStateToProps = (state,ownProps) => ({
    orders: state.order.orders,
    order: state.order.order,
    error : state.order.error
});

export default connect(mapStateToProps, { getOrderDetails })(ViewOrderDetailsComponent);