import _ from 'lodash';

import {MODAL_ACTIONS, OBJECTS_LIST_SUMMARY_PANE_ACTIONS, SCREEN_ACTIONS, SUMMARY_PANE_ACTIONS} from '../actions/app';

const initialState = {
    showFeedback: false,
    showCreateMenu: false,
    showAlertsMenu: false,
    openedScreens: [],
    openedModals: [],
    visibleSummaryPanes: [],
    visibleObjectsListSummaryPane: undefined,
    globalEvents: {},
    alertsCode: null
};

const RECOVER_SCREEN_DATA_GLOBALLY = true;

/**
 * Assigns side-bar state to application's state store.
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = initialState, action = {}) {
    let openedScreens;

    switch (action.type) {
        case SCREEN_ACTIONS.OPEN_SCREEN:
            // eslint-disable-next-line no-case-declarations
            let key = action.screenData.type;
            if (typeof action.screenData.id !== 'undefined') {
                key += action.screenData.id;
            }
            openedScreens = [...state.openedScreens];
            // eslint-disable-next-line no-case-declarations
            const onClose = action.onClose || _.noop;
            // eslint-disable-next-line no-case-declarations
            const existingScreenIndex = _.findIndex(openedScreens, (item) => item.key === key);
            if (RECOVER_SCREEN_DATA_GLOBALLY && existingScreenIndex >= 0) {
                openedScreens[existingScreenIndex].minimized = false;
                const removed = openedScreens.splice(existingScreenIndex, 1);
                // Putting the screen back at the top of the stack
                openedScreens.push(removed[0]);
            } else {
                const screen = {
                    ...action.screenData, key,
                    toBeClosed: action.toBeClosed,
                    onClose,
                    minimized: false
                };
                openedScreens.push(screen);
            }

            return {
                ...state, openedScreens,
                visibleSummaryPanes: [], // if there was an open summary pane, close it
                visibleObjectsListSummaryPane: undefined // if there was an open objects list summary pane, close it
            };
        case SCREEN_ACTIONS.MINIMIZE_SCREEN:
            if (state.openedScreens.length === 0) {
                // do nothing if there is no screen open
                return state;
            }
            openedScreens = [...state.openedScreens];
            // Remove the screen from top of the stack and put it at the bottom
            // eslint-disable-next-line no-case-declarations
            const minimizingScreen = openedScreens.pop();
            minimizingScreen.minimized = true;
            openedScreens.unshift(minimizingScreen);
            return {...state, openedScreens};
        case SCREEN_ACTIONS.CLOSE_MINIMIZED_SCREEN:
            openedScreens = [...state.openedScreens];
            _.remove(openedScreens, (screen) => screen.key === action.id);
            return {...state, openedScreens};
        case SCREEN_ACTIONS.CLOSE_ALL_MINIMIZED_SCREENS:
            openedScreens = [...state.openedScreens];
            _.remove(openedScreens, (screen) => screen.minimized);
            return {...state, openedScreens};
        case SCREEN_ACTIONS.CLOSE_SCREEN:
            openedScreens = [...state.openedScreens];
            openedScreens.pop();
            return {...state, openedScreens};
        case MODAL_ACTIONS.OPEN_MODAL:
            return {...state, openedModals: [...state.openedModals, action.modalData]};
        case MODAL_ACTIONS.CLOSE_MODAL:
            // eslint-disable-next-line no-case-declarations
            const openedModals = [...state.openedModals];
            openedModals.pop();
            return {...state, openedModals};
        case SUMMARY_PANE_ACTIONS.OPEN_SUMMARY_PANE:
            return {...state, visibleSummaryPanes: [...state.visibleSummaryPanes, {...action.summaryPaneData}]};
        case SUMMARY_PANE_ACTIONS.CLOSE_SUMMARY_PANE:
            // eslint-disable-next-line no-case-declarations
            const visibleSummaryPanes = [...state.visibleSummaryPanes];
            visibleSummaryPanes.pop();
            return {...state, visibleSummaryPanes};
        case OBJECTS_LIST_SUMMARY_PANE_ACTIONS.CLOSE_OBJECTS_LIST_SUMMARY_PANE:
            return {...state, visibleObjectsListSummaryPane: undefined};
        case OBJECTS_LIST_SUMMARY_PANE_ACTIONS.OPEN_OBJECTS_LIST_SUMMARY_PANE:
            return {...state, visibleObjectsListSummaryPane: {...action.data}};
        default:
            return state;
    }
}