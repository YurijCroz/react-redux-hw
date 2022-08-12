import React from 'react';
import {Formik, Form, Field, FieldArray} from 'formik';
import {connect} from 'react-redux';
import {createHero} from '../../actions';
import {dbSkills} from '../../api';

function AddHeroForm(props) {
  const {createHeroAction, skills} = props;
  console.log(skills)
  const initialValues = {
    name: '',
    skills: []
  };
  const submitHandler = (values, formikBag) => {
    console.log(values);
    createHeroAction(values);
    formikBag.resetForm();
  }
  return (
    <>
    <h2>Add new hero</h2>
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
    {formikProps =>  {
      return(
        <Form>
          <Field name="name" type="text" placeholder="name"/>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="skills" value="dbSkills.portalCreation" />{dbSkills.portalCreation.name}
            </label>
            <label>
              <Field type="checkbox" name="skills" value="dbSkills.mindControl" />{dbSkills.mindControl.name}
            </label>
          </div>
          <button type="submit">create new hero</button>
        </Form>
      )
    }}
    </Formik>
    </>
  )
}


const mapStateToProps = state => state.superheroesReducer;

const mapDispatchToProps = dispatch => {
    return{
        createHeroAction: data => {dispatch(createHero(data))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddHeroForm)