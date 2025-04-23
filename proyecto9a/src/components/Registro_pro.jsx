import { useState } from "react";

const Registro_pro = () => {
    const [IdCategoria, setIdCategoria] = useState();
    const [Marca, setMarca] = useState();
    const [Nombre, setNombre] = useState();
    const [Piezas, setPiezas] = useState();
    const [Precio, setPrecio] = useState();
    const [Fecha_registro, setFecha_registro] = useState();
    const [Estado, setEstado] = useState();
    const [Foto, setFoto] = useState();
    const [Color, setColor] = useState();
    const [message, setMessage] = useState('');
    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null;

    //  usar la información del usuario en esta página
    console.log(user2.puesto); // Imprime el nombre del usuario
    const handleAdd = () => {
        console.log(IdCategoria, Marca, Nombre, Foto, Piezas, Color, Precio, Fecha_registro, Estado);

        var formdata = new FormData();
        formdata.append("IdCategoria", IdCategoria);
        formdata.append("Marca", Marca);
        formdata.append("Nombre", Nombre);
        formdata.append("Foto", Foto);
        formdata.append("Piezas", Piezas);
        formdata.append("Color", Color);
        formdata.append("Precio", Precio);
        formdata.append("Fecha_registro", Fecha_registro);
        formdata.append("Status", Estado);

        var requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://localhost/dwi-9a/index.php/Api/Productos/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setTimeout(() => {
                    setMessage('Registro exitoso');
                }, 1000);
            })
            .catch((error) => {
                console.log('error', error);
                setTimeout(() => {
                    setMessage('Error');
                }, 1000);
            });
    }

    //codigo para cargar una imagen
    const handleFileChange = (p) => {
        const file = p.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // termina codigo


    return (
        <>
            <div className="content-header">
                <div className="content">
                    <div className="container">
                        <div className="row  justify-content-center">
                            <div className='col-xs-10 col-md-10 col-lg-7 '>
                                <div className='card card-primary'>
                                    <div className='card bg-dark text-white'>
                                        <h3 className='card-text'>

                                            Registro de productos
                                        </h3>
                                    </div>
                                    <div className='card-body'>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>IdCategoria</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='number' name='' min="0"
                                                    value={IdCategoria}
                                                    onChange={event => setIdCategoria(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Marca</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name=''
                                                    value={Marca}
                                                    onChange={event => setMarca(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Nombre</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name=''
                                                    value={Nombre}
                                                    onChange={event => setNombre(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Foto</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input
                                                    type="file"
                                                    accept=".webp"
                                                    name="Foto"
                                                    onChange={handleFileChange} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Piezas</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='number' name='' min="0"
                                                    value={Piezas}
                                                    onChange={event => setPiezas(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Color</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name=''
                                                    value={Color}
                                                    onChange={event => setColor(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Precio</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='number' name='' min="0"
                                                    value={Precio}
                                                    onChange={event => setPrecio(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Fecha Registro</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='datetime-local'
                                                    name='' id=''
                                                    value={Fecha_registro}
                                                    onChange={event => setFecha_registro(event.target.value)}
                                                    className='form-control' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xs-6 col-md-8 col-lg-4'>
                                                <h6>Estado</h6>
                                            </div>
                                            <div className='col-xs-6 col-md-8 col-lg-8'>
                                                <input type='text' name=''
                                                    value={Estado}
                                                    onChange={event => setEstado(event.target.value)}
                                                    className='form-control'
                                                    placeholder='Introduzca...' />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='row  justify-content-center'>
                                        <button className='btn btn-dark' onClick={() => handleAdd()}>Registrar</button>
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

export default Registro_pro;