

const Login = () => {
  return (
    <>
          <div className="container text-center">
              <h1 className="display-4">BIENVENIDO</h1>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block mx-auto" style={{ width: '75%', height: '400px', objectFit: 'cover' }} src="src/components/img/1.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block mx-auto" style={{ width: '75%', height: '400px', objectFit: 'cover' }} src="src/components/img/2.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block mx-auto" style={{ width: '75%', height: '400px', objectFit: 'cover' }} src="src/components/img/3.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
    </>
  )
}

export default Login;