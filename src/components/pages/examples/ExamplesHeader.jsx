import React from 'react';
import PropTypes from 'prop-types';
import {baseDesignsUrl, baseCodePath} from './constants';
import {Link} from 'blueprint-react';


export default class ExamplesHeader extends React.Component {
    render() {
        const {title, subTitle, notes, designSubPath, sourceSubPath} = this.props,
            header = title ? (<div className="flex-center-vertical">
                    <h2 className="display-1 flex-fluid">{title}</h2>
                </div>
            ) : null,
            headerSubTitle = subTitle ? <h3 className="display-4 header-subtitle flex-fluid">{subTitle}</h3> : null,
            headerNotes = notes && notes.length ? <blockquote className="examples-subheader">{notes}</blockquote> : null;

        let designLink = null;
        if (designSubPath) {
            designLink = <Link href={baseDesignsUrl.concat(designSubPath)} target="designSubPathWin" name="exampleDesignName">UX Design: {title}</Link>;
        }

        let sourceLink = null;
        if (sourceSubPath) {
            sourceLink = (<Link className="view-example-source-link" href={baseCodePath.concat(sourceSubPath)}>
                View Example Source
            </Link>);

        }

        return header === null && headerNotes === null ? null : (<div className="examples-header base-margin-bottom">
                {header}
                {headerSubTitle}
                {headerNotes}
                {designLink}
                {sourceLink}
            </div>
        );
    }
}

ExamplesHeader.propTypes = {
    title: PropTypes.node.isRequired,
    subTitle: PropTypes.node,
    notes: PropTypes.node,
    /** portion of url path to corresponding UX design */
    designSubPath: PropTypes.string
};

ExamplesHeader.defaultProps = {
    title: '',
    subTitle: ''
};


