import React from 'react';
import {Button, Switch, FilterableTable, SelectTable, Table, Dropdown, Tabs, Icon} from 'blueprint-react';


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

/**
 * Tables: Page for more advanced examples of our table component
 */
class CiscoTables extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
    }

    getSelected = (o) => {
        const output = console.table('getSelected args %O: ', o);
        this.setState({message: output});
    }

    getTableColumns() {
        const columns = [...this.props.columns];
        if (this.props.getOptions) {
            columns.push(
                {
                    Header: '',
                    accessor: '',
                    width: 50,
                    className: 'rt-table--dropdown',
                    sortable: false,
                    resizable: false,
                    filterable: false,
                    Cell: (row) => {
                        const options = this.props.getOptions(row);
                        return options && options.length ? (
                            <div className="last-cell" onClick={e => e.stopPropagation()}>
                                <Dropdown
                                    type={Dropdown.TYPE.ICON}
                                    menuDirection={Dropdown.MENU_DIRECTION.LEFT}
                                    icon={Icon.TYPE.MORE}
                                    items={options}
                                />
                            </div>
                        ) : null;
                    }
                }
            );
        }
        return columns;
    }

    toolCell = () => {
        return {
            preventOverflow: {
                boundariesElement: 'scrollParent'

            },
            flip: {
                boundariesElement: 'scrollParent'
            }
        };
    }

    render() {
        return (
            <div className='Table'>
                <FilterableTable key="tooltips" data={TABLE_DATA2}
                    keyField={'_id'}
                    columns={TABLE_COLUMNS5}

                    /**
                     * By default the filter logic (AND/OR) is decided by the 'filterLogic' props.
                     * If you want to group categrories to have filter logic other than the one set by 'filterLogic', use filterLogicGrouping
                     */
                    filterLogic={FilterableTable.FILTER_LOGIC.AND}
                    /**
                     *
                     * if filterLogicGrouping is set to true, all categories are grouped with logic opposite to the one set by 'filterLogic'
                     * If no dupilcate category is applied, filterLogicGroping has no effect and logic is set according to filterLogic
                     * Example: FabricName == 'fab1' AND status === 'active'
                     * If filterLogicGrouping={true} and duplicate catogery is supplied, same category is grouped with logic opposite to the one set by 'filterLogic'
                     * Example: (FabricName == 'fab1' OR FabricName == 'external') AND status === 'active'
                     * You can include or exclude grouping by passing object instead of boolean to filterLogicGrouping which takes the format
                     * {
                     *   include: [<String>] // By default evey category is inclueded
                     *   exclude: [<String>] // By default no category is inclueded
                     * }
                     *
                     * */
                    filterLogicGrouping={{
                        exclude: ['Count']
                    }}
                    getSelected={this.getSelected}

                />
            </div>
            )   
        }
    }

export default CiscoTables;
