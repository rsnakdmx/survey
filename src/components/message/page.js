import React from 'react';
import { Image } from 'react-bootstrap';
import Confirm from '../../assets/confirm.png';

class Page extends React.Component
{
    render()
    {
        return(
            <div className="text-center">
                <Image src={ Confirm } style={{ width: '25%' }} />
                <h1>Gracias por participar</h1>
                <h3>Tu información se ha guardado exitosamente.</h3>
            </div>
        );
    }
}

export default Page;