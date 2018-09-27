export const flatListPaging = (currentState,oldList,newList) => {
    Array.prototype.push.apply(oldList,newList);
    currentState.data = oldList // assuming having object named "data"

    console.log(JSON.stringify(currentState)); // reading new list logs

    return currentState;
}

