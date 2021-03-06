import React from 'react';
import { Row, Col, Image } from 'antd';

const ListadoImágenes = ({listaImg}) => {


    console.log(listaImg)

    return(
        <div> 
            <Row>
            {listaImg.map(imagen => (
                <Col 
                    xl={8}
                    lg={8}
                    md={8}
                    sm={12}
                    xs={24}
                    key={imagen.id}
                    style={{
                        padding: '1em'
                    }}
                >
                <div
                    style={{
                        background: '#d7d7d7',
                        padding: '.5em'
                    }}
                >
                <div 
                    style={{
                        width: '100%',
                        overflow: 'hidden',
                        margin: '0 auto'
                    }}
                >
                    <Image
                         style={{
                            width: '200px',
                            height: '120px',
                            cursor: 'pointer',

                        }}
                        src={imagen.largeImageURL} alt="img"
                        />
                </div>
                <div 
                    style={{
                        height: '5em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}

                >
                    <p
                        style={{
                            fontSize: '12px',
                            fontFamily: 'avenir'
                        }}
                    >{imagen.tags}</p>
                </div>
                
                </div>
                   
                    
                </Col>
                ))}   
            </Row>
        </div>

    )
}


export default ListadoImágenes;