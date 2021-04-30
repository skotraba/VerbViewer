import React, { Component } from 'react';

//SCSS
import './Conjugation.scss';

class ConjugationTable extends Component {
  render() {
    return (
        <table className="ConTable">
          <thead>
            <tr className="ConTable__heading">
              <td colSpan="2" style={{textAlign:"center"}}>{this.props.tiempo}</td>
            </tr>
          </thead>
         
          <tbody>
            <tr>
              <td className="ConTable__bold">
                Yo
              </td>
              <td>
                {this.props.yo}
              </td>
            </tr>
            <tr>
              <td className="ConTable__bold">
                Tu
              </td>
              <td>
                {this.props.tu}
              </td>
            </tr>
            <tr>
              <td className="ConTable__bold">
                el, ella, usted
              </td>
              <td>
                {this.props.el}
              </td>
            </tr>
            <tr>
              <td className="ConTable__bold">
                Nosotros
              </td>
              <td>
                {this.props.ns}
              </td>
            </tr>
            <tr>
              <td className="ConTable__bold">
                Vosotros
              </td>
              <td>
                {this.props.vs}
              </td>
            </tr>
            <tr>
              <td className="ConTable__bold">
                Ellos, Ellas, Ustedes
              </td>
              <td>
                {this.props.ellos}
              </td>
            </tr>
          </tbody>
        </table>
     
    );
  }
}

export default ConjugationTable;