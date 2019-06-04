
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const actions = {
    update: actionCreator<number>('COUNT_UPDATE')
};