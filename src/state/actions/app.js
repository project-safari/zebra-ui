const SCREEN_ACTIONS = {
    CLOSE_SCREEN: 'closeScreen',
    OPEN_SCREEN: 'openScreen',
    MINIMIZE_SCREEN: 'minimizeScreen',
    CLOSE_MINIMIZED_SCREEN: 'closeMinimizedScreen',
    CLOSE_ALL_MINIMIZED_SCREENS: 'closeAllMinimizedScreens'
};

const LAYOUT_ACTIONS = {
    TOGGLE_CREATE_MENU: 'toggleCreateMenu',
    TOGGLE_FEEDBACK: 'toggleFeedback',
    TOGGLE_ALERTS_MENU: 'toggleAlertsMenu',
    SELECT_ALERT: 'selectAlert'
};

const GLOBAL_EVENTS = {
    OBJECT_CREATED: 'objectCreated',
    OBJECT_DELETED: 'objectDeleted',
    OBJECT_EDITED: 'objectEdited'
};

const MODAL_ACTIONS = {
    CLOSE_MODAL: 'closeModal',
    OPEN_MODAL: 'openModal'
};

const SUMMARY_PANE_ACTIONS = {
    CLOSE_SUMMARY_PANE: 'closeSummaryPane',
    OPEN_SUMMARY_PANE: 'openSummaryPane'
};

const OBJECTS_LIST_SUMMARY_PANE_ACTIONS = {
    CLOSE_OBJECTS_LIST_SUMMARY_PANE: 'closeObjectsListSummaryPane',
    OPEN_OBJECTS_LIST_SUMMARY_PANE: 'openObjectsListSummaryPane'
};

const screenActions = function(dispatch) {
    return {
        openScreen: (screenData, toBeClosed) => {
            dispatch({type: SCREEN_ACTIONS.OPEN_SCREEN, screenData, toBeClosed});
        },
        openDetailsScreen: (moClass, dn, screenData) => {
            const dispatchedData = screenData || {};
            dispatchedData.type = `details/${moClass || screenData.id}`;
            dispatchedData.id = dn;
            dispatchedData.dn = dn; // can be used to fetch the object if there is no screenData
            dispatchedData.moObj = screenData.moObj;
            dispatch({type: SCREEN_ACTIONS.OPEN_SCREEN, dispatchedData});
        },
        minimizeScreen: () => {
            dispatch({type: SCREEN_ACTIONS.MINIMIZE_SCREEN});
        },
        openMinimizedScreen: (screenData, toBeClosed) => {
            dispatch({type: SCREEN_ACTIONS.OPEN_SCREEN, screenData, toBeClosed});
        },
        closeScreen: () => {
            dispatch({type: SCREEN_ACTIONS.CLOSE_SCREEN});
        },
        closeMinimizedScreen: (id) => {
            dispatch({type: SCREEN_ACTIONS.CLOSE_MINIMIZED_SCREEN, id});
        },
        closeAllMinimizedScreens: () => {
            dispatch({type: SCREEN_ACTIONS.CLOSE_ALL_MINIMIZED_SCREENS});
        }
    };
};

const layoutActions = function(dispatch) {
    return {
        toggleCreateMenu: () => {
            dispatch({type: LAYOUT_ACTIONS.TOGGLE_CREATE_MENU});
        },
        toggleFeedback: () => {
            dispatch({type: LAYOUT_ACTIONS.TOGGLE_FEEDBACK});
        },
        toggleAlertsMenu: () => {
            dispatch({type: LAYOUT_ACTIONS.TOGGLE_ALERTS_MENU});
        },
        selectAlertsCode: (code) => {
            dispatch({type: LAYOUT_ACTIONS.SELECT_ALERT, payload: code});
        }
    };
};

const modalActions = function(dispatch) {
    return {
        closeModal: () => {
            dispatch({type: MODAL_ACTIONS.CLOSE_MODAL});
        },
        openModal: (modalData) => {
            dispatch({type: MODAL_ACTIONS.OPEN_MODAL, modalData});
        }
    };
};

const summaryPaneActions = function(dispatch) {
    return {
        closeSummaryPane: () => {
            dispatch({type: SUMMARY_PANE_ACTIONS.CLOSE_SUMMARY_PANE});
        },
        openSummaryPane: (data) => {
            dispatch({type: SUMMARY_PANE_ACTIONS.OPEN_SUMMARY_PANE, summaryPaneData: data});
        }
    };
};

const objectsListSummaryPaneActions = function(dispatch) {
    return {
        closeObjectsListSummaryPane: () => {
            dispatch({type: OBJECTS_LIST_SUMMARY_PANE_ACTIONS.CLOSE_OBJECTS_LIST_SUMMARY_PANE});
        },
        openObjectsListSummaryPane: (data) => {
            dispatch({type: OBJECTS_LIST_SUMMARY_PANE_ACTIONS.OPEN_OBJECTS_LIST_SUMMARY_PANE, data});
        }
    };
};

const globalEventsActions = function(dispatch) {
    return {
        signalObjectCreatedEvent: (moCLass) => {
            dispatch({type: GLOBAL_EVENTS.OBJECT_CREATED, moClass: moCLass});
        },
        signalObjectDeletedEvent: (moCLass) => {
            dispatch({type: GLOBAL_EVENTS.OBJECT_DELETED, moClass: moCLass});
        },
        signalObjectEditedEvent: (moCLass) => {
            dispatch({type: GLOBAL_EVENTS.OBJECT_EDITED, moClass: moCLass});
        }
    };
};

const merge = function(actions) {
    return (dispatch) => {
        let actionMap = {};
        actions.forEach((fn) => {
            if (fn) {
                actionMap = {...actionMap, ...fn(dispatch)};
            }
        });
        return actionMap;
    };
};

const appActions = {
    SCREEN_ACTIONS: screenActions,
    LAYOUT_ACTIONS: layoutActions,
    MODAL_ACTIONS: modalActions,
    SUMMARY_PANE_ACTIONS: summaryPaneActions,
    OBJECTS_LIST_SUMMARY_PANE_ACTIONS: objectsListSummaryPaneActions,
    GLOBAL_EVENTS_ACTIONS: globalEventsActions,
    merge
};

export {
    appActions,
    LAYOUT_ACTIONS,
    SCREEN_ACTIONS,
    MODAL_ACTIONS,
    SUMMARY_PANE_ACTIONS,
    OBJECTS_LIST_SUMMARY_PANE_ACTIONS,
    GLOBAL_EVENTS
};
