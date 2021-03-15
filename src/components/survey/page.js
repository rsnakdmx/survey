import React from 'react';
import { Col, Container, Form, Navbar, Row, Table } from 'react-bootstrap';
import './styles.css';

class Page extends React.Component
{
    render()
    {
        const { catedo, changeValue } = this.props;

        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        Formulario
                    </Navbar.Brand>
                </Navbar>
                <Container className="my-5">
                    <Form>
                        <hr />
                        <Row>
                            <Col md={ 6 }>
                                <Form.Label>Carrera</Form.Label>
                                <Form.Control name="carrera" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Matrícula</Form.Label>
                                <Form.Control name="matricula" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Semestre</Form.Label>
                                <Form.Control name="semestre" type="text" maxLength="semestre" onChange={ changeValue } />
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
                                <Form.Control name="primape" type="text" maxLength="80" onChange={ changeValue } />
                            </Col>
                            <Col md={ 4 }>
                                <Form.Label>Apellido Materno</Form.Label>
                                <Form.Control name="segape" type="text" maxLength="80" onChange={ changeValue } />
                            </Col>
                            <Col md={ 4 }>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control name="nombre" type="text" maxLength="80" onChange={ changeValue } />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 4 }>
                                <Form.Label>Edad</Form.Label>
                                <Form.Control name="edad" type="number" onChange={ changeValue } />
                            </Col>
                            <Col md={ 4 }>
                                <Form.Label>Género</Form.Label>
                                <Form.Control name="genero" as="select" onChange={ changeValue }>
                                    <option value="F">Femenino</option>
                                    <option value="M">Masculino</option>
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
                                <Form.Control name="municnac" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 4 }>
                                <Form.Label>Ciudad/Delegación</Form.Label>
                                <Form.Control name="ciudadnac" type="text" maxLength="80" onChange={ changeValue } />
                            </Col>
                            <Col md={ 4 }>
                                <Form.Label>Estado</Form.Label>
                                <Form.Control name="estadonac" as="select" onChange={ changeValue }>
                                { (catedo) ? catedo.map(data => <option value={ data.id }>{data.descr}</option>) : null } 
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <Form.Label className="subtitle">DOMICILIO ACTUAL</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 8 }>
                                <Form.Label>Calle y número</Form.Label>
                                <Form.Control name="domact" type="text" maxLength="100" onChange={ changeValue } />
                            </Col>
                            <Col md={ 4 }>
                                <Form.Label>Delegación</Form.Label>
                                <Form.Control name="municact" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subtitle">Vives con</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>Solo(a)</Form.Label>
                                        <Form.Check name="vivsol" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Padre</Form.Label>
                                        <Form.Check name="vivpad" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Madre</Form.Label>
                                        <Form.Check name="vivpad" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Hermanos</Form.Label>
                                        <Form.Control name="vivher" type="number" placeholder="Cuantos" />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Otros familiares</Form.Label>
                                        <Form.Control name="vivotro" type="number" placeholder="Cuantos" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label className="subtitle">Domicilio</Form.Label>
                                <Row>
                                    <Col md={ 4 }>
                                        <Form.Label>Propio</Form.Label>
                                        <Form.Check name="domtip" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Rentado</Form.Label>
                                        <Form.Check name="domtip" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Prestado</Form.Label>
                                        <Form.Check name="domtip" type="radio" value="3" onChange={ changeValue } />
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
                                        <Form.Check name="maxescpad" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check name="maxescpad" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check name="maxescpad" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check name="maxescpad" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check name="maxescpad" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 6 }>
                                <Form.Label className="subsubtitle">Madre</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check name="maxescmad" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check name="maxescmad" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check name="maxescmad" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check name="maxescmad" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check name="maxescmad" type="radio" value="5" onChange={ changeValue } />
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
                                <Form.Control name="oficpad" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 6 }>
                                <Form.Label>Madre - Oficio o profesión</Form.Label>
                                <Form.Control name="oficmad" type="text" maxLength="50" onChange={ changeValue } />
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
                                <Form.Control name="hermedad1" type="number" onChange={ changeValue } />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check name="hermesc1" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check name="hermesc1" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check name="hermesc1" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check name="hermesc1" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check name="hermesc1" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control name="hermofic1" type="text" maxLength="50" onChange={ changeValue } />
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
                                <Form.Control name="hermedad2" type="number" onChange={ changeValue } />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check name="hermesc2" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check name="hermesc2" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check name="hermesc2" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check name="hermesc2" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check name="hermesc2" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control name="hermofic2" type="text" maxLength="50" onChange={ changeValue } />
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
                                <Form.Control name="hermedad3" type="number" onChange={ changeValue } />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check name="hermesc3" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check name="hermesc3" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check name="hermesc3" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check name="hermesc3" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check name="hermesc3" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control name="hermofic3" type="text" maxLength="50" onChange={ changeValue } />
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
                                <Form.Control name="hermedad4" type="number" onChange={ changeValue } />
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Máximo grado de estudios</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>PRIM</Form.Label>
                                        <Form.Check name="hermesc4" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>SEC</Form.Label>
                                        <Form.Check name="hermesc4" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PREP</Form.Label>
                                        <Form.Check name="hermesc4" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>PROF</Form.Label>
                                        <Form.Check name="hermesc4" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>POSGR</Form.Label>
                                        <Form.Check name="hermesc4" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 5 }>
                                <Form.Label>Oficio o profesión</Form.Label>
                                <Form.Control name="hermofic4" type="text" maxLength="50" onChange={ changeValue } />
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
                                        <Form.Check name="biecomp" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Internet</Form.Label>
                                        <Form.Check name="bieinter" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Telefonía fija</Form.Label>
                                        <Form.Check name="biefija" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>T.V satelical/Cable</Form.Label>
                                        <Form.Check name="biesat" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Vehículo particular</Form.Label>
                                        <Form.Check name="bievehi" value="S" onChange={ changeValue } />
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
                                        <Form.Check name="servmimss" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>ISSTE</Form.Label>
                                        <Form.Check name="servmisst" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Seguro Popular</Form.Label>
                                        <Form.Check name="servmsp" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>Servicios Particulares</Form.Label>
                                        <Form.Check name="servmpar" value="S" onChange={ changeValue } />
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
                                        <Form.Check name="estciv" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Casado(a)</Form.Label>
                                        <Form.Check name="estciv" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Unión Libre</Form.Label>
                                        <Form.Check name="estciv" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Hijos(as)</Form.Label>
                                <Form.Control name="hijos" placeholder="Cuantos" type="number" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Edades</Form.Label>
                                <Form.Control name="edades" type="text" maxLength="100" onChange={ changeValue } />
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
                                        <Form.Check name="tuestlabno" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Si / L-V</Form.Label>
                                        <Form.Check name="tuestlabsi" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Vacaciones/Fin de semana</Form.Label>
                                        <Form.Check name="tuestlabvac" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Horario</Form.Label>
                                <Form.Control name="horario" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Ingreso mensual</Form.Label>
                                <Form.Control name="ingreso" type="number" onChange={ changeValue } />
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
                                        <Form.Check name="tuestlabcno" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Si / L-V</Form.Label>
                                        <Form.Check name="tuestlabcsi" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>Vacaciones/Fin de semana</Form.Label>
                                        <Form.Check name="tuestlabcvac" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Horario</Form.Label>
                                <Form.Control name="horarioc" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Ingreso mensual</Form.Label>
                                <Form.Control name="ingresoc" type="text" onChange={ changeValue } />
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
                                    <Col md={ 4 }>
                                        <Form.Label>CETIS</Form.Label>
                                        <Form.Check name="formmedsup" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>CONALEP</Form.Label>
                                        <Form.Check name="formmedsup" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 4 }>
                                        <Form.Label>COLBACH</Form.Label>
                                        <Form.Check name="formmedsup" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Otra</Form.Label>
                                <Form.Control name="formmedsupo" placeholder="Especifique" type="text" maxLength="50" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Fue primera opción</Form.Label>
                                <Row>
                                    <Col md={ 3 }>
                                        <Form.Label>Si</Form.Label>
                                        <Form.Check name="isprimopc" type="radio" value="S" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 3 }>
                                        <Form.Label>No</Form.Label>
                                        <Form.Check name="isprimopc" type="radio" value="N" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label>Carrera Técnica o Área de Conocimiento</Form.Label>
                                <Form.Control name="cartecarea" type="text" maxLength="20" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Promedio final</Form.Label>
                                <Form.Control name="prommedsup" type="number" onChange={ changeValue } />
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
                                        <Form.Check name="primopc" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UNAM </Form.Label>
                                        <Form.Check name="primopc" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>IPN </Form.Label>
                                        <Form.Check name="primopc" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UAM </Form.Label>
                                        <Form.Check name="primopc" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Otra </Form.Label>
                                        <Form.Check name="primopc" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>¿En qué mes y año?</Form.Label>
                                <Form.Control name="primdate" type="text" maxLength="20" onChange={ changeValue } />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subsubtitle">¿Cuál fue tu segunda opción?</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>TEC. TLALPAN </Form.Label>
                                        <Form.Check name="segopc" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UNAM </Form.Label>
                                        <Form.Check name="segopc" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>IPN </Form.Label>
                                        <Form.Check name="segopc" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UAM </Form.Label>
                                        <Form.Check name="segopc" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Otra </Form.Label>
                                        <Form.Check name="segopc" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>¿En qué mes y año?</Form.Label>
                                <Form.Control name="segdate" type="text" maxLength="20" onChange={ changeValue } />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 9 }>
                                <Form.Label className="subsubtitle">¿Cuál fue tu tercera opción?</Form.Label>
                                <Row>
                                    <Col md={ 2 }>
                                        <Form.Label>TEC. TLALPAN </Form.Label>
                                        <Form.Check name="tercopc" type="radio" value="1" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UNAM </Form.Label>
                                        <Form.Check name="tercopc" type="radio" value="2" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>IPN </Form.Label>
                                        <Form.Check name="tercopc" type="radio" value="3" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>UAM </Form.Label>
                                        <Form.Check name="tercopc" type="radio" value="4" onChange={ changeValue } />
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Label>Otra </Form.Label>
                                        <Form.Check name="tercopc" type="radio" value="5" onChange={ changeValue } />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>¿En qué mes y año?</Form.Label>
                                <Form.Control name="tercdate" type="text" maxLength="20" onChange={ changeValue } />
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
                                            <td><Form.Control name="arq" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIAS DE LA COMPUTACION</td>
                                            <td><Form.Control name="ccomp" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>FISICA / MATEMATICAS APLICADAS</td>
                                            <td><Form.Control name="fismat" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA CIVIL</td>
                                            <td><Form.Control name="ingciv" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA ELECTRICA Y ELECTRONICA</td>
                                            <td><Form.Control name="ingelec" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA EN TELECOMUNICACIONES</td>
                                            <td><Form.Control name="ingtel" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>NGENIERIA INDUSTRIAL</td>
                                            <td><Form.Control name="ingind" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA MECANICA</td>
                                            <td><Form.Control name="ingmec" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA QUIMICA</td>
                                            <td><Form.Control name="ingquim" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA MECATRONICA Y ROBOTICA</td>
                                            <td><Form.Control name="ingmecrob" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA EN ENERGIAS RENOVABLES</td>
                                            <td><Form.Control name="ingeneren" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>INGENIERIA AMBIENTAL</td>
                                            <td><Form.Control name="ingamb" type="number" onChange={ changeValue } /></td>
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
                                            <td><Form.Control name="ingamb" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>ANTROPOLOGIA</td>
                                            <td><Form.Control name="antropo" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIAS DE LA COMUNICACION</td>
                                            <td><Form.Control name="ccomun" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIAS POLITICAS</td>
                                            <td><Form.Control name="cpolit" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CONTADURIA</td>
                                            <td><Form.Control name="conta" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>DERECHO</td>
                                            <td><Form.Control name="derec" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>ECONOMIA</td>
                                            <td><Form.Control name="econom" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>GASTRONOMIA</td>
                                            <td><Form.Control name="gastro" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>GEOGRAFIA APLICADA</td>
                                            <td><Form.Control name="geograf" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>GEOLOGIA</td>
                                            <td><Form.Control name="geokog" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>RELACIONES INTERNACIONALES</td>
                                            <td><Form.Control name="relaint" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>SOCIOLOGIAL</td>
                                            <td><Form.Control name="sociolo" type="number" onChange={ changeValue } /></td>
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
                                            <td><Form.Control name="biolog" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIENCIA FORENSE / CRIMINOLOGIA</td>
                                            <td><Form.Control name="cforen" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CIRUJANO DENTISTA / ODONTOLOGIA</td>
                                            <td><Form.Control name="ododent" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>ENFERMERIA Y OBSTETRICIA</td>
                                            <td><Form.Control name="enferm" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>MEDICO CIRUJANO</td>
                                            <td><Form.Control name="medcir" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>MEDICINA VETERINARIA Y ZOOTECNIA</td>
                                            <td><Form.Control name="medvet" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>NUTRIOLOGIA</td>
                                            <td><Form.Control name="nutrio" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>PSICOLOGIA</td>
                                            <td><Form.Control name="psico" type="number" onChange={ changeValue } /></td>
                                        </tr><tr>
                                            <td style={{ width: '80%' }}>QUIMICA FARMACEUTICO</td>
                                            <td><Form.Control name="quimfarm" type="number" onChange={ changeValue } /></td>
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
                                            <td><Form.Control name="artvisual" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>CINEMATOGRAFIA</td>
                                            <td><Form.Control name="cinema" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>DISEÑO GRAFICO</td>
                                            <td><Form.Control name="disegraf" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>FILOSOFIA</td>
                                            <td><Form.Control name="filoso" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>HISTORIA</td>
                                            <td><Form.Control name="histo" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>IDIOMAS</td>
                                            <td><Form.Control name="idiom" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>LITERATURA</td>
                                            <td><Form.Control name="litera" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>PEDAGOGIA</td>
                                            <td><Form.Control name="pedago" type="number" onChange={ changeValue } /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '80%' }}>TEATRO / ACTUACION / MUSICA</td>
                                            <td><Form.Control name="teatactmu" type="number" onChange={ changeValue } /></td>
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
                                <Form.Check name="razest" type="radio" value="1" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Ser alguien en la vida</Form.Label>
                                <Form.Check name="razest" type="radio" value="2" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Es tu obligación</Form.Label>
                                <Form.Check name="razest" type="radio" value="3" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Gusto por el conocimiento</Form.Label>
                                <Form.Check name="razest" type="radio" value="4" onChange={ changeValue } />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 3 }>
                                <Form.Label>Tener un mejor nivel de vida</Form.Label>
                                <Form.Check name="razest" type="radio" value="5" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Satisfacer a tus papás</Form.Label>
                                <Form.Check name="razest" type="radio" value="6" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Conseguir un buen trabajo</Form.Label>
                                <Form.Check name="razest" type="radio" value="7" onChange={ changeValue } />
                            </Col>
                            <Col md={ 3 }>
                                <Form.Label>Tener acceso a posgrados</Form.Label>
                                <Form.Check name="razest" type="radio" value="8" onChange={ changeValue } />
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
                                <Form.Check name="alegre" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Introvertido</Form.Label>
                                <Form.Check name="introvertido" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Dominante</Form.Label>
                                <Form.Check name="dominante" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Sociable</Form.Label>
                                <Form.Check name="sociable" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Puntual</Form.Label>
                                <Form.Check name="puntual" value="S" onChange={ changeValue } />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={ 2 }>
                                <Form.Label>Agresivo</Form.Label>
                                <Form.Check name="agresivo" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Responsable</Form.Label>
                                <Form.Check name="responsable" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Práctico</Form.Label>
                                <Form.Check name="practico" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Inquieto</Form.Label>
                                <Form.Check name="inquieto" value="S" onChange={ changeValue } />
                            </Col>
                            <Col md={ 2 }>
                                <Form.Label>Tranquilo</Form.Label>
                                <Form.Check name="tranquilo" value="S" onChange={ changeValue } />
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