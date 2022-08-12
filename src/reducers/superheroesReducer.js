import ACTION_TYPES from "../actions/actionTypes";
import { dbSkills, dbSkillsArray } from "../api";
//import dbHeroJson from "../api/dbHero.json";

let counter = 1000;

const dbHero = [
    {
        id: counter++,
        name: "Ancient Scepter",
        skills: [dbSkills.portalCreation, dbSkills.innateCapability],
        isSelect: false
    },
    {
        id: counter++,
        name: "Phantom Kid",
        skills: [dbSkills.mindControl],
        isSelect: false
    },
    {
        id: counter++,
        name: "Mister Mammoth Mastermind",
        skills: [dbSkills.animalControl, dbSkills.mindControl],
        isSelect: false
    }
]


const initialState = {
    heroes: dbHero,
    skills: dbSkillsArray
}

const superheroesReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.CREATE_HERO: {
            const {heroes} = state;
            const {data} = action;
            const newHero = {
                ...data,
                id: counter++,
                isSelect: false
            };
            const newHeroesDB = [...heroes, newHero];
            console.log(newHeroesDB)
            return {heroes: newHeroesDB};
        }
        case ACTION_TYPES.DELETE_HERO: {
            const {heroes} = state;
            const {id} = action;
            const newHeroesDB = [...heroes];
            newHeroesDB.splice(
                newHeroesDB.findIndex(h => id === h.id), 1
            );
            return {heroes: newHeroesDB};
        }
        case ACTION_TYPES.UPDATE_HERO: {
            const {heroes} = state;
            const {data} = action;
            const newHeroesDB = [...heroes];
            const findHeroIndex = newHeroesDB.findIndex(h => data.id === h.id);
            newHeroesDB[findHeroIndex] = {...newHeroesDB[findHeroIndex], ...data};
            return {heroes: newHeroesDB};
        }
        case ACTION_TYPES.ADD_SKILLS_HERO: {
            const {heroes} = state;
            const {data} = action;
            const newSkills = {
                ...data,
            }
        }
        default: return state;
    }
}


export default superheroesReducer;