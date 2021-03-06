import React from "react";
import {Form, Input, FormGroup, Container, Label} from 'reactstrap';
import 'react-dates/initialize';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AdminHeaderComponent from '../components/adminHeaderComponent';
//import "react-datepicker/dist/react-datepicker.css";
//import { ReactDatePicker } from 'react-date-picker-cs';
//import DatePicker from 'react-bootstrap-date-picker';

import {SingleDatePicker} from 'react-dates';

const ViewOrderCountTemplate = function(props){
    let orderArrayObj = this.props.ordercounts;
    const orderList = Object.keys(this.props.ordercounts).map( (key, index) =>
        <li className="list-group-item" key={key}>
            <div className="text-control-grp pull-left">
                <span className="orders-date">Store ID :  {orderArrayObj[key].store_id}</span>
                <span className="total-orders">Total Orders : {orderArrayObj[key].totalorder}</span>
            </div>   
        </li>
    );
    
   //const orderList = null;
    return (
        <>
            <AdminHeaderComponent/>
        
            <div className="container page">
                    <div className="page-title">
                        <h2>Order Count</h2>
                    </div>
                    <form className="form-inline form-search-order " onSubmit={(event)=>{this.onSubmit(event)}}>
                        { !this.state.orderErr ? '' : <span class="error text-danger ">Order Error</span> }
                        <div className="form-group">
                            <div className="form-label-group">
                                <label>Start Date</label>
                            </div>    
                            <div className="form-label-group">

                            <DatePicker
                              selected={ this.state.start }
                              onChange={ (date) => this.onStartChange(date) }
                              name="start"
                              dateFormat="yyyy-MM-dd"
                            />
                                

                                
                            </div>
                        </div> 
                        <div className="form-group">   
                            <div className="form-label-group">
                                <label>End Date</label>
                            </div>    
                            <div className="form-label-group">
                                <DatePicker
                                  selected={ this.state.end }
                                  onChange={ (date) => this.onEndChange(date) }
                                  name="end"
                                  dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        </div>

                          
                        <button type="submit" className="btn btn-sm btn-primary  text-uppercase">Search</button>
                    </form>

                    <div className="order-list">
                        <ul>{orderList}</ul>
                    </div>

                   
            </div>
        </>    


    )
}

export default ViewOrderCountTemplate;