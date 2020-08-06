import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="navbarContainer">
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">HairStyledotCom</a>
            <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span
              class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="nav navbar-nav">
                <li class="nav-item" role="presentation"><a class="nav-link" href="#">Link</a></li>
                <li class="nav-item dropdown"><a class="dropdown-toggle nav-link" data-toggle="dropdown"
                  aria-expanded="false" href="#">Dropdown </a>
                  <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation"
                    href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second
                                    Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                </li>
              </ul>
              <form class="form-inline mr-auto" target="_self">
                <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input
                  class="form-control search-field" type="search" id="search-field" name="search">

                </input>
                </div>
              </form><span class="navbar-text"> <a class="login" href="#">Log In</a></span><a
                class="btn btn-light action-button" role="button" href="#">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>

      <div class="container">
        <div class="row">
          {/* 
            <!-- left side menu --> */}
          <div class="col-md-4 order-md-1 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span>User Dashboard</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div class="col">
                  <div class="card-body text-center"><img class="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" width="160" height="160"></img>
                  </div>
                  <div>User Name</div>
                  <div>User Info</div>
                </div>

              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">My Appointments</h6>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">My Reveiws</h6>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Setting</h6>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div>
                  <h6 class="my-0">Privacy Policy</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* <!-- right contetns -->

            <!-- user setting --> */}
        <div class="col-md-8 order-md-2">
          <h4 class="mb-3">User Setting</h4>
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""></input>
                <div class="invalid-feedback">
                  Valid first name is required.
                    </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""></input>
                <div class="invalid-feedback">
                  Valid last name is required.
                    </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="username">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input type="text" class="form-control" id="username" placeholder="Username" required=""></input>
                <div class="invalid-feedback" style={{ width: "100%" }}>
                  Your username is required.
                    </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span>(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"></input>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
                  </div>
            </div>

            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required=""></input>
              <div class="invalid-feedback">
                Please enter your shipping address.
                  </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span>(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"></input>
            </div>

            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                    </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                    </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" required=""></input>
                <div class="invalid-feedback">
                  Zip code required.
                    </div>
              </div>
            </div>
          </form>


          <hr class="mb-4"></hr>

          {/* 
               <!-- My Appoinment --> */}
          <div class="card" id="reservationList">
            <h4 class="mb-3">Appointments List</h4>


            <div class="card-body">
              <div class="row mt-4 ml-0.8 mr-0.5 mb-5">
                <div class="card-body col-3 d-none d-lg-block">
                  <img class="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt=""></img>
                </div>
                <div class="card resultBox col-md-8">
                  <div class="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col">
                      <h3 class="mb-0" id="bookTitle">Customer Name</h3>
                      <p class="mb-auto" id="bookDescription">Customer / reservation Information</p>
                      <div class="footer d-flex justify-content-end">
                        <button class="btn btn-primary m-2">Accept</button>
                        <button class="btn btn-primary m-2">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row mt-4 ml-0.8 mr-0.5 mb-5">
                <div class="card-body col-3 d-none d-lg-block">
                  <img class="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt=""></img>
                </div>
                <div class="card resultBox col-md-8">
                  <div class="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col">
                      <h3 class="mb-0" id="bookTitle">Customer Name</h3>
                      <p class="mb-auto" id="bookDescription">Customer / reservation Information</p>
                      <div class="footer d-flex justify-content-end">
                        <button class="btn btn-primary m-2">Accept</button>
                        <button class="btn btn-primary m-2">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <hr class="mb-4"></hr>

          {/* <!-- My Review --> */}
          <div class="card" id="reservationList">
            <h4 class="mb-3">Review List</h4>


            <div class="card-body">
              <div class="row mt-4 ml-0.8 mr-0.5 mb-5">
                <div class="card-body col-3 d-none d-lg-block">
                  <img class="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt=""></img>
                </div>
                <div class="card resultBox col-md-8">
                  <div class="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col">
                      <h3 class="mb-0" id="bookTitle">Customer Name</h3>
                      <p class="mb-auto" id="bookDescription">Customer / reservation Information</p>
                      <div class="footer d-flex justify-content-end">
                        <button class="btn btn-primary m-2">Accept</button>
                        <button class="btn btn-primary m-2">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row mt-4 ml-0.8 mr-0.5 mb-5">
                <div class="card-body col-3 d-none d-lg-block">
                  <img class="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt=""></img>
                </div>
                <div class="card resultBox col-md-8">
                  <div class="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col">
                      <h3 class="mb-0" id="bookTitle">Customer Name</h3>
                      <p class="mb-auto" id="bookDescription">Customer / reservation Information</p>
                      <div class="footer d-flex justify-content-end">
                        <button class="btn btn-primary m-2">Accept</button>
                        <button class="btn btn-primary m-2">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>












        </div>
      </div>
    </div>

  );
}

export default App;
