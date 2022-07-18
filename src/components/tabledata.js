import React from 'react';
import {MoreLessPanel, Progressbar, Dropdown, Icon} from 'blueprint-react';
import _ from 'lodash';

const PERSON_COLUMNS = [
    {
        Header: 'First Name',
        tooltips: true,
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        tooltips: true,
        accessor: 'lastName',
    },
    {
        Header: 'Age',
        accessor: 'age',
        tooltips: true
    },
    {
        Header: 'Address',
        accessor: 'address',
        width: 300,
        tooltips: true
    },
    {
        Header: 'State',
        accessor: 'state',
        width: 200,
        tooltips: true
    },
    {
        Header: 'City',
        accessor: 'city',
        width: 200,
        tooltips: true
    }
];

const PERSON_DATA = [
    {
        firstName: 'George',
        lastName: 'Smith',
        age: 54,
        address: '111 Main St',
        state: 'California',
        city: 'San Jose'
    },
    {
        firstName: 'Freddy',
        lastName: 'Farmer',
        age: 54,
        address: '4456 Silva St',
        state: 'Utah',
        city: 'Cedar City'
    },
    {
        firstName: 'Mary',
        lastName: 'Martin',
        age: 53,
        address: '879 Sutter Ave',
        state: 'California',
        city: 'San Jose'
    },
    {
        firstName: 'Cathy',
        lastName: 'Jones',
        age: 23,
        address: '456 Gamble Blvd',
        state: 'Nevada',
        city: 'Las Vegas'
    },
    {
        firstName: 'Henry',
        lastName: 'Fargo',
        age: 102,
        address: '4023 Orme St',
        state: 'California',
        city: 'Palo Alto'
    }
];

