import {combineReducers} from 'redux';
import app from './app';

const appReducer = combineReducers({
    app
});

/**
 * Creating a Root reducer to reset
 * the application back to the initial
 * state. This is invoked when the user
 * logs into the application and will
 * clear any stale state from the last
 * session. Basically it will close and
 * Screens or modals that may have been
 * opened in the previous session. workflow
 * wise it works like
 *
 * 1) Login action is dispatched
 * 2) Login action causes root reducer to resets the
 *    state to undefined, This resets all state in the app.
 * 3) reducers are called and the actions payload is applied
 *    to the new state. Originally I was concerned that resetting
 *    state on login would lose the action but the action is
 *    applied after the state is reset.
 *
 * This will reset all the redux
 * state data in the app.
 */
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;