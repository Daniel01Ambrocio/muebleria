import { useState } from "react";


const Registro_ent = () => {
    const [Fecha_entrada, setFecha_entrada] = useState();
    const [Fecha_salida, setFecha_salida] = useState();
    const [IdProducto, setIdProducto] = useState();
    const [message, setMessage] = useState('');
    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null;

    //  usar la información del usuario en esta página
    console.log(user2.puesto); // Imprime el nombre del usuario

    const handleAdd = () => {
        console.log(Fecha_entrada, Fecha_salida, IdProducto)

        var formdata = new FormData();
        formdata.append("Fecha_entrada", Fecha_entrada);
        formdata.append("Fecha_salida", Fecha_salida);
        formdata.append("IdProducto", IdProducto);

        var requestOptions = {
            mode: 'no-cors',
            method: 'POST',
            header: {
                'Content-Type': 'application/json; charset:UTF-8'
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/dwi-9a/index.php/Api/Entrada_salida/", requestOptions)
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
            <div className="content-header ">
                <div className="content">
                    <div className="container ">
                        <div className="row  justify-content-center">
                            <div className='col-xs-10 col-md-10 col-lg-7 '>
                                <div className='card card-primary '>
                                    <div className='card bg-dark text-white'>
                                        <h3 className='card-text'>

                                            Registro de entradas y salidas
                                        </h3>
                                    </div>
                                    <div className='card-body'>

                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Fecha de Entrada</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='datetime-local' name=''
                                                    value={Fecha_entrada}
                                                    onChange={event => setFecha_entrada(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Fecha de Salida</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='datetime-local'
                                                    name='' id=''
                                                    value={Fecha_salida}
                                                    onChange={event => setFecha_salida(event.target.value)}
                                                    className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row '>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>ID Producto</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='number' name='' id=''
                                                    value={IdProducto}
                                                    onChange={event => setIdProducto(event.target.value)}
                                                    min="0" className='form-control' placeholder='Introduzca...' />
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

export default Registro_ent;