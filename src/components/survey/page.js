import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './styles.css';

class Page extends React.Component
{
    render()
    {
        return (
            <Container className="my-5">
                <Form>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Label>Carrera</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 3 }>
                            <Form.Label>Matrícula</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 3 }>
                            <Form.Label>Semestre</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>NOMBRE</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 4 }>
                            <Form.Label>Apellido Paterno</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Apellido Materno</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 4 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Género</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>LUGAR DE NACIMIENTO</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 4 }>
                            <Form.Label>Población/Municipio</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Ciudad/Delegación</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Estado</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>DOMICILIO ACTUAL</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 4 }>
                            <Form.Label>Calle y número</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Colonia</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 4 }>
                            <Form.Label>Delegación</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Label>Vives con</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 6 }>
                            <Form.Label>Domicilio</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>MÁXIMO GRADO DE ESCOLARIDAD</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Label>Padre</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 6 }>
                            <Form.Label>Madre</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>OCUPACIÓN DE TUS PADRES</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Label>Padre - Oficio o profesión</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 6 }>
                            <Form.Label>Madre - Oficio o profesión</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>HERMAN(A) 1</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 2 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Máximo grado de estudios</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Oficio o profesión</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>HERMAN(A) 2</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 2 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Máximo grado de estudios</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Oficio o profesión</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>HERMAN(A) 3</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 2 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Máximo grado de estudios</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Oficio o profesión</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>HERMAN(A) 4</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 2 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Máximo grado de estudios</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                        <Col md={ 5 }>
                            <Form.Label>Oficio o profesión</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿CUÁLES SON LOS SERVICIOS/BIENES CON LOS QUE CUENTAN EN TU DOMICILIO?</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿CUÁLES SON LOS SERVICIOS MÉDICOS CON LOS QUE CUENTA TU FAMILIA?</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>ESTADO CIVIL</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>TU ESTADO LABORAL</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>ESTADO LABORAL CONYUGE</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>FORMACIÓN MEDIA SUPERIOR</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>EDUCACIÓN SUPERIOR</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿Cuál fue tu primera opción?</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿Cuál fue tu segunda opción?</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿Cuál fue tu tercera opción?</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>
                                ELIGE POR ORDEN DE RELEVANCIA DEL 1 AL 3, LAS CARRERAS QUE CONSIDERABAS COMO OPCIÓN DE ESTUDIO
                             </Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>ÁREAS DE CONOCIMIENTO</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Label>FÍSICO-MATEMÁTICAS E INGENIERÍAS</Form.Label>
                        </Col>
                        <Col md={ 6 }>
                            <Form.Label>SOCIALES</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <Form.Label>BIOLÓGICAS Y DE LA SALUD</Form.Label>
                        </Col>
                        <Col md={ 6 }>
                            <Form.Label>HUMANIDADES Y ARTES</Form.Label>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿CÚAL ES LA RAZÓN QUE TE MOTIVO A ESTUDIAR NIVEL SUPERIOR?</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>¿CÚAL DE LAS SIGUIENTES CARACTERISTICAS TE DEFINE?</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 12 }>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" />
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default Page;