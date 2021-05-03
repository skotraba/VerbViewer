import React, { Component } from 'react';

//Components
import SearchArea from '../SearchArea/SearchArea';

//Redux
import { connect } from 'react-redux';

//Data
import * as Data from '../../VerbData';

//CSS
import './Sidebar.scss'

class Sidebar extends Component {

  render() {

    let active = this.props.verb.id - 1;


    return (
      <div className="Sidebar" >
        <SearchArea/>
        <div className="Sidebar__list" >
        {Data.verbs.map((verb, index) => (
          <div 
          onClick={() => this.props.onVerb(index)}
          className = {index == active ? "Sidebar__list-item--active" : "Sidebar__list-item"}
          key={verb.id + index}>{verb.verbo}</div>
        ))}
        </div>
      </div>
    );
  }
};



const mapStateToProps = state => {
  return {
    verb: state.currentVerb,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVerb: (id) => dispatch({ type: 'CHANGE', id: id} )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);