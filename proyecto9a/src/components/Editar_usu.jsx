import React, { useState } from 'react';


const Editar_usu = () => {
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
      const response = await fetch(`http://localhost/dwi-9a/index.php/Api/Usuarios/${searchId}`);
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
      await fetch(`http://localhost/dwi-9a/index.php/Api/Usuarios/${searchId}`, {
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
            <div className='row  justify-content-center'>
              <div className=' col-xs-12 col-sm-12 col-md-11 col-lg-11'>
                <div className='card card-primary'>
                  <div className='row  justify-content-center'>
                    <input type="num" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                    <button className='btn btn-sm bg-blue col-lg-2 offset-md-1' onClick={handleSearch}>Id del usuario a editar</button>
                  </div>
                  {message && <div>{message}</div>}

                  <div className='row  justify-content-center'>
                    {data.IdUsuarios && (
                      <form>
                        <label className="col">
                          Nombre
                          <input
                            type="num"
                            name="Nombre"
                            value={formData.Nombre || ''}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="col">
                          Apellido_pat:
                          <input
                            type="text"
                            name="Apellido_pat"
                            value={formData.Apellido_pat || ''}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="col">
                          Apellido_mat:
                          <input
                            type="text"
                            name="Apellido_mat"
                            value={formData.Apellido_mat || ''}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="col">
                          Puesto:
                          <input
                            type="text"
                            name="Puesto"
                            value={formData.Puesto || ''}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="col">
                          Foto:
                          <input type="file" accept="image/*" onChange={handleFileChange} />
                          {formData.Foto && <img src={formData.Foto} alt="Producto" width="500px" />}
                        </label>
                        <label className="col">
                          Password
                          <input
                            type="password"
                            name="Password"
                            value={formData.Password || ''}
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
                          Email:
                          <input
                            type="email"
                            name="Email"
                            value={formData.Email || ''}
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
export default Editar_usu;