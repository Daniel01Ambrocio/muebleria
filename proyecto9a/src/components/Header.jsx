 
import { Link } from 'react-router-dom';


const Header = () => {
    // Obtener el objeto del usuario desde la sessionStorage
    const storedUser = sessionStorage.getItem("user");
    const user2 = storedUser ? JSON.parse(storedUser) : null; 

    //visualizar paginas segun el rol
    const esAdmin = user2.puesto === 'Administrador';// Asegúrate de que coincida con el rol "administrador"
    const esGerencia = user2.puesto === 'Gerencia';// Asegúrate de que coincida con el rol "gerencia"
    const esJefeAlmacen = user2.puesto === 'Jefe de Almacen';
    const esOperadorAlmacen = user2.puesto === 'Operador de Almacen'; 

    //eliminar el objeto de sesion
    const Eliminasesion=()=>{
        sessionStorage.removeItem("user");

    }
    return (
        <>

            <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div className="container  col-xs-2 col-sm-2 col-md-2 col-lg-3">

                    <div className='row justify-content-center'>
                        <div className="" id="navbarCollapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/bie" >Inicio</Link>

                                </li>



                                {esAdmin && <li className="nav-item ">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categoria
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/concat">Consulta</Link>
                                            <Link className="dropdown-item" to="/regcat">Registro</Link>
                                        </div>
                                    </div>
                                </li>}
                                {esAdmin && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Producto
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conpro">Consulta</Link>
                                            <Link className="dropdown-item" to="/refpro">Registro</Link>
                                        </div>
                                    </div>
                                </li>}
                                {esAdmin && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Entrada - salida
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conent">Consulta</Link>
                                            <Link className="dropdown-item" to="/regent">Registro</Link>
                                        </div>
                                    </div>
                                </li>}
                                {esAdmin && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Usuario
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conusu">Consulta</Link>
                                            <Link className="dropdown-item" to="/regusu">Registro</Link>
                                        </div>
                                    </div>
                                </li>}



                                {esGerencia && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categoria
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/concat">Consulta</Link>
                                          </div>
                                    </div>
                                </li>}
                                {esGerencia && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Producto
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conpro">Consulta</Link>
                                         </div>
                                    </div>
                                </li>}
                                {esGerencia && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Entrada - salida
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conent">Consulta</Link>
                                          </div>
                                    </div>
                                </li>}






                                {esOperadorAlmacen && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categoria
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/concat">Consulta</Link>
                                            <Link className="dropdown-item" to="/regcat">Registro</Link>
                                        </div>
                                    </div>
                                </li>}
                                {esOperadorAlmacen && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Producto
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conpro">Consulta</Link>
                                            <Link className="dropdown-item" to="/refpro">Registro</Link>
                                        </div>
                                    </div>
                                </li>}


                                {esJefeAlmacen && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categoria
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/concat">Consulta</Link>
                                            <Link className="dropdown-item" to="/regcat">Registro</Link>
                                        </div>
                                    </div>
                                </li>}
                                {esJefeAlmacen && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Producto
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conpro">Consulta</Link>
                                            <Link className="dropdown-item" to="/refpro">Registro</Link>
                                        </div>
                                    </div>
                                </li>}
                                {esJefeAlmacen && <li className="nav-item">
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Entrada - salida
                                        </button>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/conent">Consulta</Link>
                                            <Link className="dropdown-item" to="/regent">Registro</Link>
                                        </div>
                                    </div>
                                </li>}



                                <li className="nav-item">
                                    <Link className="nav-link" to="/log" onClick={Eliminasesion}>Salir</Link>

                                </li>

                            </ul>
                        </div>

                    </div>


                </div>
            </nav>
        </>
    )
}

export default Header;