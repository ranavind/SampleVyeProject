﻿var sy = sy || { components: [], stateModules: [] };
((sy) => {
  sy.components.push({
    id: "newProductHeader",
    element: "sy-home-product-header",
    component: {
      name: "newProductHeader",

      computed: {

      },
      methods: {

      },
      template: `
      <header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-yellow py-1" aria-label="Main navigation">
        <div class="container">
            <a class="navbar-brand" href="/next-level-6210#/customise/87507323"> <img src="/images/logo.png" /></a>
            <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="navbar-collapse offcanvas-collapse mobile" id="navbarsExampleDefault">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/next-level-6210#/customise/87507323">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/AboutUs">About Us</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="/Login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Register">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Contactus">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex justify-content-end icons">
               
                <a href="#" class="nav-link text-center">
                    <span class="d-block mx-auto mb-1"><i class="fas fa-shopping-cart"></i></span>
                    <span class="text">CART</span>
                </a>

            </div>
        </div>
    </nav>
</header>
      `,
    },
  });
})(sy);