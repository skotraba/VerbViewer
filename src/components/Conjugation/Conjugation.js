import React, { Component } from 'react';

//Components
import Table from './ConjugationTable';

//Data
import * as Data from '../../Verbscon';

//SCSS
import './Conjugation.scss';

//Redux
import { connect } from 'react-redux';


const getVerbs = () => {
  let list = [[]]
  let item = [{...Data.verbCon[0]}]

  let count = 0

  Data.verbCon.map((word, index) => {
    if(index != 0) {
      if(word.verbo !== item[0].verbo){
        list[count] = item;
        count++;
        item = [{...word}]
      }
      else {
        item.push(word)
      }
    } 
  })

  return list;

}



const verbs = getVerbs();


class Conjugation extends Component {
  

  render() {

    let current = this.props.verb.id - 1

    return (
      <div className="ConContainer">
        {
          <div>
            <h3>{verbs[current][0].modo}</h3>
            <Table
            tiempo={verbs[current][0].tiempo}
            yo={verbs[current][0].yo}
            tu={verbs[current][0].tu}
            el={verbs[current][0].el}
            ns={verbs[current][0].ns}
            vs={verbs[current][0].vs}
            ellos={verbs[current][0].ellos}/>
          </div>
        
        
        
        
        /* <div>
          <h3>{verbs[0].modo}</h3>
          <Table
          tiempo={verbs[0].tiempo}
          yo={verbs[0].yo}
          tu={verbs[0].tu}
          el={verbs[0].el}
          ns={verbs[0].ns}
          vs={verbs[0].vs}
          ellos={verbs[0].ellos}/>
        </div>
        <div>
          <Table
          tiempo={verbs[1].tiempo}
          yo={verbs[1].yo}
          tu={verbs[1].tu}
          el={verbs[1].el}
          ns={verbs[1].ns}
          vs={verbs[1].vs}
          ellos={verbs[1].ellos}/>
        </div>
        <div>
          <Table
          tiempo={verbs[2].tiempo}
          yo={verbs[2].yo}
          tu={verbs[2].tu}
          el={verbs[2].el}
          ns={verbs[2].ns}
          vs={verbs[2].vs}
          ellos={verbs[2].ellos}/>
        </div>
       
        */
        }
      </div>
     
    );
  }
}

const mapStateToProps = state => {
  return {
    verb: state.currentVerb,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verbChange: (id) => dispatch({ type: 'UPDATE', id: id} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conjugation);