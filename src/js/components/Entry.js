import React, { Component } from "react";

class Entry extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit(evt)
    {
        evt.preventDefault();
        alert(`Hello, ${this.state.name}!`)
        this.setState({name: ""})
    }

    render(){
        return(
            <div>
                <h1>This is an app starter!</h1>
                <p>Use the form below to alert your name</p>
                <form className="greeter-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="id">Name: </label>
                    <input type="text" name="name" value={this.state.name} id="name" onChange={this.handleChange}></input>
                    <button>Alert name!</button>
                </form>
            </div>
        );
    }
}

export default Entry;
