import React, { Component } from 'react';
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



export default class RegistrarEmpleados extends Component {

    constructor() {
        super();
        this.state = {
            empleado :{
                cedula: '',
                nombres: '',
                apellidos: '',
                email: ''

            },
          
            error: {
                cedula: { error: false, text: '', required: true },
                nombres: { error: false, text: '', required: true },
                apellidos: { error: false, text: '', required: true },
                email: { error: false, text: '', required: true },
            },
            

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputChange = async(event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ blockButton: true })
        this.setState({
            [name]: value
        })
     
    
    }

    register = () => () => {
        if (this.validateFields()) {
            this.register();
        }
    }

    register = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state.empleado)

        })
        const data = await res.json()

        console.log(data)

    }
    


    handleInputBlur(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let error = { ...this.state.error };
        error = this.setErrorField(error, name, false, '');
        if (error[name].required && (value === '' || value === 0)) {
            error = this.setErrorField(error, name, true, 'Campo obligatirio');
        } else {
            if (name === 'email') {
                if (!this.validEmail(value)) {
                    error = this.setErrorField(error, name, true, 'Email incorrecto');
                }
            }
            if (name === 'celular') {
                if (!this.validCelular(value)) {
                    error = this.setErrorField(error, name, true, 'El celular esta incorrecto');
                }
            }
        }

        this.setState({ error })

    }

    setErrorField(error, name, status, message) {
        error[name].error = status;
        error[name].text = message;
        return error;
    }
    

    validateFields() {
        let validation = true;
        let error = { ...this.state.error };

        if (this.state.name === '') {
            ;
            error.name.error = true;
            error.name.text = 'Campo obligatorio';
            validation = false;
        }

        if (!this.validEmail(this.state.email)) {
            error.email.error = true;
            error.email.text = 'Email incorrecto';
            validation = false;
        }
        if (!this.validCelular(this.state.celular)) {
            error.celular.error = true;
            error.celular.text = 'El celular solo debe tener 10 digitos ';
            validation = false;
        }

        if (!this.validDni(this.state.cedula)) {
            error.dni.error = true;
            error.dni.text = 'El campo no puede tener mas de 13 digitos';
            validation = false;
        }


        if (this.state.password.length < 6) {
            error.password.error = true;
            error.password.text = 'La contraseña debe tener mas de 6 caracteres';
            validation = false;
        }

        if (!validation) {
            this.setState({ error })
        } else {
            this.setState({ error })
        }
        return validation;
    }
    
  
    async register (e) {
        e.preventDefault();
        
        const res = await fetch('http://localhost:4000/tasks', {
            method: 'POST',
            body: JSON.stringify(this.state.empleado)

        })
        const data = await res.json()

        console.log(data)

    }

    validEmail(emailValue) {
        let result = false;
        let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (reg.test(emailValue)) {
            result = true;
        }
        return result;
    }

    validCelular(celularValue) {
        let error = { ...this.state.error };
        let result = false;
        let reg = /^([0-9]+){9}$/i;
        if (celularValue.length == 9) {
            if (reg.test(celularValue)) {
                if(celularValue.startsWith(9)){
                    result = true;
                } else {
                    error.celular.text = 'El celular debe empezar con el número 9';
                }
               
            }
        } else {
            error.celular.text = 'celular incorrecto';

        }

        return result;
    }



    render() {
        return (
            <Container>

                <Card className='register-div' sx={{ mt: 5 }} style={{ backgroundColor: '#b0d6f9' }}>
                    <CardHeader title='Ingrese sus datos:' />
                    <CardContent>

                        <TextField
                            name='cedula'
                            label='Cédula'
                            value={this.state.cedula ? this.state.cedula : ""}
                            error={this.state.error.cedula.error}
                            helperText={this.state.error.cedula.error ? this.state.error.cedula.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.cedula.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />
                        <TextField
                            name='nombres'
                            label='Nombres'
                            value={this.state.nombres ? this.state.nombres : ""}
                            error={this.state.error.nombres.error}
                            helperText={this.state.error.nombres.error ? this.state.error.nombres.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.nombres.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />
                        <TextField
                            name='apellidos'
                            label='Apellidos'
                            value={this.state.apellidos ? this.state.apellidos : ""}
                            error={this.state.error.apellidos.error}
                            helperText={this.state.error.apellidos.error ? this.state.error.apellidos.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.apellidos.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />

                        <TextField
                            name='email'
                            label='Email'
                            value={this.state.email ? this.state.email : ""}
                            error={this.state.error.email.error}
                            helperText={this.state.error.email.error ? this.state.error.email.text : ''}
                            fullWidth
                            margin="normal"
                            required={this.state.error.email.required}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}


                        />

                        <div style={{ marginTop: 20, textAlign: 'center' }}>
                            <ColorButton style={{ width: '20%', marginRight: 10 }}
                                variant="contained"
                                onClick={(e) => this.register(e) }
                                


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
