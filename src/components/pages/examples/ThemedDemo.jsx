import React from 'react';
import PropTypes from 'prop-types';

import {List, Panel, Select, Switch} from 'blueprint-react';

import Examples from './Example';
import ExamplesHeader from './ExamplesHeader';

/**
 * Composite example panel, providing dropdowns to render variations of components that support size and type
 *
 * @see Examples
 * @see ExamplesHeader
 */
export default class ThemedDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: props.typeOptions.defaultValue,
            size: props.sizeOptions.defaultValue,
            flatten: !!props.flatten
        };
    }

    onChangeTheme = (option) => {
        if (option && option.length) {
            const value = option[0].value;
            this.setState({
                theme: value
            });
        }
    };

    onChangeSize = (option) => {
        if (option && option.length) {
            this.setState({
                size: option[0].value
            });
        }
    };


    onListVariations = (checkedAr, domElement) => {
        this.setState({
            flatten: domElement.checked
        });
    };

    renderExample(theme, size, title) {
        return (
            <Panel key={title} background={this.props.panelBackground(theme)}>
                <Examples columnSpan={this.props.columnSpan} exampleHeaderNotes={this.props.exampleHeaderNotes}
                          sectionExamples={[
                              {
                                  examplesSection: {
                                      examples: this.props.renderExamples(theme, size),
                                      exampleHeaders: [<span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{title}</span>]
                                  }
                              }
                          ]}/>
            </Panel>

        );
    }

    renderExamples(typeEntries, sizeEntries) {
        if (this.state.flatten) {
            return sizeEntries.map(([sizeLabel, size]) => {
                return typeEntries.map(([themeLabel, theme]) => this.renderExample(theme, size, `Type: ${themeLabel}, Size: ${sizeLabel}`))
            });
        }
        return this.renderExample(this.state.theme, this.state.size);
    }

    render() {
        const {title, typeOptions, sizeOptions, allVariations} = this.props;
        const {theme, size, flatten} = this.state;
        const sizeEntries = Object.entries(sizeOptions.values);
        const typeEntries = Object.entries(typeOptions.values);
        const sizes = sizeEntries.map(([name, value]) => ({
            label: name,
            value: value,
            selected: size === value
        }));
        const themes = typeEntries.map(([name, value]) => ({label: name, value: value, selected: theme === value}));

        const switchVariationsElm = allVariations ? (<div style={{height: flatten ? '4rem' : 'inherit'}}>
            <div className="pull-right">
                <Switch label="List All Variations" checked={flatten} onChange={this.onListVariations}/>
            </div>
        </div>) : null;

        return (
            <div>
                <ExamplesHeader title={title}/>
                {switchVariationsElm}
                {
                    flatten ? null : (
                        <List orientation={List.ORIENTATION.HORIZONTAL} spacing={List.SPACING.COMPRESSED}>
                            <Select label="Type" name="theme" items={themes} placeholder="Select a theme" onChange={this.onChangeTheme}/>
                            <Select label="Size" name="size" items={sizes} placeholder="Select a size" onChange={this.onChangeSize}/>
                        </List>
                    )
                }
                {this.renderExamples(typeEntries, sizeEntries)}
            </div>
        );
    }
}

const Option = {
    values: PropTypes.object.isRequired,
    defaultValue: PropTypes.string.isRequired
};

ThemedDemo.propTypes = {
    title: PropTypes.string.isRequired,
    typeOptions: PropTypes.shape(Option).isRequired,
    sizeOptions: PropTypes.shape(Option).isRequired,
    renderExamples: PropTypes.func.isRequired,
    columnSpan: PropTypes.number,
    /**
     * Should Switch appear in-order
     */
    allVariations: PropTypes.bool,
    flatten: PropTypes.bool,
    panelBackground: PropTypes.func,
    exampleHeaderNotes: PropTypes.node
};

ThemedDemo.defaultProps = {
    columnSpan: 1,
    allVariations: false,
    flatten: false,
    panelBackground: () => {
        return Panel.BACKGROUND.DEFAULT;
    },

};

