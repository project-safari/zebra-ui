import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'blueprint-react';

const baseCodePath = 'https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/BLUEPRINT/repos/blueprint-react-examples/browse/src/examples/',
    SPACE = ' ';

export default class ExampleSection extends React.Component {
    getColClasses(span) {
        return ['col-lg-', 'col-md-', 'col-sm-'].map((value, index) => value.concat(span)).join(SPACE);
    }

    render() {
        const {classes, subheaders, sectionNotes, noGutters, columnSpan} = this.props, columnHeaders = subheaders ? subheaders.map((e, i) => {

            const colClasses = this.getColClasses(columnSpan);

                const subheaderClasses = ["subheader ex-section-col-header " + colClasses];

                if (classes && classes.column) {
                    subheaderClasses.push(classes.column);
                }
                return e ? (<div key={'ex-sec-hd-' + i}
                                 className={subheaderClasses.join(SPACE)}>
                    {e}
                </div>) : <div key={'ex-sec-hd-' + i} className={subheaderClasses.join(SPACE)} style={{maxHeight: '0', margin: '0', padding: '0'}}></div>;
            }) : [],
            columnNotes = sectionNotes ? sectionNotes.map((e, i) => {
                const notesClasses = ["ex-section-col-notes " + this.getColClasses(columnSpan)];
                if (classes && classes.column) {
                    notesClasses.push(classes.column);
                }
                return e ? (<blockquote key={'ex-sec-notes-' + i}
                                 className={notesClasses.join(SPACE)}>
                    {e}
                </blockquote>) : <div key={'ex-sec-notes-' + i} className={notesClasses.join(SPACE)} style={{maxHeight: '0', margin: '0', padding: '0'}}></div>;
            }) : [];
        let headersRow, notesRow;
        if (columnHeaders && columnHeaders.length) {
            headersRow = <div key={'ex-sec-headers-row'} className="row">{columnHeaders}</div>
        }
        if (columnNotes && columnNotes.length) {
            notesRow = <div key={'ex-sec-notes-row'} className="row">{columnNotes}</div>
        }
        const columns = React.Children.map(this.props.children, (e, i) => {
            return (<div key={'ex-sec-' + i} className={this.getColClasses(this.props.columnSpan)}>{e}</div>)
        });
        const columnRowClasses = ['row'];
        if (noGutters) {
            columnRowClasses.push('no-gutters');
        }
        let columnsRow;
        if (columns && columns.length) {
            columnsRow = <div key={'ex-sec-columns-row'} className={columnRowClasses.join(SPACE)}>{columns}</div>
        }

        let title;
        if (this.props.title) {
            title = <h3 key={'ex-sec-title'} className="display-5 section-title">{this.props.title}</h3>;
        }
        let subTitle;
        if (this.props.subTitle) {
            subTitle = <div key={'ex-sec-sub-title'} className="subtitle">{this.props.subTitle}</div>;
        }

        let sectionTools;
        if (this.props.tools && this.props.tools.length) {
            sectionTools = <div key={'ex-sec-tools'} className={'section-tools'}>{this.props.tools}</div>;
        }

        let sourceLink = null;
        if (this.props.sourceSubPath) {
            sourceLink = (<Link className="view-example-source-link" href={baseCodePath.concat(this.props.sourceSubPath)}>
                View Example Source
            </Link>);

        }

        return (<div className="section-container">
                {title}
                {sectionTools}
                <div className="section" style={this.props.sectionStyles}>
                    {subTitle}
                    {headersRow}
                    {notesRow}
                    {columnsRow}
                </div>
                {sourceLink}
            </div>
        );
    }
}

ExampleSection.propTypes = {
    title: PropTypes.node, // section title
    tools: PropTypes.node, // for instance a set of checkboxes, selects or other components to allow user of example to set props.
    subTitle: PropTypes.node, // title for each row of examples
    subheaders: PropTypes.arrayOf(PropTypes.node),
    sectionNotes: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.node.isRequired,
    columnSpan: PropTypes.number,
    noGutters: PropTypes.bool,
    /** todo validate this as a url path segment */
    sourceSubPath: PropTypes.string,
    classes: PropTypes.shape({
        column: PropTypes.string
    }),
    sectionStyles: PropTypes.object
};

ExampleSection.defaultProps = {
    columnSpan: 3,
    noGutters: false,
    tools: [],
    subheaders: [],
    sectionNotes: [],
    sectionStyles: {}
};



