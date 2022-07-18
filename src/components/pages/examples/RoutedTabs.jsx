import React from 'react';
import PropTypes from 'prop-types';

import {
    Link
} from 'react-router-dom';


const _CLASSES = {
    MAIN: 'tab',
    TABS: 'tabs',
    HEADING: 'tab__heading'
};
/**
 * @class
 * @extends React.Component
 */
class RoutedTabs extends React.Component {
    /**
     * @description override for custom tab rendering.
     * @param cfg {Object}
     * @returns {XML}
     */
    generateTab(cfg) {
        let cls = (location.pathname == cfg.to ? 'tab active' : 'tab');
        return (
            <li key={cfg.to} className={cls}>
                <Link to={cfg.to} >
                    <div className="tab__heading" title={cfg.title}>{cfg.label}</div>
                </Link>
            </li>
        );
    }

    render() {
        let tabs = [];

        if (this.props.tabs.length) {
            tabs = this.props.tabs.map(this.generateTab.bind(this));
        } else if (this.props.children) {
            React.Children.map(this.props.children, (child, index) => {
                tabs.push(<li className={_CLASSES.MAIN} key={index}>{child}</li>);
            });
        }

        return (
            <div className={this.props.type}>
                <ul className={_CLASSES.TABS}>
                    {tabs}
                </ul>
            </div>
        );
    }
}

/**
 * @constant RoutedTabs.TYPE
 * @property PRIMARY {String}
 * @property SECONDARY {String}
 */
RoutedTabs.TYPE = {
    PRIMARY: 'primary-tabs',
    SECONDARY: 'secondary-tabs'
};

/**
 * propTypes
 * @property {object}
 */
RoutedTabs.propTypes = {
    type: PropTypes.oneOf(Object.values(RoutedTabs.TYPE)),
    children: PropTypes.node,
    tabs: PropTypes.array
};

RoutedTabs.defaultProps = {
    type: RoutedTabs.TYPE.SECONDARY,
    tabs: []
};

export default RoutedTabs;