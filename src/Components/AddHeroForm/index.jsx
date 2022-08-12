import React from 'react';
import {Formik, Form, Field, FieldArray} from 'formik';
import {connect} from 'react-redux';
import {createHero} from '../../actions';
// import {dbSkillsArray} from '../../api';

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
        {formikProps => {
            return(
                <Form>
                    {/* <Field type="checkbox" name="skills" value="dbSkills.mindControl" /> */}
                    <FieldArray
                      name="skills"
                      render={arrayHelpers => (
                        <div>
                          <Field name="name" placeholder="name" />
                          {skills.map((skill, index, arr) => {
                          <div key={index}>
                            <Field type="checkbox" name={`skills[${index}]`} value="123" />
                          </div>
                          })}
                          <button type="button" onClick={() => arrayHelpers.push('')}>+</button>
                          <button type="submit">create new hero</button>
                        </div>
                      )}
                    />
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