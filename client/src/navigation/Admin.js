import React, { Component } from 'react';
import { Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from '../../../src/screens/pages/Welcome';

import WrapperComponent from '../utils/WrapperComponent';

import RegistrarEmpleados from '../../../src/screens/pages/RegistrarEmpleados';



export default class Admin extends Component {

    constructor() {
        super();
        this.state = {
            menus: []
        }
    }

    render() {
        let heightBlock = window.screen.height - 60 - 144;
        return (
            <BrowserRouter>
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <div className='container-div' style={{ height: heightBlock }}>
                            <Routes>
                                <Route exact path="/" element={<WrapperComponent item={Welcome} />} />
                                <Route exact path="/registrarEmpleados" element={<WrapperComponent item={RegistrarEmpleados} />} />
                            </Routes>
                        </div>
                    </Grid>
                </Grid>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </BrowserRouter>
        )
    }
}
