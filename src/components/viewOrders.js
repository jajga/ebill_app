import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewOrders } from '../actions/userActions';
import { isArray } from 'util';


class ViewOrdersComponent extends Component{
    constructor(props) {
        super(props);
        //data:[],
        this.state = {
            startdate: '',
            enddate:'',
            loginErr: 0,
            apidata:null,
        };

    }
    
    componentWillReceiveProps(nextProps,nextState) {
        //console.log(nextProps);
        if(typeof nextProps.error != 'object'){
            this.setState({orderErr:1}); 
            return false;   
        }

        if (nextProps.order !== 'undefined') {
            //console.log(nextProps.order);
            //const keys = Object.keys(json);
           // this.setState({data:nextProps.order.order});
            //console.log(this.state.data);
            this.state.apidata=nextProps.order.order;
            
            console.log('Admin dashboard');
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            startdate : this.state.startdate,
            enddate : this.state.enddate
        };

        //alert(this.state.startdate);
        this.props.viewOrders(post);
    }

    render() {

        return (
            <div className="container">
                    <form className="form-signin " onSubmit={(event)=>{this.onSubmit(event)}}>
                        { !this.state.loginErr ? '' : <span class="error text-danger ">Auth Error</span> }
                        
                        <div className="form-label-group">
                            <label>Start Date</label>
                        </div>    
                        <div className="form-label-group">
                            <input  type="text"
                        name="startdate"
                        onChange={(event)=>{this.onChange(event)}}
                        value={this.state.startdate} id="todoTitile" className="form-control"
                        required autoFocus />

                            
                        </div>
                        <div className="form-label-group">
                            <label>End Date</label>
                        </div>    
                        <div className="form-label-group">
                            <input  type="text"
                        name="enddate"
                        onChange={(event)=>{this.onChange(event)}}
                        value={this.state.enddate} id="todoTitile" className="form-control"
                        required  />

                            <div className="input-group-append button-container" >
                            <button type="submit" className="btn btn-lg btn-success btn-block text-uppercase">View Orders</button>
                            </div>
                        </div>
                    </form>
                    <div>
                    
                    { !this.state.apidata? null : 
                        <h2>{this.state.apidata[0].order_date}</h2>}
                    </div>
                   
                    { !this.state.apidata? null : 
                        this.state.apidata.map((dynamicdata,key) =>
                            <div>
                                {dynamicdata.order_date}
                            </div>)
                    } 
            </div>
            
        );
    }

}


const mapStateToProps = (state,ownProps) => ({
    order: state.order.order,
    error : state.user.error
});

export default connect(mapStateToProps, { viewOrders })(ViewOrdersComponent);