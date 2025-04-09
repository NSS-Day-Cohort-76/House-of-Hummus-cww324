const transientState = {
    entreeId: null,
    vegetableId: null,
    sideId: null
}

export const setEntree = (chosenEntree) => {
    transientState.entreeId = chosenEntree
}

export const setVegetable = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable

}

export const setSide = (chosenSide) => {
    transientState.sideId = chosenSide
}


export const getTransientState = () => {
    return structuredClone(transientState)
}



export const resetTransientState = () => {
    transientState.entreeId = null;
    transientState.sideId = null;
    transientState.vegetableId = null;
}