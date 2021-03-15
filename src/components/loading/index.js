import React from 'react';
import Page from './page';

class Loading extends React.Component
{
    render()
    {
        const { animation, msg } = this.props;

        return(
            <Page 
                animation={ animation }
                msg={ msg }
            />
        );
    }
}

export default Loading;