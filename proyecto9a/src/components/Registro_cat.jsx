import { useState } from "react";

const Registro_cat = () => {
    const [Tipo, setTipo] = useState();
    const [Fecha_alta, setFecha_alta] = useState();
    const [Nombre, setNombre] = useState();
    const [Status, setStatus] = useState();
    const [message, setMessage] = useState('');
    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null;

    //  usar la información del usuario en esta página
    console.log(user2.puesto); // Imprime el nombre del usuario

    const handleAdd = () => {
        console.log(Tipo, Fecha_alta)

        var formdata = new FormData();
        formdata.append("Tipo", Tipo);
        formdata.append("Nombre", Nombre);
        formdata.append("Status", Status);
        formdata.append("Fecha_alta", Fecha_alta);

        var requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            header: {
                'Content-Type': 'application/json; charset:UTF-8'
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/dwi-9a/index.php/Api/Categorias/", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                setTimeout(() => {
                    setMessage('Registro exitoso');
                }, 1000);
            })
            .catch(error => {
                console.log('error', error);
                setTimeout(() => {
                    setMessage('Error');
                }, 1000);
            });
    }
    return (
        <>
            <div className="content-header">
                <div className="content">
                    <div className="container">
                        <div className="row  justify-content-center">
                            <div className='col-xs-10 col-md-10 col-lg-7 '>
                                <div className='card card-primary'>
                                    <div className='card bg-dark text-white'>
                                        <h4 className='card-text'>
                                            Registro de Categorias
                                        </h4>
                                    </div>
                                    <div className='card-body'>
                                        <div className='row '>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Tipo</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name='' id=''
                                                    value={Tipo}
                                                    onChange={event => setTipo(event.target.value)}
                                                    min="0" className='form-control' placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row '>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Nombre</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name='' id=''
                                                    value={Nombre}
                                                    onChange={event => setNombre(event.target.value)}
                                                    min="0" className='form-control' placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row '>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Status</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name='' id=''
                                                    value={Status}
                                                    onChange={event => setStatus(event.target.value)}
                                                    min="0" className='form-control' placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Fecha de Alta</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='datetime-local'
                                                    name='' id=''
                                                    value={Fecha_alta}
                                                    onChange={event => setFecha_alta(event.target.value)}
                                                    className='form-control' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row  justify-content-center'>
                                        <button className='btn btn-dark ' onClick={() => handleAdd()}>Registrar</button>

                                    </div>
                                    {message && <div className="row  justify-content-center">{message}</div>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro_cat;