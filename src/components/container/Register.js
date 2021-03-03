import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import { register } from '../actions/action'
import {connect} from 'react-redux'
import Layout from '../navbar/Layout'
//Update git 3rd branch
 class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoading: false,
            error:{
                firstName:null,
                lastName:null,
                password:null
            },
            data:[],
            firstName:'',
            lastName:'',
            password:''
        }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value}, () =>console.log(this.state))
    }

    handleValidation = () => {
        const { firstName, lastName, password, error } = this.state;
        let validateSuccess = true
        if(firstName === ""){
            error.firstName = 'First Name can not be empty';
            this.setState({ error });
            validateSuccess = false
        }
        if (lastName === ""){
            error.lastName = 'Last Name can not be empty';
            this.setState({ error });
            validateSuccess = false
        }
        if (password === ""){
            error.password = 'Password can not be empty';
            this.setState({ error });
            validateSuccess = false
        }
       
        return validateSuccess
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const valid = this.handleValidation();
        if (valid) {
            this.props.register(this.state)
            this.setState({...this.state, error:""})
        }
        // if(firstName==="" && lastName==="", password===""){
        //     this.setState({
        //         error:{
        //         firstName:'First Name can not be empty',
        //         lastName: `Last Name can not be empty`,
        //         password: `Password can not be empty`,}
        //     })
        // }

        // if(firstName!==""){
        //     this.setState({error:{
        //         lastName: `Last Name can not be empty`,
        //         password: `Password can not be empty`,
        //     }})
        // }

        // if (lastName!==""){
        //     this.setState({error:{
        //         firstName:'First Name can not be empty',
        //         password: `Password can not be empty`,
        //     }})
        // }
        // if (password!==""){
        //     this.setState({
        //         error:{
        //             firstName:`First Name can not be empty`,
        //             lastName: `Last Name can not be empty`,
        //         }
        //     })
        // }
        
        // if(firstName!=="" && lastName!=="" && password!==""){
        //     this.props.register(this.state)
        //     this.setState({...this.state, error:""})
        // }
        
        

    }
    
    render() {
        console.log('state', this.state);
        return (
           
            <div>
                <Layout>
            <Form onSubmit={this.handleSubmit} >
                <Form.Field>
                    <input
                    type="text"
                    placeholder="Enter First name"
                    onChange={(e)=>{this.setState({
                        firstName:e.target.value,
                        error:{
                        firstName:"",
                        lastName:this.state.error.lastName,
                        password:this.state.error.password
                    }
                    })}}
                    name="firstName"
                    />
                    {this.state.error.firstName?this.state.error.firstName:""}
                </Form.Field>
                <Form.Field>
                <input
                    type="text"
                    placeholder="Enter Last name"
                    onChange={(e)=>{this.setState({
                        lastName:e.target.value,
                        error:{
                        firstName:this.state.error.firstName,
                        lastName:"",
                        password:this.state.error.password
                    }
                    })}}
                    name="lastName"
                    />
                    {this.state.error.lastName?this.state.error.lastName:""}
                </Form.Field>
                <Form.Field>
                    <input
                    type="text"
                    placeholder="Enter Password"
                    onChange={(e)=>{this.setState({
                        password:e.target.value,
                        error:{
                        firstName:this.state.error.firstName,
                        lastName:this.state.error.lastName,
                        password:""
                    }
                    })}}
                    name="password"
                    />
                    {this.state.error.password?this.state.error.password:""}
                </Form.Field>
                <Button type="submit">Register</Button>
            </Form>
           {/* {JSON.stringify(this.state.error.firstName)}<br/>
           {JSON.stringify(this.state.error.lastName)}<br/>
           {JSON.stringify(this.state.error.password)}<br/> */}
           </Layout>
        </div>
        
        )
    }
}

const mapStateToProps = state =>{
    console.log(state)
}
const mapDispatchToProps = dispatch =>({
    register: (state) => {dispatch(register(state))}
})



export default connect (mapStateToProps, mapDispatchToProps)(Register)
