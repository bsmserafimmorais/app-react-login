import React, { useState } from "react";
import './App.css';
import { Link , BrowserRouter} from 'react-router-dom'

const App = () => {


    return (
        <div class="container">
            <h1>LOGIN</h1>
            <div class="row">
                <div class="col-12">
                    <div class="input-data">
                        <input  class="inputField" required></input>
                        <label class="input-label">Usuário</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="input-data">
                        <input type="password"  class="inputField" required></input>
                        <label class="input-label">Senha</label>
                    </div>
                </div>
            </div>
            <BrowserRouter>
            <div >
                <button class="button"><Link to="/header">Entrar</Link></button>
            </div>
            </BrowserRouter>


        </div>
    )
}

export default App