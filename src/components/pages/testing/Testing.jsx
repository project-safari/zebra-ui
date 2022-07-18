import React from 'react';
import {Sidebar, Icon, Header, Gauge, Input, List, Panel, Toast, CategoryBreakdown} from '@bui/magnetic';
import {ThemeProvider} from "@bui/material/styles";
import theme from "@bui/theming";
import {AlertBadge, Steps, Card, CardHeader, CardBody, MoreLessPanel, StatusItem, AccentPalette, ComponentHeader, BasePalette, ObjectPicker, Notification} from 'blueprint-react'
import "./testing.scss";



const severityCounts = {
    critical: 1,
    major: 2,
    minor: 7,
    warning: 15,
};
const sidebarItems = [
    {
        id: 'item1 id',
        icon: Icon.TYPE.HOME,
        path: 'path to page',
        title: 'item1 label'
    },
    {
        id: 'item2 id',
        icon: Icon.TYPE.DEVICES,
        path: 'path to page',
        title: 'item2 label'
    },
    {
        id: 'item3 id',
        icon: Icon.TYPE.ALERT,
        path: 'path to page',
        title: 'item3 label',
        subItems: [
            {
                id: 'subitem1 id',
                path: 'path to subitem page',
                title: 'subitem1 label'
            },
            {
                id: 'subitem2 id',
                path: 'path to subitem page',
                title: 'subitem2 label'
            }
        ]
    }
]

let tools = [
    <AlertBadge key="alert-badge-1" count={2}/>,
    <Icon key="icon-admin" type={Icon.TYPE.ADMIN} />
];

const UserHome = () => {
    return (
        <ThemeProvider theme={theme}>
        <div className = 'home'>

            <div className="homeContainer">
                <div className="sidebar">
                    <Sidebar title={'Admin'}
                        items={sidebarItems}
                        theme={Sidebar.THEMES.LIGHT_GRAY}
                        expanded={true}
                        />
                </div>
                <div className="header">
                <Header spacing={Header.SPACING.COMPRESSED} heading={<span>Enviroment for Testing <span style={{fontSize: '50%'}}>(Project Zebra)</span></span>} tools={tools}/>

                </div>
                <div className="widgets">
                    <Card
                            key="card-compact-2"
                            raised={true}
                            hoverable={true}
                            size={Card.SIZE.COMPACT_SMALL}>
                            cardAlignment={Card.ALIGNMENT.CENTERED}
                            <CardHeader content={
                                {
                                    icon: Icon.TYPE.ANOMALY,
                                    title: 'Wait Time'
                                }
                            }/>

                            <CardBody>
                                <MoreLessPanel key="more-less-1a"
                                               persistCollapsed={true}
                                               collapsedLines={3}
                                               moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.ELLIPSES}>
                                    Display predicted wait time here.
                                </MoreLessPanel>                            </CardBody>
                    </Card>]

                </div>
                <div className="table">
                <Gauge/>
                <ObjectPicker />
                <Notification />
                <StatusItem />
                <Toast />
                <Steps 
                // ...
                stepColors={
                    {
                        // any legal CSS color values
                        activeColor: AccentPalette.BrightPurpleTint30,
                        unvisitedColor: 'hsl(240, 100%, 97%)'
                    }
                }
                steps={[
                    {
                        content: <span>C1</span>,
                        label: 'Course 1'
                    },
                    {
                        content: 'C2',
                        label: 'Course 2'
                    },
                    {
                        content: 'C3',
                        label: (<div style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div>Course 3</div>
                            <div style={{
                                color: AccentPalette.MaroonBase,
                                fontSize: '.7em',
                                lineHeight: '1',
                                fontWeight: 400
                            }}>Prerequisites: C1 and C2
                            </div>
                        </div>)
                    },
                    {
                        content: 'icon-certified',
                        label: 'Certified!'
                    }
                ]} />

                </div>
                <div className="charts">
                    <Input/>
                    <List orientation={List.ORIENTATION.HORIZONTAL} spacing={List.SPACING.LOOSE} highlight={true} >
                        <span>Item 1</span>
                        <span>Item 2</span>
                        <span>Item 3</span>
                    </List>
                    * <Panel background={Panel.BACKGROUND.BLUE}
                       border={Panel.BORDER.FULL}
                       spacing={Panel.SPACING.LOOSE}
                       padding={Panel.PADDING.LOOSE}
                       raised={Panel.RAISED.SMALL} >
                          <div>
                              ...Panel Content HTML/JSX...
                           </div>
                      </Panel>
                      <div class="row">
                        <div class="col-12">
                            <div class="subheader">Inline</div>
                            <div class="form-group form-group--inline dropdown">
                                <div class="form-group__text select">
                                    <input id="select-type-styled" value="Select an Option"></input>
                                </div>
                                <div class="dropdown__menu">
                                    <a>Option 1</a>
                                    <a>Option 2</a>
                                    <a>Option 3</a>
                                </div>
                            </div>
                            <div class="form-group form-group--inline dropdown">
                                <div class="form-group__text select">
                                    <input id="select-type-styled" value="Select an Option"></input>
                                </div>
                                <div class="dropdown__menu">
                                    <a>Option 1</a>
                                    <a>Option 2</a>
                                    <a>Option 3</a>
                                </div>
                            </div>
                            <div class="form-group form-group--inline dropdown">
                                <div class="form-group__text select">
                                    <input id="select-type-styled" value="Select an Option"></input>
                                </div>
                                <div class="dropdown__menu">
                                    <a>Option 1</a>
                                    <a>Option 2</a>
                                    <a>Option 3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

        </ThemeProvider>

  )
}

export default UserHome;



