import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateUser } from '../actions/userActions';


class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            loginErr: 0
        };

    }

    componentWillReceiveProps(nextProps,nextState) {
        console.log(nextProps);
        if(typeof nextProps.error != 'object'){
            this.setState({loginErr:1}); 
            return false;   
        }

        if (nextProps.user !== 'undefined') {
            localStorage.setItem("token", nextProps.user)
            //this.props.history.push('admin');
            console.log('Admin dashboard');
        }
    }

    // componentDidUpdate(nextProps){
    //     if(nextProps.user.error){
    //         this.setState({loginErr:1});    
    //     }
    //     if (nextProps.user.user !== 'undefined') {
    //         console.log('componentDidUpdate Admin dashboard');
    //     }
    // }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            username : this.state.username,
            password : this.state.password
        };


        this.props.validateUser(post);
    }

    render() {

        return (
            <div className="container">
                    <form className="form-signin " onSubmit={(event)=>{this.onSubmit(event)}}>
                        { !this.state.loginErr ? '' : <span class="error text-danger ">Auth Error</span> }
                        
                        <div className="form-label-group">
                            <label>Username</label>
                        </div>    
                        <div className="form-label-group">
                            <input  type="text"
                        name="username"
                        onChange={(event)=>{this.onChange(event)}}
                        value={this.state.todo} id="todoTitile" className="form-control"
                        required autoFocus />

                            
                        </div>
                        <div className="form-label-group">
                            <label>Password</label>
                        </div>    
                        <div className="form-label-group">
                            <input  type="password"
                        name="password"
                        onChange={(event)=>{this.onChange(event)}}
                        value={this.state.password} id="todoTitile" className="form-control"
                        required  />

                            <div className="input-group-append button-container" >
                            <button type="submit" className="btn btn-lg btn-success btn-block text-uppercase">Login</button>
                            </div>
                        </div>
                    </form>
            </div>
        );
    }

}


const mapStateToProps = (state,ownProps) => ({
    user: state.user.user,
    error : state.user.error
});

export default connect(mapStateToProps, { validateUser })(LoginComponent);