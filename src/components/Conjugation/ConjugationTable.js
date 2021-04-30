import React, { Component } from 'react';



class ConjugationTable extends Component {
  render() {
    return (
        <table>
          <thead>
            <tr>
              <td colSpan="2" style={{textAlign:"center"}}>{this.props.tiempo}</td>
            </tr>
          </thead>
         
          <tbody>
            <tr>
              <td>
                "Yo"
              </td>
              <td>
                {this.props.yo}
              </td>
            </tr>
            <tr>
              <td>
                "Tu"
              </td>
              <td>
                {this.props.tu}
              </td>
            </tr>
            <tr>
              <td>
                "el, ella, usted"
              </td>
              <td>
                {this.props.el}
              </td>
            </tr>
            <tr>
              <td>
                "Nosotros"
              </td>
              <td>
                {this.props.ns}
              </td>
            </tr>
            <tr>
              <td>
                "Vosotros"
              </td>
              <td>
                {this.props.vs}
              </td>
            </tr>
            <tr>
              <td>
                "Ellos, Ellas, Ustedes"
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