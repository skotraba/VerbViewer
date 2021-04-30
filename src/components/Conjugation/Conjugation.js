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

    let current = this.props.verb.id - 1;
    console.log(verbs)

    return (
      <div>
        <div className="ConContainer">
          <div>
            <h2 className="ConContainer__heading">{verbs[current][0].modo}: </h2>
            <Table
            tiempo={verbs[current][0].tiempo}
            yo={verbs[current][0].yo}
            tu={verbs[current][0].tu}
            el={verbs[current][0].el}
            ns={verbs[current][0].ns}
            vs={verbs[current][0].vs}
            ellos={verbs[current][0].ellos}/>
          </div>
          <div>
            <Table
            tiempo={verbs[current][1].tiempo}
            yo={verbs[current][1].yo}
            tu={verbs[current][1].tu}
            el={verbs[current][1].el}
            ns={verbs[current][1].ns}
            vs={verbs[current][1].vs}
            ellos={verbs[current][1].ellos}/>
          </div>
          <div>
            <Table
            tiempo={verbs[current][2].tiempo}
            yo={verbs[current][2].yo}
            tu={verbs[current][2].tu}
            el={verbs[current][2].el}
            ns={verbs[current][2].ns}
            vs={verbs[current][2].vs}
            ellos={verbs[current][2].ellos}/>
          </div>
          <div>
            <Table
            tiempo={verbs[current][4].tiempo}
            yo={verbs[current][4].yo}
            tu={verbs[current][4].tu}
            el={verbs[current][4].el}
            ns={verbs[current][4].ns}
            vs={verbs[current][4].vs}
            ellos={verbs[current][4].ellos}/>
          </div>
        </div>
        <div className="ConContainer">
          <div>
            <h2 className="ConContainer__heading">{verbs[current][11].modo}: </h2>
            <Table
            tiempo={verbs[current][11].tiempo}
            yo={verbs[current][11].yo}
            tu={verbs[current][11].tu}
            el={verbs[current][11].el}
            ns={verbs[current][11].ns}
            vs={verbs[current][11].vs}
            ellos={verbs[current][11].ellos}/>
          </div>
          <div>
            <Table
            tiempo={verbs[current][12].tiempo}
            yo={verbs[current][12].yo}
            tu={verbs[current][12].tu}
            el={verbs[current][12].el}
            ns={verbs[current][12].ns}
            vs={verbs[current][12].vs}
            ellos={verbs[current][12].ellos}/>
          </div>
          <div>
            <Table
            tiempo={verbs[current][14].tiempo}
            yo={verbs[current][14].yo}
            tu={verbs[current][14].tu}
            el={verbs[current][14].el}
            ns={verbs[current][14].ns}
            vs={verbs[current][14].vs}
            ellos={verbs[current][14].ellos}/>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    verbChange: (id) => dispatch({ type: 'UPDATE', id: id} )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conjugation);