const TABLE_DATA = [
    {
        _id: 0, // default keyField accessor for Selectable
        startTs: '2018-11-17T18:13:01.000Z',
        endTs: '2019-03-05T18:14:00.999Z',
        ts: '2018-12-19T18:13:30.999Z',
        recordId: 1542,
        recordCount: 0,
        color: 'red',
        progressColor: 'red'
    },
    {
        _id: 1, // default keyField accessor for Selectable
        startTs: '2016-12-05T18:14:01.000Z',
        endTs: '2018-12-08T18:15:00.999Z',
        ts: '2018-12-11T18:14:30.999Z',
        recordId: 6478,
        recordCount: 2,
        color: 'orange',
        progressColor: 'orange'
    },
    {
        _id: 2, // default keyField accessor for Selectable
        startTs: '2018-08-09T18:25:01.000Z',
        endTs: '2019-03-17T18:26:00.999Z',
        ts: '2018-12-04T18:25:30.999Z',
        recordId: 7778,
        recordCount: 3,
        color: 'red',
        progressColor: 'red'
    },
    {
        _id: 3, // default keyField accessor for Selectable
        startTs: '2018-12-04T18:28:01.000Z',
        endTs: '2018-12-19T18:29:00.999Z',
        ts: '2018-12-19T18:28:30.999Z',
        recordId: 3758,
        recordCount: 12,
        color: 'blue',
        progressColor: 'blue'
    },
    {
        _id: 4, // default keyField accessor for Selectable
        startTs: '2016-12-04T18:13:01.000Z',
        endTs: '2018-24-19T18:14:00.999Z',
        ts: '2018-12-17T18:13:30.999Z',
        recordId: 7933,
        recordCount: 1,
        color: 'orange',
        progressColor: 'orange'
    },
    {
        _id: 5, // default keyField accessor for Selectable
        startTs: '2016-12-04T18:25:00.000Z',
        endTs: '2019-03-14T18:15:00.999Z',
        ts: '2018-12-19T18:14:30.999Z',
        recordId: 6155,
        recordCount: 2,
        color: 'blue',
        progressColor: 'blue'
    },
    {
        _id: 6, // default keyField accessor for Selectable
        startTs: '2016-12-22T18:25:01.000Z',
        endTs: '2018-12-19T18:26:00.999Z',
        ts: '2018-12-19T18:25:30.999Z',
        recordId: 4632,
        recordCount: 3,
        color: 'red',
        progressColor: 'red'
    },
    {
        _id: 7, // default keyField accessor for Selectable
        startTs: '2016-12-27T18:28:01.000Z',
        endTs: '2018-12-17T18:29:00.999Z',
        ts: '2018-12-19T18:28:30.999Z',
        recordId: 7888,
        recordCount: 12,
        color: 'blue',
        progressColor: 'blue'
    },
    {
        _id: 8, // default keyField accessor for Selectable
        startTs: '2014-02-09T18:41:01.000Z',
        endTs: '2018-12-19T18:42:00.999Z',
        ts: '2018-12-19T18:41:30.999Z',
        recordId: 2387,
        recordCount: 1,
        color: 'orange',
        progressColor: 'orange'
    },
    {
        _id: 9, // default keyField accessor for Selectable
        startTs: '2018-07-10T19:01:01.000Z',
        endTs: '2018-24-17T19:02:00.999Z',
        ts: '2018-12-19T19:01:30.999Z',
        recordId: 5532,
        recordCount: 1,
        color: 'red',
        progressColor: 'red'
    },
    {
        _id: 10, // default keyField accessor for Selectable
        startTs: '2014-09-08T19:02:01.000Z',
        endTs: '2019-03-19T19:02:32.000Z',
        ts: '2018-12-19T19:02:16.500Z',
        recordId: 9977,
        recordCount: 1,
        color: 'blue',
        progressColor: 'blue'
    },
    {
        _id: 11, // default keyField accessor for Selectable
        startTs: '2018-01-17T09:41:01.000Z',
        endTs: '2018-05-19T18:42:00.999Z',
        ts: '2018-12-19T18:41:30.999Z',
        recordId: 1122,
        recordCount: 6,
        color: 'orange',
        progressColor: 'orange'
    },
    {
        _id: 12, // default keyField accessor for Selectable
        startTs: '2016-12-09T09:01:01.000Z',
        endTs: '2018-10-19T19:02:00.999Z',
        ts: '2018-12-19T19:01:30.999Z',
        recordId: 2947,
        recordCount: 3,
        color: 'blue',
        progressColor: 'blue'
    },
    {
        _id: 13, // default keyField accessor for Selectable
        startTs: '2017-12-17T19:02:01.000Z',
        endTs: '2018-24-02T19:02:32.000Z',
        ts: '2018-12-19T19:02:16.500Z',
        recordId: 4777,
        recordCount: 4,
        color: 'orange',
        progressColor: 'orange'
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
// large data set
/* for(let i = 14; i < 10000; i++) {
    TABLE_DATA.push({
        _id: i, // default keyField accessor for Selectable
        startTs: '2018-12-19T19:01:01.000Z',
        endTs: '2018-12-19T19:02:00.999Z',
        ts: '2018-12-19T19:01:30.999Z',
        recordId: 'qiL3tUaq20190119170014976097' + i,
        recordCount: Math.floor(14 * Math.random())
    });
}*/

const SELECT_TABLE_COLUMNS = [
    {
        id: 'start',
        Header: 'Start',
        accessor: 'startTs',
        tooltips: true,
        filter: {
            property: 'start',
            label: 'Start Time',
            type: 'text'
        },
        width: 215
    },
    {
        id: 'end',
        Header: 'End',
        accessor: 'endTs',
        tooltips: true,
        filter: {
            label: 'End Time',
            type: 'text'
        },
        width: 215
    },
    {
        id: 'current',
        Header: 'Current',
        accessor: 'ts',
        tooltips: true,
        filter: {
            type: 'text'
        }
    },
    {
        id: 'count',
        Header: 'Count',
        accessor: 'recordCount',
        filter: {
            type: 'number'
        },
        tooltips: true, // default value truthy? support Function-s
        width: 70
    },
    {
        width: 300,
        fixed: 'right',
        Cell: row => (<MoreLessPanel
            key={row.name}
            moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.NONE}
            collapsedHeight={'48px'}
            moreActionNode={'Show 3 more'}
            lessActionNode={'Show 3 less'}
            moreLessAlignment={MoreLessPanel.MORE_LESS_ALIGNMENT.LEFT}
        >
            <Progressbar key="scp-0" style={{marginTop: '1.5em', marginBottom: '3em'}}
                color={'orange'}
                size={Progressbar.SIZE.SMALL}
                progress={25}
                label={`${'Percentage of CRITICAL'} (${'25'})%`}
            />
            <Progressbar key="scp-1" style={{marginBottom: '3em'}}
                color={'red'}
                size={Progressbar.SIZE.SMALL}
                progress={35}
                label={`${'Percentage of MAJOR'} (${'35'})%`}
            />
            <Progressbar key="scp-2" style={{marginBottom: '3em'}}
                color={'blue'}
                size={Progressbar.SIZE.SMALL}
                progress={50}
                label={`${'Percentage of MINOR'} (${'50'})%`}
            />
            <Progressbar key="scp-3"
                color={'red'}
                size={Progressbar.SIZE.SMALL}
                progress={75}
                label={`${'Percentage of WARNING'} (${'75'})%`}
            />
        </MoreLessPanel>)
    }];

const TABLE_COLUMNS1 = [
    {
        id: 'start',
        Header: 'Start',
        accessor: 'startTs',
        tooltips: true,
        filter: {
            property: 'start',
            label: 'Start Time',
            type: 'text'
        },
        width: 215
    },
    {
        id: 'end',
        Header: 'End',
        accessor: 'endTs',
        tooltips: true,
        filter: {
            label: 'End Time',
            type: 'text'
        },
        width: 215
    },
    {
        id: 'current',
        Header: 'Current',
        accessor: 'ts',
        tooltips: true,
        filter: {
            type: 'text'
        }
    },
    {
        id: 'count',
        Header: 'Count',
        accessor: 'recordCount',
        filter: {
            type: 'number'
        },
        tooltips: true, // default value truthy? support Function-s
        width: 70
    },
    {
        width: 300,
        fixed: 'right',
        Cell: row => (<MoreLessPanel
            key={row.name}
            moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.NONE}
            collapsedHeight={'48px'}
            moreActionNode={'Show 3 more'}
            lessActionNode={'Show 3 less'}
            moreLessAlignment={MoreLessPanel.MORE_LESS_ALIGNMENT.LEFT}
        >
            <Progressbar key="scp-0" style={{marginTop: '1.5em', marginBottom: '3em'}}
                color={'orange'}
                size={Progressbar.SIZE.SMALL}
                progress={25}
                label={`${'Percentage of CRITICAL'} (${'25'})%`}
            />
            <Progressbar key="scp-1" style={{marginBottom: '3em'}}
                color={'red'}
                size={Progressbar.SIZE.SMALL}
                progress={35}
                label={`${'Percentage of MAJOR'} (${'35'})%`}
            />
            <Progressbar key="scp-2" style={{marginBottom: '3em'}}
                color={'blue'}
                size={Progressbar.SIZE.SMALL}
                progress={50}
                label={`${'Percentage of MINOR'} (${'50'})%`}
            />
            <Progressbar key="scp-3"
                color={'red'}
                size={Progressbar.SIZE.SMALL}
                progress={75}
                label={`${'Percentage of WARNING'} (${'75'})%`}
            />
        </MoreLessPanel>)
    }];

