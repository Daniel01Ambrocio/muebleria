import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost/dwi-9a/index.php/Api/Usuarios');
            const data = await response.json();

            // Verificar si las credenciales coinciden con algún registro en la API.
            const user = data.find((user) => user.Email === email && user.Password === password);

            if (user) {
                //inicio de sesión exitoso
                const user2 = {
                    nombre: user.Nombre,
                    puesto: user.Puesto
                };
                console.log(user2);

                // Guardar el objeto del usuario en la sessionStorage
                sessionStorage.setItem("user", JSON.stringify(user2));
                history('/bie');
            } else {
                // Mostrar un mensaje de error al usuario en caso de inicio de sesión fallido.
                setTimeout(() => {
                    setMessage('Inicio de sesión fallido. Comprueba tu email y contraseña');
                }, 1000);
            }
        } catch (error) {
            setTimeout(() => {
                setMessage('Error al iniciar sesión');
            }, 1000);
            console.error('Error al iniciar sesión:', error);
            // Manejar errores o mostrar mensajes de error al usuario.
        }
    };

    return (
        <>
            <div className="content-header">
                <div className="content">
                    <div className="container">
                        <div className='row  justify-content-center'>
                            <div className='col-xs-12 col-md-12 col-lg-5'>
                                <div className='card card-primary'>
                                    <div className='card bg-dark text-white'>
                                        <h4 className='card-text'>
                                            <i className="fas fa-user-circle mr-2"></i>
                                            Iniciar sesion
                                        </h4>
                                    </div>
                                    <div className='card-body'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className='form-control'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className='form-group'>
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Contraseña"
                                                value={password}
                                                className='form-control'
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='row  justify-content-center'>
                                        <button className='btn btn-dark' onClick={handleLogin}>Iniciar</button>

                                    </div>
                                    {message && <div className="row  justify-content-center">{message}</div>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;