import React, {Component} from "react";
import './Footer.css'

export default class Footer extends Component {
  render (){
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Aries & Friends
    </footer>
  );
}
};
