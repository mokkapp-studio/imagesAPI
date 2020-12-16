import React, { Fragment, useState } from 'react';
import { Form, Input, Button } from 'antd';

const Formulario = ({setBusqueda}) => {


    const [ termino, setTermino ] = useState('');
    const [ error, setError ] = useState(false)



    const buscarImagen = e => {
        //e.preventDefault();

        if(termino.trim() === '') {
            console.log('error')
            setError(true)
            return;
        }

            setError(false)

        setBusqueda(termino)
    }


    return(
        <Fragment>
            <Form 
                layout="vertical"
                onFinish={buscarImagen}
            >
                <Form.Item>
                    <Input
                        name="search"
                        onChange={e => setTermino(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button  type="primary" htmlType="submit">Search Image</Button>
                </Form.Item>
            </Form>
            {error && 'error'}
        </Fragment>
    )
}

export default Formulario;