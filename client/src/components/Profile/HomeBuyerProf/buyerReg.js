import React, { Component } from "react";


class BuyerReg extends Component {
  render() {
    return (
      <div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="text-center">
            <img src="https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg" class="avatar img-circle img-thumbnail" alt="avatar" />
            <h6>Upload a different photo...</h6>
            <input type="file" class="text-center center-block well well-sm" />
          </div>
        </div>

        <h1> Hello </h1>
        <form class="regForm">
          <p><label for="firstname"><b>First Name:   </b></label>
            <input type="text" name="firstname" placeholder="quinton" /> </p>

          <p><label for="lastname"><b>Last Name"   </b></label>
            <input type="text" name="lastname" placeholder="chilla" /> </p>
          <p><label for="email"><b>Email:   </b></label>
            <input type="text" name="email" placeholder="a@b.com" /> </p>
          <p><label for="username"><b>User Name:   </b></label>
            <input type="text" name="username" placeholder="quinchilla" /> </p>
          <p><label for="password"><b>Password:   </b></label>
            <input type="password" name="password" placeholder="AAbb1122!!" /> </p>
          <label for="password"><b>Confrim Password:   </b></label>
          <input type="password" name="password-confirm" placeholder="AAbb1122!!" />

          <div class="clearfix">
            <button type="button" class="updatebtn">Update</button>
            <button type="submit" class="cancelbtn">Cancel</button>
          </div>
        </form>
      </div>

      

    )
  }
}
export default BuyerReg;