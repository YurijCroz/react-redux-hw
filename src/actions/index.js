import ACTION_TYPES from "./actionTypes";
//! HERO

export const createHero = newHero => {
    return{
        type: ACTION_TYPES.CREATE_HERO,
        data: newHero
    }
}

export const updateHero = newData => {
    return{
        type: ACTION_TYPES.UPDATE_HERO,
        data: newData
    }
}

export const deleteHero = id => {
    return{
        type: ACTION_TYPES.DELETE_HERO,
        id: id
    }
}

export const getHero = id => {
    return{
        type: ACTION_TYPES.GET_HERO,
        id: id
    }
}

export const addSkillsHero = skills => {
    return{
        type: ACTION_TYPES.ADD_SKILLS_HERO,
        skills: skills
    }
}