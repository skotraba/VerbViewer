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

    let active = this.props.verb;
    let verbList = Data.verbs;
    console.log(active)

    
   
    if(this.props.search != " ")
    {
      let filteredVerbs = verbList.filter(word => {
        return word.verbo.includes(this.props.search)
      })

      verbList = filteredVerbs;
    }
    
   

    
   

    return (
      <div className="Sidebar" >
        <SearchArea 
        // change={searchList}
        />
        <div className="Sidebar__list" >
        {verbList.map((verb, index) => (
          <div 
          onClick={() => this.props.onVerb(verb)}
          className = {verb.verbo == active.verbo ? "Sidebar__list-item--active" : "Sidebar__list-item"}
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
    search: state.verbSearch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVerb: (verb) => dispatch({ type: 'CHANGE', verb: verb} )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);