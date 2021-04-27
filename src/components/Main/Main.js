import React, {Component} from 'react';

//Redux
import { connect } from 'react-redux';

//SCSS
import './Main.scss';

class Main extends Component {
  
 
  render() {
    return (
      <div className="Main">
        <h1>{this.props.verb.verb} - {this.props.verb.trad_en}</h1>
        <span className="Main__span">irregular</span>
        <table className="Main__table Main__table__one">
          <tr>
            <td>Gerund: </td>
            <td>{this.props.verb.gerund}</td>
          </tr>
          <tr>
            <td>Partpasado: </td>
            <td>{this.props.verb.partpasado}</td>
          </tr>
        </table>
        <table className="Main__table Main__table__two">
          <tr>
            <td>Gerund: </td>
            <td>{this.props.verb.gerund}</td>
          </tr>
          <tr>
            <td>Partpasado: </td>
            <td>{this.props.verb.partpasado}</td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    verb: state.currentVerb,
  }
}


export default connect(mapStateToProps)(Main);