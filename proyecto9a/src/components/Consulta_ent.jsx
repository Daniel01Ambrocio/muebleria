import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';  


function Consulta_ent() {
    const [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);  

    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null;

      
    console.log(user2.puesto ); // Imprime el nombre del usuario 
    //poner visible los botones de eliminar y editar solo si es administrador
    const esAdmin = user2.puesto === 'Administrador'; // Asegúrate de que coincida con el rol "administrador"


    //operaciones para consultar todo
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/dwi-9a/index.php/Api/Entrada_salida');
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
    //operacion para eliminar un campo
    const handleDelete = async (idEntrada) => {
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Entrada_salida/${idEntrada}`, {
                method: 'DELETE', redirect: 'follow'
            });
            console.log(idEntrada);
            if (!response.ok) {
                throw new Error('La solicitud de eliminación no pudo ser completada.');
            }

            // Eliminar el registro eliminado del estado
            setData((prevData) => prevData.filter((entradas) => entradas.IdEntrada !== idEntrada));
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
    //mostrar grafica
    
   

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
                                            Consulta de Entradas/Salidas
                                        </h4>
                                    </div>
                                    <div >
                                        <table className="table text-center" >
                                            <thead>
                                                <tr>
                                                    <th >ID Entrada</th>
                                                    <th >Fecha de Entrada</th>
                                                    <th >Fecha de Salida</th>
                                                    <th >ID Producto</th>
                                                    <th className="col-2">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((entradas) => (
                                                    <tr key={entradas.IdEntrada}>
                                                        <td>{entradas.IdEntrada}</td>
                                                        <td >{entradas.Fecha_entrada}</td>
                                                        <td >{entradas.Fecha_salida}</td>
                                                        <td >{entradas.IdProducto}</td>
                                                        <td >
                                                            <Link to='/edient'>
                                                                {esAdmin && <button className='btn btn-sm bg-blue offset-md-1'>Editar</button>}
                                                            </Link>
                                                            {esAdmin && <button className='btn btn-sm bg-danger  offset-md-1' onClick={() => handleDelete(entradas.IdEntrada)}>Borrar</button>}
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

export default Consulta_ent;