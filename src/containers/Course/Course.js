import React, { Component } from 'react';

class Course extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                <h1>{this.props.match.params.title ? this.props.match.params.title : this.props.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id ? this.props.match.params.id : this.props.id}</p>
            </div>
        );
    }
}

export default Course;