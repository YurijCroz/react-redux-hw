
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {deleteHero, updateHero} from '../../actions';

function GetHeroes(props) {
  const {heroes, deleteAction, updateAction} = props;

  const mapHeroes = (hero) => {
    const deleteHandler = () => {deleteAction(hero.id)};
    const updateHandler = () => {updateAction({id: hero.id, isSelect: !hero.isSelect})};
    return(
      <li key={hero.id}>
        <h3>{hero.name}</h3>
        <ul>
          <h3>skills:</h3>
          {hero.skills.map(mapSkills)}
        </ul>
        <input type="checkbox" checked={hero.isSelect} onChange={updateHandler} />
        <button onClick={deleteHandler} >Delete Hero</button>
      </li>
    )
  }
  const mapSkills = (skill, index) => {
    return(
      <li key={index}>
        <h4>{skill.name}</h4>
        <p>{skill.description}</p>
      </li>
    )
  }
  return (
    <div>
      <h2>Heroes List</h2>
      <ul>{heroes.map(mapHeroes)}</ul>
    </div>
  )
}

const mapStateToProps = (state) => state.superheroesReducer;

const mapDispatchToProps = (dispatch) => {
  return{
    deleteAction: id => {dispatch(deleteHero(id))},
    updateAction: newData => {dispatch(updateHero(newData))},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetHeroes)