import React, { useState } from 'react';


const editar_pro = () => {
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
            const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Productos/${searchId}`);
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

    /// CODIGO PARA CARGAR IMAGEN
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prevData) => ({
                ...prevData,
                Foto: reader.result,
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    // TERMINA CODIGO
    const handleSubmit = async () => {
        try {
            await fetch(`http://localhost/dwi-9a/index.php/Api/Productos/${searchId}`, {
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
                                        <button className='btn btn-sm bg-blue col-lg-2 offset-md-1' onClick={handleSearch}>Id del Producto a editar</button>
                                    </div>
                                    {message && <div>{message}</div>}

                                    <div>
                                        {data.IdProducto && (
                                            <form>
                                                <label className="col">
                                                    IdCategoria:
                                                    <input
                                                        type="num" min="0"
                                                        name="IdCategoria"
                                                        value={formData.IdCategoria || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Marca:
                                                    <input
                                                        type="text"
                                                        name="Marca"
                                                        value={formData.Marca || ''}
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
                                                    Foto:
                                                    <input type="file" accept="image/*" onChange={handleFileChange} />
                                                    {formData.Foto && <img src={formData.Foto} alt="Producto" width="500px" />}
                                                </label>
                                                <label className="col">
                                                    Piezas:
                                                    <input
                                                        type="text"
                                                        name="Piezas"
                                                        value={formData.Piezas || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Color:
                                                    <input
                                                        type="text"
                                                        name="Color"
                                                        value={formData.Color || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Precio:
                                                    <input
                                                        type="num"
                                                        name="Precio"
                                                        value={formData.Precio || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Fecha_registro:
                                                    <input
                                                        type="datetime-local"
                                                        name="Fecha_registro"
                                                        value={formData.Fecha_registro || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <label className="col">
                                                    Status:
                                                    <input
                                                        type="num"
                                                        name="Status"
                                                        value={formData.Status || ''}
                                                        onChange={handleInputChange}
                                                    />
                                                </label>
                                                <button className='btn btn-sm bg-blue col-lg-2 offset-md-1' onClick={handleSubmit}>Guardar Cambios</button>
                                            </form>
                                        )}
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
export default editar_pro;