const TABLE_COLUMNS2 = [
    {
        id: 'start',
        Header: 'Start',
        accessor: 'startTs',
        filter: {
            type: 'text'
        },
        tooltips: true,
        width: 150
    },
    {
        id: 'end',
        Header: 'End',
        accessor: 'endTs',
        filter: {
            type: 'text'
        },
        width: 150,
        tooltips: true
    },
    {
        id: 'current',
        Header: 'Current',
        accessor: 'ts',
        filter: {
            type: 'text'
        },
        tooltips: true,
        width: 215
    },
    {
        id: 'count',
        Header: 'Count',
        accessor: 'recordCount',
        filter: {
            type: 'number'
        },
        tooltips: true,
        width: 250
    },
    {
        id: 'color',
        Header: 'Color',
        accessor: 'color',
        tooltips: true,
        filter: {
            property: 'color',
            label: 'Color',
            type: 'textoptions',
            options: () => ['red', 'orange', 'blue']
        },
        width: 250
    }];

const TABLE_SORT_COLUMNS = [
    {
        id: 'start',
        Header: 'Start',
        accessor: 'startTs', // (o) => moment(o['startTs']).format('YYYY MM DD'),
        filter: {
            type: 'text'
        },
        tooltips: true,
        width: 150
    },
    {
        id: 'end',
        Header: 'End',
        accessor: 'endTs',
        filter: {
            type: 'text'
        },
        tooltips: true,
        width: 150
    },
    {
        id: 'current',
        Header: 'Current',
        accessor: 'ts',
        filter: {
            type: 'text'
        },
        tooltips: true,
        width: 215
    },
    {
        id: 'count',
        Header: 'Count',
        accessor: 'recordCount',
        filter: {
            type: 'number'
        },
        tooltips: true,
        width: 250
    },
    {
        id: 'color',
        Header: 'Color',
        accessor: 'color',
        tooltips: true,
        filter: {
            property: 'color',
            label: 'Color',
            type: 'textoptions',
            options: () => ['red', 'orange', 'blue']
        },
        width: 250
    }];

