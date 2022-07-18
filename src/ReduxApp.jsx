import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {ConnectedRouter} from '';
import PropTypes from 'prop-types';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {TOGGLE_SIDEBAR} from './reducers/headerReducer';


import {
    AppBanner, Avatar, ErrorBoundary, IconConstants, CategoryBreakdown, Checkbox, Radio, Button,
    Input, AlertBadge, Card, Sidebar, Icon, Header, Link,
    SecondarySidebar, MultiColumnSecondarySidebar,
    ScreenManager, ToastManager, Palette
} from 'blueprint-react';

import TestHome from './pages/examples/TestHome';

/*import {history} from './store';
const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
});*/

/// Cisco UI Kit based components...
import CiscoActivity from './examples/CiscoActivity';
import CiscoAlerts from './examples/CiscoAlerts';
import CiscoArrowPanel from "src/examples/extras/panels/CiscoArrowPanel";
import CiscoBadge from 'src/examples/CiscoBadge';
import CiscoButtons from './examples/CiscoButtons';
import CiscoBreadcrumbs from './examples/CiscoBreadcrumbs';
import CiscoButtonGroup from "./examples/CiscoButtonGroup";
import CiscoCard from './examples/CiscoCard';
import CiscoProgressbar from './examples/CiscoProgressBar';
import CiscoCarousel from "./examples/CiscoCarousel";
import CiscoDividers from './examples/CiscoDividers';
import CiscoDropdown from './examples/CiscoDropdown';
import CiscoCollapsiblePanel from './examples/CiscoCollapsiblePanel';
import CiscoFigure from './examples/CiscoFigure';
import CiscoGauge from './examples/CiscoGauge';
import CiscoCharts from './examples/CiscoCharts';
import CiscoCheckbox from './examples/CiscoCheckbox';
import CiscoCheckboxGroup from './examples/CiscoCheckboxGroup';
import CiscoIconButtons from './examples/CiscoIconButtons';
import CiscoIconButtonBadge from './examples/CiscoIconButtonBadge';
import CiscoIcons from './examples/CiscoIcons';
import CiscoInput from './examples/CiscoInput';
import CiscoInputLabel from './examples/extras/input-label/CiscoInputLabel';
import CiscoKeyValuePair from './examples/extras/key-value/CiscoKeyValuePair';
import CiscoLabels from './examples/CiscoLabels';
import CiscoLink from './examples/CiscoLink'
import CiscoLoaders from './examples/CiscoLoaders';
import CiscoModals from './examples/CiscoModals';
import CiscoMoreLessPanel from './examples/extras/panels/CiscoMoreLessPanel';
import CiscoPanel from './examples/CiscoPanel';
import CiscoRadio from './examples/CiscoRadio';
import CiscoSelect from './examples/CiscoSelect';
import CiscoSteps from './examples/CiscoSteps';
import CiscoRating from './examples/CiscoRating';
import CiscoScoreboard from './examples/CiscoScoreboard';
import CiscoStatusItem from "src/examples/extras/status/CiscoStatusItem";
import CiscoSwitches from './examples/CiscoSwitches';
import CiscoTabs from './examples/CiscoTabs';
import CiscoThumbnail from './examples/CiscoThumbnail';
import CiscoTimeline from './examples/CiscoTimeline';
import CiscoToast from './examples/CiscoToast';
import CiscoToastManager from './examples/CiscoToastManager';
import CiscoTable from './examples/CiscoTable';
import CiscoTooltip from "./examples/CiscoTooltip";
import CiscoPaginationCache from './examples/extras/pagination-cache';

/// Extra components
import CiscoCards from './examples/extras/cards/CiscoCards';
import CiscoCategoryBreakdown from './examples/extras/category-breakdown/CiscoCategoryBreakdown';
import CiscoDatePicker from './examples/extras/date-time/date-picker/CiscoDatePicker';
import CiscoDonutChart from "./examples/extras/charts/donut/CiscoDonutChart";
import CiscoFileUpload from "./examples/extras/file-upload/CiscoFileUpload";
import CiscoHorizontalBreakdown from "./examples/extras/horizontal-breakdown/CiscoHorizontalBreakdown";
import CiscoDirectedFlowGraph from "./examples/extras/charts/directed-flow-graph/CiscoDirectedFlowGraph";
import CiscoMultiLaneTimeline from "./examples/extras/multi-lane-timeline/CiscoMultiLaneTimeline";
import CiscoNotifications from './examples/extras/notifications/CiscoNotifications';
import CiscoObjectPicker from './examples/extras/object-picker/CiscoObjectPicker';
import CiscoOrderableList from './examples/extras/orderable-list/CiscoOrderableList';
import CiscoScreens from './examples/extras/screens/CiscoScreens';
import CiscoSecondarySidebar from './examples/extras/secondary-sidebar/CiscoSecondarySidebar';
import CiscoSelectInput from './examples/extras/select-input/CiscoSelectInput';
import CiscoSplash from './examples/extras/splash/CiscoSplash';
import CiscoTables from './examples/extras/tables/CiscoTables';
import CiscoTimeRange from './examples/extras/date-time/time-range/CiscoTimeRange';
import CiscoRingChart from "./examples/extras/charts/ring-chart/CiscoRingChart";
import CiscoWorldMap from "./examples/extras/charts/worldmap";
import CiscoAddEditTable from "./examples/extras/add-edit-table/CiscoAddEditTable";
import CiscoAvatar from "./examples/extras/avatar/CiscoAvatar";
import CiscoWelcomeModal from "./examples/extras/welcome-modal/CiscoWelcomeModal";
import CiscoMatrixChart from './examples/extras/charts/matrix-chart/CiscoMatrixChart';
import CiscoTopology from "./examples/extras/topology/CiscoTopology";

