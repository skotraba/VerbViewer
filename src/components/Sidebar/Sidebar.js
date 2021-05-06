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
    let show = true;

    
   
    if(this.props.search != " ")
    {
      let filteredVerbs = verbList.filter(word => {
        // return word.verbo.includes(this.props.search)
        return word.verbo.includes("poder")
      })
      alert(filteredVerbs[0].verbo)
      console.log(filteredVerbs[0])

      verbList = filteredVerbs;
    }

    const onClear = () => {
      const searchInput = document.getElementById("search")
      searchInput.value = searchInput.defaultValue;

      this.props.onClear();
    }
    
  

    return (
      <div className="Sidebar">
        <SearchArea 
        // change={onClear}
        />
        <div className="Sidebar__list" >
        {verbList.map((verb, index) => (
          <div 
          onClick={() => this.props.onVerb(verb)}
          className = {verb.verbo == active.verbo ? "Sidebar__list-item--active" : "Sidebar__list-item"}
          key={verb.id + index}>{verb.verbo}
          </div>
        ))}
        <a className="Sidebar__list-item Sidebar__link" onClick={onClear}>Clear</a>
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
    onVerb: (verb) => dispatch({ type: 'CHANGE', verb: verb} ),
    onClear: () => dispatch({type: 'CLEAR'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);