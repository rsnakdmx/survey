import React from 'react';
import Page from './page';

class Survey extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = 
        {
            catedo: null
        };
    };

    changeValue = event => this.setState({ [event.target.name]: event.target.value.toUpperCase() });

    render()
    {
        const { catedo } = this.state;
        console.log(this.state);

        return <Page catedo={ catedo } changeValue={ this.changeValue.bind() } />;
    }
}

export default Survey;