const TABLE_COLUMNS3 = [
    {
        id: 'start',
        Header: 'Start',
        accessor: 'startTs',
        filter: {
            type: 'datetime'
        },
        tooltips: true,
        width: 215
    },
    {
        id: 'end',
        Header: 'End',
        accessor: 'endTs',
        filter: {
            type: 'text'
        },
        tooltips: true,
        width: 215
    },
    {
        id: 'current',
        Header: 'Current',
        accessor: 'ts',
        tooltips: true,
        filter: {
            type: 'text'
        }
    },
    {
        id: 'count',
        Header: 'Count',
        accessor: 'recordCount',
        filter: {
            type: 'number'
        },
        tooltips: true,
        width: 70
    },
    {
        id: 'color',
        Header: 'Color',
        accessor: 'color',
        tooltips: true,
        filter: {
            property: 'color',
            label: 'Color',
            type: 'textoptions',
            options: () => ['red', 'orange', 'blue']
        }
    }];

const selectItems = _.range(1, 10).map((item) => ({
    name: 'item' + item,
    value: item,
    label: 'Item ' + item
}));

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

const TABLE_COLUMNS4 = [
    {
        id: 'start',
        Header: 'Start',
        accessor: 'startTs',
        tooltips: true,
        filter: {
            property: 'start',
            label: 'Start Time',
            type: 'text'
        },
        width: 215,
    },
    {
        id: 'end',
        Header: 'End',
        accessor: 'endTs',
        tooltips: true,
        filter: {
            label: 'End Time',
            type: 'text'
        },
        width: 215
    },
    {
        id: 'current',
        Header: 'Current',
        accessor: 'ts',
        filter: {
            type: 'text'
        }
    },
    {
        Header: 'Dropdown',
        width: 300,
        Cell: (row) => (
            <Dropdown type={Dropdown.TYPE.ICON} icon={Icon.TYPE.MORE} size={Icon.SIZE.SMALL} items={menuItems}/>
        )
    }
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

export {
    TABLE_DATA,
    TABLE_DATA2,
    TABLE_COLUMNS1,
    TABLE_COLUMNS2,
    TABLE_COLUMNS3,
    TABLE_COLUMNS4,
    TABLE_COLUMNS5,
    SELECT_TABLE_COLUMNS,
    PERSON_COLUMNS,
    PERSON_DATA,
    TABLE_SORT_COLUMNS
};