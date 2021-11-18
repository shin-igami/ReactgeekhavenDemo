import React from 'react'

const Footer = () => {
  return (

    <footer class="text-center text-lg-start bg-dark text-muted" >
      <section class="">
        <div class="container text-center text-md-start mt-5">

          <div class="row mt-3">

            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 my-3">

              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>GeekHaven
              </h6>
              <p>
                Welcome to GeekHaven, the technical Society of IIIT Allahabad. Geekhaven comprises seven wings encompassing all major technical domains. We are a group of highly motivated individuals with an excellent tech background.
              </p>
            </div>
     
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 my-3">
              <h6 class="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i class="fas fa-home me-3"></i>IIIT Allahabd , Pryagraj</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                geekhaven@iiita.ac.in
              </p>
            </div>

          </div>

        </div>
      </section>



      <div class="text-center p-4 " style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}>
        © 2021 Copyright:
        <a class="text-reset fw-bold" target="_blank" href="https://geekhaven.iiita.ac.in/index.php">  GeekHaven</a>
      </div>

    </footer>

  )
}

export default Footer
