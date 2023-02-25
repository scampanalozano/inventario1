import React, { Component } from 'react';
import Registrar from '../screens/pages/Registrar'
import Welcome from '../../../src/screens/pages/Welcome';
import { Grid} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import WrapperComponent from '../utils/WrapperComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default class Guest extends Component {

    render() {
        let heightBlock = window.screen.height - 60 - 144;
        return (
            <BrowserRouter>
                <Grid container>
                  
                    <Grid item xs={12} md={12}>
                        <div className='container-div' style={{ height: heightBlock }}>
                            <Routes>
                                <Route exact path="/" element={<WrapperComponent item={Welcome} />} />
                                <Route exact path="/registar" element={<WrapperComponent item={Registrar} />} />
                            </Routes>
                        </div>
                    </Grid>
                </Grid>
                <ToastContainer
                    position="bottom-right"
                    autoClose={15000}
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