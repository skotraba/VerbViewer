import React, {Component} from 'react';

//Components
import Conjugation from '../Conjugation/Conjugation';

//Redux
import { connect } from 'react-redux';

//SCSS
import './Main.scss';

class Main extends Component {
  
 
  render() {
    return (
        <div className="Main">
          <div className="Main__boxTwo">
            <h1 className="Main__heading"><span className="Main__word">{this.props.verb.verbo}</span> - {this.props.verb.trad_en}</h1>
            <span className="Main__span">{this.props.verb.irregular === 0 ? "Regular" : "Irregular"}</span>
            <table className="Main__table Main__table__one">
              <tbody>
                <tr>
                  <td>Gerund: </td>
                  <td>{this.props.verb.gerund}</td>
                </tr>
                <tr>
                  <td>Partpasado: </td>
                  <td>{this.props.verb.partpasado}</td>
                </tr>
              </tbody>
            </table>
            
            <table className="Main__table Main__table__two">
            <tbody>
              <tr>
                <td>Reflexive: </td>
                <td>{this.props.verb.reflexivo === 0 ? "No" : "Yes"}</td>
              </tr>
            </tbody>
            </table>
          </div>
          <div className="Main__boxOne">
            <Conjugation/>
          </div>
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