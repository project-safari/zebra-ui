import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ExamplesHeader from './ExamplesHeader';
import ExampleSection from './ExampleSection';

import './Example.scss';

export default class Examples extends React.Component {

    render() {
        let {sectionExamples = [], exampleHeader, exampleSubHeader,
            exampleComponents, exampleHeaderNotes, designSubPath,
            sourceSubPath, columnSpan, sectionStyles, noGutters,
            examplesStyles, ...rest} = this.props;

        let sections = sectionExamples.map((sectionExample, i) => {
            let subheaders, sectionNotes;
            const exampleHeaders = _.get(sectionExample, 'examplesSection.exampleHeaders'),
                exampleNotes = _.get(sectionExample, 'examplesSection.exampleNotes');

            if (exampleHeaders && exampleHeaders.length) {
                if (!subheaders) {
                    subheaders = [];
                }

                for (let j = 0, l = exampleHeaders.length; j < l; j++) {
                    subheaders.push(exampleHeaders[j]);
                }
            }

            if (exampleNotes && exampleNotes.length) {
                if (!sectionNotes) {
                    sectionNotes = [];
                }

                for (let j = 0, l = exampleNotes.length; j < l; j++) {
                    sectionNotes.push(exampleNotes[j]);
                }
            }

            return <ExampleSection key={'esection-' + i} columnSpan={sectionExample.columnSpan || columnSpan}
                                   title={sectionExample.headerText}
                                   tools={sectionExample.tools}
                                   subTitle={sectionExample.examplesSection.subTitle}
                                   subheaders={subheaders} sectionNotes={sectionNotes} sectionStyles={sectionExample.sectionStyles}
                                   sourceSubPath={sectionExample.sourceSubPath} noGutters={this.props.noGutters}>
                {sectionExample.examplesSection.examples}
            </ExampleSection>;
        });

        let controlsContainer;
        if( exampleComponents ) {
            controlsContainer = <div key={'examples-components-container'} className={'examples-components-container'}>{exampleComponents}</div>
        }
        return (<div key={'examples-root-div'} className="examples" {...rest}>
            <ExamplesHeader title={exampleHeader}
                            subTitle={exampleSubHeader}
                            notes={exampleHeaderNotes}
                            designSubPath={designSubPath}
                            sourceSubPath={sourceSubPath}/>
            { controlsContainer }
            <div className={'examples--section-container'} style={examplesStyles}>{sections}</div>
            {this.props.children}
        </div>);
    }
}


Examples.propTypes = {
    exampleHeader: PropTypes.string,
    exampleSubHeader: PropTypes.node,
    exampleComponents: PropTypes.node,
    exampleHeaderNotes: PropTypes.node,
    examplesStyles: PropTypes.object,
    sectionExamples: PropTypes.arrayOf(PropTypes.shape({
        headerText: PropTypes.node, // larger font section title
        tools: PropTypes.node,
        sectionStyles: PropTypes.object,
        noGutters: PropTypes.bool,
        examplesSection: PropTypes.shape({
            /**
             * section sub-title with smaller font size than headerText.
             * is usually used with and without headerText
             * For example you may have a section for which you want to define a headerText, then broken up into
             * sub-sections using subTitle.
             */
            subTitle: PropTypes.node,
            exampleHeaders: PropTypes.arrayOf(PropTypes.node), // a row of headers aligned with the component examples within the section.  typically the same length as the 'examples' array.
            exampleNotes: PropTypes.arrayOf(PropTypes.string), // a row of notes aligned with the component examples within the section.  typically the same length as the 'examples' array.
            /**
             * @property examples
             * an array of React Components
             */
            examples: PropTypes.arrayOf(PropTypes.node).isRequired
        }),
        columnSpan: PropTypes.number, // allow each section to have its own defined number of columns per example
        sourceSubPath: PropTypes.string
    })),
    sourceSubPath: PropTypes.string,
    designSubPath: PropTypes.string,
    targetName: PropTypes.string,
    columnSpan: PropTypes.number,
    children: PropTypes.node
};


Examples.defaultProps = {
    exampleHeader: '',
    examplesStyles: {},
    columnSpan: 3
};