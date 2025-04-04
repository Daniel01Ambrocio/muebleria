import { useState } from "react";




const Registro_usu = () => {
  const [Fecha_registro, setFecha_registro] = useState();
  const [Nombre, setNombre] = useState();
  const [Apellido_pat, setApellido_pat] = useState();
  const [Apellido_mat, setApellido_mat] = useState(); 
  const [Password, setPassword] = useState();
  const [Email, setEmail] = useState();
  const [message, setMessage] = useState('');
  const [Foto, setFoto] = useState();
  const roles = ['Administrador', 'Gerencia', 'Jefe de Almacen', 'Operador de Almacen'];
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  // Obtener el objeto del usuario desde la sessionStorage
  const storedUser = sessionStorage.getItem("user");
  const user2 = storedUser ? JSON.parse(storedUser) : null;

  //  usar la información del usuario en esta página
  console.log(user2.puesto); // Imprime el nombre del usuario
  const handleAdd = () => {
    // ... Tu código para obtener los datos del formulario ...

    var formdata = new FormData();
    formdata.append('Nombre', Nombre);
    formdata.append('Apellido_pat', Apellido_pat);
    formdata.append('Apellido_mat', Apellido_mat);
    formdata.append('Puesto', selectedRole);
    formdata.append('Foto', Foto); // Agrega la imagen al formulario también
    formdata.append('Password', Password);
    formdata.append('Fecha_registro', Fecha_registro);
    formdata.append('Email', Email);


    var requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://localhost/dwi-9a/index.php/Api/Usuarios/', requestOptions)
      .then((response) => response.text())
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
  };
  //codigo para cargar una imagen
  const handleFileChange = (e) => {
    const file = e.target.files[0];
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
      <div className="content-header ">
        <div className="content">
          <div className="container ">
            <div className="row  justify-content-center">
              <div className='col-xs-10 col-md-10 col-lg-7  '>

                <div className='card card-primary '>
                  <div className='card bg-dark text-white'>
                    <h3 className='card-text'>

                      Registro de Usuario
                    </h3>
                  </div>
                  <div className='card-body'>
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
                        <h6>Apellido paterno</h6>
                      </div>
                      <div className='col-xs-6 col-md-8 col-lg-8'>
                        <input type='text' name=''
                          value={Apellido_pat}
                          onChange={event => setApellido_pat(event.target.value)}
                          className='form-control'
                          placeholder='Introduzca...' />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-6 col-md-8 col-lg-4'>
                        <h6>Apellido materno</h6>
                      </div>
                      <div className='col-xs-6 col-md-8 col-lg-8'>
                        <input type='text' name=''
                          value={Apellido_mat}
                          onChange={event => setApellido_mat(event.target.value)}
                          className='form-control'
                          placeholder='Introduzca...' />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-6 col-md-8 col-lg-4'>
                        <h6> Puesto</h6>
                      </div>
                      <div className='col-xs-6 col-md-8 col-lg-8'>
                         
                        <select id="roles" value={selectedRole} onChange={handleRoleChange} className='form-control'>
                          <option value="">-- Seleccione un rol --</option>
                          {roles.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select> 
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xs-6 col-md-8 col-lg-4'>
                        <h6>Password</h6>
                      </div>
                      <div className='col-xs-6 col-md-8 col-lg-8'>
                        <input type='password' name=''
                          value={Password}
                          onChange={event => setPassword(event.target.value)}
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
                        <h6>Fecha_registro </h6>
                      </div>
                      <div className='col-xs-6 col-md-8 col-lg-8'>
                        <input type='datetime-local'
                          name='' id=''
                          value={Fecha_registro}
                          onChange={event => setFecha_registro(event.target.value)}
                          className='form-control' />
                      </div>
                    </div>
                    <div className='row '>
                      <div className='col-xs-6 col-md-8 col-lg-4'>
                        <h6>Email</h6>
                      </div>
                      <div className='col-xs-6 col-md-8 col-lg-8'>
                        <input type="email" name='' id=''
                          value={Email}
                          onChange={event => setEmail(event.target.value)}
                          min="0" className='form-control' placeholder='Introduzca...' />
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

export default Registro_usu;
