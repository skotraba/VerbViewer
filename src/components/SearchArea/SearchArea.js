import React, { Component } from 'react';

//SCSS
import './SearchArea.scss';

//Redux
import { connect } from 'react-redux';




class SearchArea extends Component {

  render() {

    const onChangeHandler = (e) => {
      this.props.onSearch(e.target.value);
      // this.props.change();
    }



    return (
      <div className="SearchArea">
        <input 
        type="text"
        id="search"
        onChange={(e) => onChangeHandler(e)} 
        className="Search" 
        placeholder="Search..."
        >
        </input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    verb: state.currentVerb,
    search: state.verbSearch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (search) => dispatch({ type: 'CHANGE_SEARCH', search:search} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);