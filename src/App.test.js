import {reducer} from "./redux/reducer"
import {decreaseValue, increaseValue} from "./redux/action-creator";

let startState = {};
beforeEach(()=>{
    startState={
        count: 0,
    }
})
test('adds 0 + 1 to equal 2', () => {
    const endState = reducer(startState, increaseValue())
    expect(endState).toEqual({
        count: 1,
    })
});
test('adds 0 - 1 to equal -1', () => {
    const endState = reducer(startState, decreaseValue())
    expect(endState).toEqual({
        count: -1,
    })
});
