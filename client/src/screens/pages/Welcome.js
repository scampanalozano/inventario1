import { CardHeader, Card, Grid, TextField, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import React, { Component } from 'react';
import '../../App.css';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Carousel from 'react-multi-carousel';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 2000, min: 800 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
        backgroundColor: grey[700],
    },
}));


export default class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            password: '',
            showPassword: ''

        }
    }


    handleClickShowPassword() {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    render() {
        return (

            <Card className="welcome">
                <CardHeader title='Bienvenido al Sistema de Inventario' style={{ textAlign: 'center', fontFamily: 'Cormorant Garamond' }} />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <div style={{ height: 170 }}>

                            <img src={"assets/IMAGEN2.webp"} className='container-image1' />

                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InputLabel htmlFor="usuario" style={{ fontWeight: 'bold' }}>Usuario</InputLabel>
                        <OutlinedInput
                            id="usuario"
                            name="usuario"
                            type='usuario'
                            value={this.state.usuario}
                            onChange={this.handleInputChange}
                            label="Usuario"
                            style={{ width: '30ch' }}

                        />

                        <Grid item xs={12} md={4}>
                            <InputLabel htmlFor="password" style={{ fontWeight: 'bold' }}>Contraseña</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                style={{ width: '30ch' }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Contraseña"
                            />
                            <Grid item xs={12} md={4}>

                                <div style={{ marginBottom: 70, paddingTop: 20 }}>
                                    <ColorButton style={{ width: '300%' }}
                                        variant="contained"
                                        disabled={this.state.blockButton}


                                    >Ingresar</ColorButton>
                                </div>

                            </Grid>


                        </Grid>



                    </Grid>

                </Grid>





            </Card>

        )
    }
}