import React from 'react';
import {Sidebar, Icon, Header, Table} from '@bui/magnetic';
import {ThemeProvider} from "@bui/material/styles";
import theme from "@bui/theming";
import {AlertBadge, Dropdown, Card, CardHeader, CardBody, MoreLessPanel, Button, Checkbox, CollapseButton, ComponentHeader, BasePalette} from 'blueprint-react'
import "./AdminHome.scss";

const menuItems = [
    {
        menuOptions: {
            title: 'Reservation',
            selection: 'multi'
        }
    },
    {
        label: 'Reserve',
        toggleable: true
    },
    {
        label: 'Join Queue',
        items: [
            {
                menuOptions: {
                    title: 'Options',
                    selection: 'single',
                    toggleable: true // all items are toggleable unless indicated otherwise by a menu item object
                }
            },
            {
                label: 'Join Queue',
            },
            {
                label: 'Reserve at Specific Time',
            },
            'dropdown__divider',
            {
                label: 'Notify When Available',
                toggleable: false // overrides the default (as defined above by menuOptions.toggleableDefault) for this list of items
            },
            {
                label: 'Options',
                items: [
                    {
                        label: 'Item 3a',
                    },
                    {
                        label: 'Item 3b',
                    }
                ]
            }
        ]
    },
    {
        label: 'Setup Unavailable',
        disabled: true
    },
    {
        label: 'Request Access'
    }
];

const TABLE_DATA2 = [
    {
        _id: 0,
        type: 'Server',
        label: 'Setup = Lab',
        state: 'Available',
        count: 3,
        reserve: 'Reserve',
    },
    {
        _id: 1,
        type: 'Leaf',
        label: 'Model = xyz',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',
    },
    {
        _id: 2,
        type: 'Node',
        label: 'Model = xyz',
        state: 'Available',
        count: 3,
        reserve: 'Reserve',

    },
    {
        _id: 3,
        type: 'Server',
        label: 'Model = xyz',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',
        

    },
    {
        _id: 4,
        type: 'Leaf',
        label: 'Model = xyz',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 5,
        type: 'Node',
        label: 'Model = xyz',
        state: 'Available',
        count: 3,
        reserve: 'Reserve',

    },
    {
        _id: 6,
        type: 'Leaf',
        label: 'Model = xyz',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 7,
        type: 'Server',
        label: 'Setup = Lab15',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 8,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 9,
        type: 'APIC',
        label: 'Model = xyz',
        state: 'Available',
        count: 3,
        reserve: 'Reserve',

    },
    {
        _id: 10,
        type: 'APIC',
        label: 3,
        state: 'Available',
        count: 3,
        reserve: 'Reserve',

    },
    {
        _id: 11,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Available',
        count: 3,
        reserve: 'Reserve',

    },
    {
        _id: 12,
        type: 'Leaf',
        label: 'Model = xyz',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 13,
        type: 'Leaf',
        label: 'Model = xyz',
        state: 'Available',
        count: 3,
        reserve: 'Reserve',

    },
    {
        _id: 14,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 15,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 16,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 17,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 18,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 19,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 20,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 21,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 22,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 23,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 24,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 25,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 26,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 27,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
    {
        _id: 28,
        type: 'Server',
        label: 'Setup = Lab 14',
        state: 'Unavailable',
        count: 3,
        reserve: 'Join Queue',

    },
];
const TABLE_COLUMNS5 = [
    {
        id: 'type',
        Header: 'Type',
        accessor: 'type',
        filter: {
            type: 'textoptions',
            options: () => ['Server', 'Leaf', 'Node', 'APIC']
        }
    },
    {
        id: 'state',
        Header: 'State',
        accessor: 'state',
        filter: {
            type: 'textoptions',
            options: () => ['Available', 'Unavailable']
        }
    },
    {
        id: 'label',
        Header: 'label',
        accessor: 'label',
        filter: {
            type: 'textoptions',
            options: () => ['Setup = Lab', 'Model = xyz']
        }
    },
    {
        id: 'count',
        Header: 'Count',
        accessor: 'count',
        filter: {
            type: "number"
        }
    },
    {
        id: 'reserve',
        Header: 'Reserve',
        width: 300,
        Cell: (row) => (
            <Dropdown type={Dropdown.TYPE.ICON} icon={Icon.TYPE.MORE} size={Icon.SIZE.SMALL} items={menuItems}/>
        )
    },
];

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
                <Header spacing={Header.SPACING.COMPRESSED} heading={<span>Admin Dashboard <span style={{fontSize: '50%'}}>(Project Marigold)</span></span>} tools={tools}/>

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
                    <Table data={TABLE_DATA2} columns={TABLE_COLUMNS5}/> 
                </div>
                <div className="charts">

                </div> 
            </div>
        </div>
        </ThemeProvider>

  )
}

export default UserHome;

