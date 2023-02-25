import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import {
    Container, CardContent, TextField, MenuItem, Button, Card, Grid, CardHeader
} from '@mui/material';
import '../../App.css';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));

export default class Registrar extends Component {

    constructor() {
        super();
        this.state = {
            empleado: {
                fechaNacimiento: '',
                direccion: '',
                celular: '',
                estadoVacunacion: '',
                tipoVacuna: '',
                fechaVacuna: '',
                dosis: '',
                value: ''

            },


            error: {
                fechaNacimiento: { error: false, text: '', required: true },
                direccion: { error: false, text: '', required: true },
                celular: { error: false, text: '', required: true },
                estadoVacunacion: { error: false, text: '', required: true },
                tipoVacuna: { error: false, text: '', required: true },
                fechaVacuna: { error: false, text: '', required: true },
                dosis: { error: false, text: '', required: true },
            },
            listadoEstados: [
                { estado: 'Vacunado' },
                { estado: 'No Vacunado' }
            ],
            listadoVacunas: [
                { vacuna: 'Sputnik' },
                { vacuna: 'AstraZeneca' },
                { vacuna: 'Pfizer' },
                { vacuna: 'Jhonson&Jhonson' }

            ],
            verCampos: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);

    }


    validCelular(celularValue) {
        let error = { ...this.state.error };
        let result = false;
        let reg = /^([0-9]+){9}$/i;
        if (celularValue.length == 9) {
            if (reg.test(celularValue)) {
                if (celularValue.startsWith(9)) {
                    result = true;
                } else {
                    error.celular.text = 'El celular debe empezar con el número 9';
                }

            }
        } else {
            error.celular.text = 'celular incorrecto';

        }


    }

    guardar = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state.empleado)

        })
        const data = await res.json()

        console.log(data)

    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ blockButton: true })
        this.setState({
            [name]: value
        })

        if (name == 'estadoVacunacion') {
            if (value == 'Vacunado') {
                this.setState({ verCampos: true })
            } else {
                this.setState({ verCampos: false })
            }

        }



    }




    handleInputBlur(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let error = { ...this.state.error };
        error = this.setErrorField(error, name, false, '');
        if (error[name].required && (value === '' || value === 0)) {
            error = this.setErrorField(error, name, true, 'Campo obligatirio');
        }

        this.setState({ error })

    }

    setErrorField(error, name, status, message) {
        error[name].error = status;
        error[name].text = message;
        return error;
    }


    render() {
        return (

            <Container>

                <Card className='register-div' sx={{ mt: 5 }} style={{ backgroundColor: '#b0d6f9' }}>
                    <CardHeader title='Ingrese sus datos:' />
                    <CardContent>
                        <Stack component="form" noValidate spacing={4} width={300}>
                            <TextField
                                id="fecha"
                                label="Fecha de Nacimiento"
                                type="date"
                                defaultValue="yyyy-MM-dd"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}

                            />
                        </Stack>

                        <TextField
                            name='direccion'
                            label='Dirección'
                            value={this.state.direccion ? this.state.direccion : ""}
                            error={this.state.error.direccion.error}
                            helperText={this.state.error.direccion.error ? this.state.error.direccion.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.direccion.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />
                        <TextField
                            name='celular'
                            label='Celular'
                            value={this.state.celular ? this.state.celular : ""}
                            error={this.state.error.celular.error}
                            helperText={this.state.error.celular.error ? this.state.error.celular.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.celular.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />
                        <TextField
                            select
                            name='estadoVacunacion'
                            label='Eliga el estado de su vacunación'
                            value={this.state.estadoVacunacion ? this.state.estadoVacunacion : ""}
                            error={this.state.error.estadoVacunacion.error}
                            helperText={this.state.error.estadoVacunacion.error ? this.state.error.estadoVacunacion.text : ''}
                            required={this.state.error.estadoVacunacion.required}
                            fullWidth
                            margin="normal"
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        >
                            {this.state.listadoEstados.map((option) => (
                                <MenuItem key={option.estado} value={option.estado}>
                                    {option.estado}
                                </MenuItem>

                            ))}
                        </TextField>

                        {this.state.verCampos && <TextField
                            select
                            name='tipoVacuna'
                            label='Eliga el tipo de vacuna'
                            value={this.state.tipoVacuna ? this.state.tipoVacuna : ""}
                            error={this.state.error.tipoVacuna.error}
                            helperText={this.state.error.tipoVacuna.error ? this.state.error.tipoVacuna.text : ''}
                            required={this.state.error.tipoVacuna.required}
                            fullWidth
                            margin="normal"
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        >
                            {this.state.listadoVacunas.map((option) => (
                                <MenuItem key={option.vacuna} value={option.vacuna}>
                                    {option.vacuna}
                                </MenuItem>

                            ))}
                        </TextField>



                        }

                        {this.state.verCampos && <Stack component="form" noValidate paddingTop={2} >
                            <TextField
                                id="fecha"
                                label="fecha de vacunación"
                                type="date"
                                defaultValue="yyyy-MM-dd"
                                sx={{ width: 220 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Stack>

                        }
                        {this.state.verCampos && <TextField
                            name='dosis'
                            label='Número de dosis'
                            value={this.state.dosis ? this.state.dosis : ""}
                            error={this.state.error.dosis.error}
                            helperText={this.state.error.dosis.error ? this.state.error.dosis.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.dosis.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />
                        }
                        <div style={{ marginTop: 20, textAlign: 'center' }}>
                            <ColorButton style={{ width: '20%', marginRight: 10 }}
                                variant="contained"
                                
                                
                         

                            >Guardar</ColorButton>
                            <ColorButton style={{ width: '20%' }}
                                variant="contained"
                                disabled={this.state.blockButton}


                            >Regresar</ColorButton>
                        </div>


                    </CardContent>

                </Card>



            </Container>



        )



    }
}

