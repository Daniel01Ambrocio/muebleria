import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function Consulta_usu() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null;

    //  usar la información del usuario en esta página
    console.log(user2.puesto); // Imprime el nombre del usuario
    //poner visible los botones de eliminar y editar solo si es administrador
    const esAdmin = user2.puesto === 'Administrador'; // Asegúrate de que coincida con el rol "administrador"


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Usuarios');
                if (!response.ok) {
                    throw new Error('La solicitud no pudo ser completada.');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    //ELIMINAR
    const handleDelete = async (IdUsu) => {
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Usuarios/${IdUsu}`, {
                method: 'DELETE', redirect: 'follow'
            });
            console.log(IdUsuarios);
            if (!response.ok) {
                throw new Error('La solicitud de eliminación no pudo ser completada.');
            }

            setData((prevData) => prevData.filter((usuario) => usuario.IdUsu !== IdUsuarios));
        } catch (error) {
            console.error(error.message);
        }
    };

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="content-wrapper ">
                <div className="content-header">
                </div>
                <div className="content ">
                    <div className="container ">
                        <div className='row justify-content-center'>
                            <div className=' col-xs-8 col-sm-8 col-md-10 col-lg-12'>
                                <div className='card card-primary'>
                                    <div className='card-header'>
                                        <h4 className='card-title'>
                                            Consulta de usuarios

                                        </h4>
                                    </div>
                                    <div >
                                        <table className='table text-center'>
                                            <thead>
                                                <tr >
                                                    <th >IdUsuarios</th>
                                                    <th>Nombre</th>
                                                    <th>Apellido paterno</th>
                                                    <th>Apellido materno</th>
                                                    <th>Puesto</th>
                                                    <th>Foto</th>
                                                    <th>Password</th>
                                                    <th>Fecha</th>
                                                    <th >Email</th>
                                                    <th className="col-lg-4">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((usuario) => (
                                                    <tr key={usuario.IdUsuarios}>
                                                        <td>{usuario.IdUsuarios}</td>
                                                        <td >{usuario.Nombre}</td>
                                                        <td >{usuario.Apellido_pat}</td>
                                                        <td >{usuario.Apellido_mat}</td>
                                                        <td >{usuario.Puesto}</td>
                                                        <td> <img src={usuario.Foto} width="50" /> </td>
                                                        <td >{usuario.Password}</td>
                                                        <td >{usuario.Fecha_registro}</td>
                                                        <td >{usuario.Email}</td>
                                                        <td >
                                                            <Link to='/ediusu'>
                                                                {esAdmin && <button className='btn btn-sm bg-blue offset-md-1'>Editar</button>}
                                                            </Link>
                                                            {esAdmin && <button className='btn btn-sm bg-danger offset-md-1' onClick={() => handleDelete(usuario.IdUsuarios)}>Borrar</button>}
                                                            
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Consulta_usu;