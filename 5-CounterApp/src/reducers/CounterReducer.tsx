import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actions } from '../actions/CounterAction';

export interface State {
    count: number;
}

const initialState: State = {
    count: 0,
};

export const reducer = reducerWithInitialState(initialState)
    .case(actions.update, (state, count) => {
        return Object.assign({}, state, { count });
    });
