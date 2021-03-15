import React from 'react';
import { Spinner } from 'react-bootstrap';

class Page extends React.Component
{
    render()
    {
        const { animation, msg } = this.props;

        return(
            <div className="text-center" style={{ marginTop: "15%" }}>
                <Spinner animation={ animation } variant="dark" style={{ height: '120px', width: '120px' }} />
                <h1>{ msg }</h1>
            </div>
        );
    }
}

export default Page;