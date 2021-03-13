import React from 'react';
import { Col, Container, Form, Navbar, Row, Table } from 'react-bootstrap';
import './styles.css';

class Page extends React.Component
{
    render()
    {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        Formulario
                    </Navbar.Brand>
                </Navbar>
                <Container className="my-5">
                    <Form>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label>Nombre del participante</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <hr />
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
                                <Form.Label className="subtitle">NOMBRE</Form.Label>
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
                                <Form.Control as="select">
                                    <option>Femenino</option>
                                    <option>Masculino</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">LUGAR DE NACIMIENTO</Form.Label>
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
                                <Form.Label className="subtitle">DOMICILIO ACTUAL</Form.Label>
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
                        <hr />
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subtitle">Vives con</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>Solo(a)</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Padre</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Madre</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Hermanos</Form.Label>
                                        <Form.Control type="text" placeholder="Cuantos" />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Otros familiares</Form.Label>
                                        <Form.Control type="text" placeholder="Cuantos" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label className="subtitle">Domicilio</Form.Label>
                                <Row>
                                    <Col md={ 4 }>
                                        <Form.Label>Propio</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Rentado</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Prestado</Form.Label>
                                        <Form.Check />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">MÁXIMO GRADO DE ESCOLARIDAD</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 6 }>
                                <Form.Label className="subsubtitle">Padre</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 6 }>
                                <Form.Label className="subsubtitle">Madre</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">OCUPACIÓN DE TUS PADRES</Form.Label>
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
                                <Form.Label className="subsubtitle">HERMANO(A) 1</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subsubtitle">HERMANO(A) 2</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subsubtitle">HERMANO(A) 3</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subsubtitle">HERMANO(A) 4</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="text-center" md={ 12 }>
                                <Form.Label className="subtitle">
                                    ¿CUÁLES SON LOS SERVICIOS/BIENES CON LOS QUE CUENTAN EN TU DOMICILIO?
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>Computadora</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Internet</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Telefonía fija</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>T.V satelical/Cable</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Vehículo particular</Form.Label>
                                        <Form.Check />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center" md={ 12 }>
                                <Form.Label className="subtitle">
                                    ¿CUÁLES SON LOS SERVICIOS MÉDICOS CON LOS QUE CUENTA TU FAMILIA?
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Row>
                                    <Col md={ 3 }>
                                        <Form.Label>IMSS</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>ISSTE</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Seguro Popular</Form.Label>
                                        <Form.Check />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Servicios Particulares</Form.Label>
                                        <Form.Check />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">ESTADO CIVIL</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 8 }>
                                <Row>
                                    <Col md={ 4 }>
                                        <Form.Label>Soltero(a)</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Casado(a)</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Unión Libre</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Hijos(as)</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Edades</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">TU ESTADO LABORAL</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 8 }>
                                <Row>
                                    <Col md={ 4 }>
                                        <Form.Label>No</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Si / L-V</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Vacaciones/Fin de semana</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Horario</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Ingreso mensual</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">ESTADO LABORAL CONYUGE</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 8 }>
                                <Row>
                                    <Col md={ 4 }>
                                        <Form.Label>No</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Si / L-V</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Vacaciones/Fin de semana</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Horario</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Ingreso mensual</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">FORMACIÓN MEDIA SUPERIOR</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 6 }>
                                <Row>
                                    <Col md={ 3 }>
                                        <Form.Label>CETIS</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>CONALEP</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>COLBACH</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Vacaciones/Fin de semana</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Otra</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Fue primera opción</Form.Label>
                                <Row>
                                    <Col md={ 3 }>
                                        <Form.Label>Si</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>No</Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label>Carrera Técnica o Área de Conocimiento</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Promedio final</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">EDUCACIÓN SUPERIOR</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subsubtitle">¿Cuál fue tu primera opción?</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>TEC. TLALPAN </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UNAM </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>IPN </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UAM </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Otra </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>¿En qué mes y año?</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subsubtitle">¿Cuál fue tu segunda opción?</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>TEC. TLALPAN </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UNAM </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>IPN </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UAM </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Otra </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>¿En qué mes y año?</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subsubtitle">¿Cuál fue tu tercera opción?</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>TEC. TLALPAN </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UNAM </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>IPN </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UAM </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Otra </Form.Label>
                                        <Form.Check type="radio" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>¿En qué mes y año?</Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="text-center" md={ 12 }>
                                <Form.Label className="subtitle">
                                    ELIGE POR ORDEN DE RELEVANCIA DEL 1 AL 3, LAS CARRERAS QUE CONSIDERABAS COMO OPCIÓN DE ESTUDIO
                                 </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center" md={ 12 }>
                                <Form.Label className="subsubtitle">
                                    ÁREAS DE CONOCIMIENTO
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 6 }>
                                <Table bordered>
                                    <thead>
                                        <tr className="text-center">
                                            <th colSpan={ 2 }>FÍSICO-MATEMÁTICAS E INGENIERÍAS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '80%' }}>ARQUITECTURA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIAS DE LA COMPUTACION</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>FISICA / MATEMATICAS APLICADAS</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA CIVIL</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA ELECTRICA Y ELECTRONICA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA EN TELECOMUNICACIONES</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>NGENIERIA INDUSTRIAL</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA MECANICA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA QUIMICA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA MECATRONICA Y ROBOTICA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA EN ENERGIAS RENOVABLES</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA AMBIENTAL</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={ 6 }>
                                <Table bordered>
                                    <thead>
                                        <tr className="text-center">
                                            <th colSpan={ 2 }>SOCIALES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '80%' }}>ADMINISTRACION</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>ANTROPOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIAS DE LA COMUNICACION</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIAS POLITICAS</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CONTADURIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>DERECHO</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>ECONOMIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>GASTRONOMIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>GEOGRAFIA APLICADA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>GEOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>RELACIONES INTERNACIONALES</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>SOCIOLOGIAL</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 6 }>
                                <Table bordered>
                                    <thead>
                                        <tr className="text-center">
                                            <th colSpan={ 2 }>BIOLÓGICAS Y DE LA SALUD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '80%' }}>BIOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIA FORENSE / CRIMINOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIRUJANO DENTISTA / ODONTOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>ENFERMERIA Y OBSTETRICIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>MEDICO CIRUJANO</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>MEDICINA VETERINARIA Y ZOOTECNIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>NUTRIOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>PSICOLOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr><tr>
                                            <td style={{ width: '80%' }}>QUIMICA FARMACEUTICO</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={ 6 }>
                                <Table bordered>
                                    <thead>
                                        <tr className="text-center">
                                            <th colSpan={ 2 }>HUMANIDADES Y ARTES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '80%' }}>ARTES VISUALES</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CINEMATOGRAFIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>DISEÑO GRAFICO</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>FILOSOFIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>HISTORIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>IDIOMAS</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>LITERATURA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>PEDAGOGIA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>TEATRO / ACTUACION / MUSICA</td>
                                            <td><Form.Control type="text" /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="text-center" md={ 12 }>
                                <Form.Label className="subtitle">
                                    ¿CÚAL ES LA RAZÓN QUE TE MOTIVO A ESTUDIAR NIVEL SUPERIOR?
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 3 }>
                                <Form.Label>Tener mayores ingresos</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Ser alguien en la vida</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Es tu obligación</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Gusto por el conocimiento</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 3 }>
                                <Form.Label>Tener un mejor nivel de vida</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Satisfacer a tus papás</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Conseguir un buen trabajo</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Tener acceso a posgrados</Form.Label>
                                <Form.Check type="radio" />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="text-center" md={ 12 }>
                                <Form.Label className="subtitle">
                                    ¿CÚAL DE LAS SIGUIENTES CARACTERISTICAS TE DEFINE?
                                </Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Alegre</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Introvertido</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Dominante</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Sociable</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Puntual</Form.Label>
                                <Form.Check />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Agresivo</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Responsable</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Práctico</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Inquieto</Form.Label>
                                <Form.Check />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Tranquilo</Form.Label>
                                <Form.Check />
                            </Col>
                        </Row>
                        <hr />
                    </Form>
                </Container>
            </>
        );
    }
}

export default Page;