import { useState } from "react";

const Editar_cat = () => {
    const [data, setData] = useState({});
    const [formData, setFormData] = useState({});
    const [searchId, setSearchId] = useState('');
    const [message, setMessage] = useState('');
    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null;

    //  usar la información del usuario en esta página
    console.log(user2.puesto); // Imprime el nombre del usuario


    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Categorias/${searchId}`);
            const data = await response.json();
            setData(data);
            setFormData(data);
        } catch (error) {
            setTimeout(() => {
                setMessage('Error');
            }, 1000);
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            await fetch(`http://localhost/dwi-9a/index.php/Api/Categorias/${searchId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            setTimeout(() => {
                setMessage('Actualizacion exitosa');
            }, 1000);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <>
            <div className="content-wrapper ">
                <div className="content-header">
                </div>
                <div className="content ">
                    <div className="container ">
                        <div className='row '>
                            <div className=' col-xs-12 col-sm-12 col-md-11 col-lg-11'>
                                <div className='card card-primary'>
                                    <div className='row  justify-content-center'>
                                        <input type="num" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                                        <button className='btn btn-sm bg-blue col-lg-2 offset-md-1' onClick={handleSearch}>Id de la Categoria a editar</button>
                                    </div>
                                    {message && <div>{message}</div>}

                                    <div>
                                        {data.IdCategoria && (
                                            <form>

                                                <label className="col">
                                                    Tipo:
                                                    <input
                                                        type="text"
                                                        name="Tipo"
                                                        value={formData.Tipo || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Nombre:
                                                    <input
                                                        type="text"
                                                        name="Nombre"
                                                        value={formData.Nombre || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Status:
                                                    <input
                                                        type="text"
                                                        name="status"
                                                        value={formData.Status || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Fecha Alta:
                                                    <input
                                                        type="datetime-local"
                                                        name="Fecha_alta"
                                                        value={formData.Fecha_alta || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <button className='btn btn-sm bg-blue col-lg-2 offset-md-1' onClick={handleSubmit}>Guardar Cambios</button>

                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div >

                        </div >

                    </div >
                </div >
            </div >
        </>
    );
};
export default Editar_cat;