/**
 * Route + sidebar configuration. Each element in the array below describes an example, with the following attributes
 *      title - Required. This is the title that'll be displayed in the sidebar
 *      path - Required. Route corresponding to this example
 *      component - Required. Component mapped to route above
 *      id - Optional, defaults to `title`. ID of the example
 *      icon - Optional. Icon that'll be displayed in the sidebar next to title
 */
const examples = [
    // primitives
    {title: 'Buttons', path: "/primitives/buttons", component: CiscoButtons},
    {title: 'Button Groups', path: "/primitives/buttongroups", component: CiscoButtonGroup},
    {title: 'Checkbox', path: "/primitives/checkboxes", component: CiscoCheckbox}
];


/**
 * @typedef {object} SidebarItem
 *      @property {string} id      - Menu ID
 *      @property {string} path    - Corresponding route
 *      @property {string} title   - Display title
 *      @property {string} icon    - Icon, if any.
 *
 * @param {string} category - The path prefix for which examples are to be retrieved.
 * @return {SidebarItem[]} - Array of objects consumable from sidebar config.
 */
const getExamples = (category) => {
    return examples.filter((example) => example.path.startsWith(category))
        .map(({title, path, id, icon}) => ({title, path, icon, id: id || title}));
}

const sidebarItems = [
    {
        id: 'Home',
        path: '/home',
        title: 'Home',
        icon: IconConstants.HOME
    }, {
        id: 'Tools',
        path: '/tools',
        title: 'My Tools',
        icon: IconConstants.RECENT_APPS,
        subItems: getExamples('/primitives')
    }, {
        id: 'Reports',
        path: '/reports',
        title: 'Reports',
        icon: IconConstants.APPLICATIONS,
        subItems: getExamples('/components')
    },
];

import './App.scss';

let sidebarCounter = 0;

class ReduxApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bannerSeverity: AppBanner.SEVERITY.INFO,
            bannerActive: true
        }
        this.sevCounter = 0;
    }

    _handleBannerActiveState = () => {
        const {bannerActive} = this.state;

        if (bannerActive) {
            this.setState({bannerActive: false},
                () => {
                    if (this.bannerTimer) {
                        clearTimeout(this.bannerTimer);
                    }
                    this.bannerTimer = setTimeout(() => {
                        this.setState({bannerActive: true})
                    }, 1000);
                });
        } else {
            this.setState({bannerActive: true});
        }
    }

    handleScreenActions(actionType, screenId) {
        //Action type will be on of SCREEN_ACTIONS
        //screenId: Id of the screen. For CLOSE_ALL and MINIMIZE_ALL, screenId is  undefined.
    }

    render() {
        let tools = [
            <AlertBadge key="alert-badge-1" count={2}/>
        ];

        let sidebar;
        if (this.props.showSidebar) {
            sidebar = (
                <Sidebar theme={Sidebar.THEMES.INDIGO} title="Examples"
                         expanded={true} locked={true} items={sidebarItems}/>);
        }

        const severityCounts = {
            critical: 1,
            major: 2,
            minor: 7,
            warning: 15,
        };

        let secondarySidebar0, secondarySidebar1, secondarySidebar2,
            headerContent1 = {
                icon: <Icon key="icon-0" type={Icon.TYPE.CHECK_OUTLINE} size={Icon.SIZE.MEDIUM_SMALL} style={{color: Palette.CiscoGreen}}/>,
                title: "Secondary Sidebar", subtitle: "SubTitle"
            },
            headerContent2 = {
                icon: <Icon key="icon-1" type={Icon.TYPE.BLOCKED} size={Icon.SIZE.MEDIUM_SMALL} style={{color: Palette.AccentRed}}/>,
                title: "Secondary Sidebar", subtitle: "SubTitle",
                bottomStripContent: (<CategoryBreakdown categories={[
                    {
                        icon: IconConstants.CRITICAL,
                        label: 'critical',
                        count: severityCounts.critical || 0,
                        theme: CategoryBreakdown.THEME.RED
                    },
                    {
                        icon: IconConstants.MAJOR,
                        label: 'major',
                        count: severityCounts.major || 0,
                        theme: CategoryBreakdown.THEME.ORANGE
                    },
                    {
                        icon: IconConstants.MINOR,
                        label: 'minor',
                        count: severityCounts.minor || 0,
                        theme: CategoryBreakdown.THEME.YELLOW
                    },
                    {
                        icon: IconConstants.WARNING_ALT,
                        label: 'warning',
                        count: severityCounts.warning || 0,
                        theme: CategoryBreakdown.THEME.TURQUISE
                    }
                ]}/>)
            };

        secondarySidebar0 = (
            <SecondarySidebar key="ss-0" opened={this.props.showSecondarySidebar0}
                              headerContent="Header content" footerContent={<div style={{textAlign: 'center'}}>Footer content</div>}
                              styles={{
                                  header: {
                                      alignSelf: 'center',
                                      justifySelf: 'center'
                                  },
                                  body: {
                                      alignSelf: 'center',
                                      justifySelf: 'center'
                                  }
                              }}
                              closable={true}>
                Body content
            </SecondarySidebar>);

        secondarySidebar1 = (
            <SecondarySidebar key="ss-0a" opened={this.props.showSecondarySidebar}
                              headerContent={headerContent1} footerContent="Footer content"
                              closable={true} tools={[<Icon key="icon-2" type={Icon.TYPE.JUMP_OUT} className="actionable"/>]}>
                <Card key="ss-card-0" uid="ss-card-0"
                      collapsible={true} bordered={false}
                      headerContent={{title: 'Summary'}}
                      styles={{cardStyles: {marginBottom: '10px'}}}>
                    The purpose of this component is to provide a "secondary" sidebar which appears on the trailing side of
                    the UI.
                </Card>
                <Card key="ss-card-1" uid="ss-card-1" collapsible={true} bordered={false} headerContent={{title: 'Description'}}>
                    Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                    Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                    Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                    Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                </Card>
            </SecondarySidebar>);

        secondarySidebar2 = (
            <MultiColumnSecondarySidebar key="mcss-1" opened={this.props.showSecondarySidebar1}
                                         closable={true} headerContent={
                {
                    icon: Icon.TYPE.SEARCH,
                    heading: "Two Column Sidebar"
                }
            }>
                <SecondarySidebar key="ss-2a"
                                  closable={false} tools={[<Icon key="icon-3" type={Icon.TYPE.JUMP_OUT} className="actionable"/>]}>
                    <div style={{display: "grid", gridTemplateRows: "auto 1fr", gridTemplateColumns: "100%"}}>
                        <Input type={Input.TYPE.SEARCH} size={Input.SIZE.COMPRESSED} label="Search" labelLayout={Input.LABEL_LAYOUT.FLOATED}/>
                    </div>

                </SecondarySidebar>

                <SecondarySidebar key="mcss-2"
                                  headerContent={headerContent2}
                                  footerContent={<Button size={Button.SIZE.XSMALL}>Save</Button>}
                                  closable={false}
                                  tools={[<Icon key="icon-3" type={Icon.TYPE.JUMP_OUT} className="actionable"/>]}>
                    <Card key="mcss-2-card-2" uid="mcss-2-card-2" collapsible={true}
                          bordered={false}
                          headerContent={{title: 'General'}}
                          styles={{ cardStyles: { marginBottom: '10px'} }}>
                        The purpose of this component is to provide a "secondary" sidebar which appears on the trailing side of
                        the UI.
                    </Card>
                    <Card key="mcss-2-card-3" uid="mcss-2-card-3"
                          collapsible={true}
                          bordered={false}
                          headerContent={{title: 'Resources'}}
                          styles={{ cardStyles: { marginBottom: '10px'} }}>
                        Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                        Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                        Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                        Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in.
                    </Card>
                    <Card key="mcss-2-card-4" uid="mcss-2-card-4" collapsible={true} bordered={false} headerContent={{title: 'Settings'}}>
                        <Checkbox label="Setting1" name="mcss-ss-card-01" value="value-01"/>
                        <Checkbox label="Setting2" name="mcss-ss-card-01" value="value-02"/>
                        <Checkbox label="Setting3" name="mcss-ss-card-01" value="value-03"/>
                        <Radio name="card-options0" label="Option1" layout={Radio.LAYOUT.INLINE}/>
                        <Radio name="card-options1" label="Option2" layout={Radio.LAYOUT.INLINE}/>
                        <Radio name="card-options2" label="Option3" layout={Radio.LAYOUT.INLINE}/>
                        <br/>
                        <br/>
                    </Card>
                </SecondarySidebar>
            </MultiColumnSecondarySidebar>);

        if (this.props.showSecondarySidebar2) {
            this.ssContent = sidebarCounter % 2 === 0 ? content1 : content2;
            sidebarCounter++;
        }

        const secondarySidebar3 = (
            <SecondarySidebar key="ss-2" opened={this.props.showSecondarySidebar2}
                              headerContent={headerContent1} footerContent="Footer content"
                              closable={true} tools={[<Icon key="icon-2" type={Icon.TYPE.JUMP_OUT} className="actionable"/>]}>
                {this.ssContent}
            </SecondarySidebar>);

        const routes = examples.map(({path, component}) => (
            <Route key={`${path}`} path={path} component={component}/>
        ));

        const setAppBannerSeverity = () => {
            let bannerSeverity;

            switch (this.sevCounter % 3) {
                case 0:
                    bannerSeverity = AppBanner.SEVERITY.WARNING;
                    break;
                case 1:
                    bannerSeverity = AppBanner.SEVERITY.CRITICAL;
                    break;
                case 2:
                    bannerSeverity = AppBanner.SEVERITY.INFO;
            }
            this.sevCounter++;

            this.setState({bannerSeverity});
        }

        return (
            <ErrorBoundary>
                <Router>
                    <ScreenManager onScreenAction={this.handleScreenActions}>
                        <ToastManager/>
                        <div id="content-container">
                            <AppBanner severity={this.state.bannerSeverity} active={this.state.bannerActive}>
                                Click <Link onAction={() => setAppBannerSeverity()}> here </Link><span> to demo each severity level. </span>
                                {this.state.severity === AppBanner.SEVERITY.CRITICAL ?
                                    <span>  <Link onAction={() => alert('Related view with critical issue. ;)')}>Link</Link><span> to related view to resolve critical issue.</span></span> :
                                    this.state.severity === AppBanner.SEVERITY.WARNING ?
                                        <span>  <Link onAction={() => alert('Related view with an associated warning ;)')}>Link</Link><span> to related view to address warning.</span></span> :
                                        <span>  <Link onAction={() => alert('Related view ;)')}>Link</Link><span> to related view.</span></span>
                                }

                                <span> <Link onAction={this._handleBannerActiveState}> Temporarily emulate</Link> the resolution of the current severity state.</span>
                            </AppBanner>
                            <div id="main-content" className="content-fluid relative"> {/* content-fluid div must be position relative for the this app's layout to work with AppBanner */}
                                {sidebar}
                                <main>
                                    <Header spacing={Header.SPACING.COMPRESSED} heading={<span>Blueprint React Component Toolkit <span style={{fontSize: '50%'}}>(version 3.9.8)</span></span>}
                                            tools={tools}
                                            onStateChange={this.props.toggleSidebar}/>
                                    <div style={{overflowY: 'auto', overflowX: 'hidden', background: '#fff'}}>
                                        <div className="container-fluid" style={{position: 'relative', margin: '0'}}>
                                            {secondarySidebar0}
                                            {secondarySidebar1}
                                            {secondarySidebar2}
                                            {secondarySidebar3}
                                            {routes}
                                            <Route exact path="/" component={TestHome}/>
                                            <Route exact path="/home" component={TestHome}/>
                                        </div>
                                    </div>
                                 </main>
                            </div>
                        </div>
                    </ScreenManager>
                </Router>
            </ErrorBoundary>
        );
    }
}

ReduxApp.propTypes = {
    showSidebar: PropTypes.bool,
    showSecondarySidebar: PropTypes.bool,
    showSecondarySidebar0: PropTypes.bool,
    showSecondarySidebar1: PropTypes.bool,
    showSecondarySidebar2: PropTypes.bool,
    toggleSidebar: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    showSidebar: state.headerReducer.showSidebar,
    showSecondarySidebar: state.secondarySidebarReducer.showSecondarySidebar,
    showSecondarySidebar0: state.secondarySidebarReducer.showSecondarySidebar0,
    showSecondarySidebar1: state.secondarySidebarReducer.showSecondarySidebar1,
    showSecondarySidebar2: state.secondarySidebarReducer.showSecondarySidebar2
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => {
        dispatch({type: TOGGLE_SIDEBAR});
    }
});

ReduxApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);

export default ReduxApp;