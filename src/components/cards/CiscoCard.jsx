import React from 'react';

import {Card, CardHeader, CardBody, MoreLessPanel, Button, Checkbox, Icon, CollapseButton, ComponentHeader, BasePalette} from 'blueprint-react';
import Examples from '../Example';


const HEADER_CONTENT = (<div className="text-center">
    Header
</div>);

const BODY_CONTENT = [<h4 key="cisco-card-h4" className="display-4">IP Phone 8841</h4>,
    <div className="subtitle">Cost-effective and secure voice communications ideal for small to mid-sized businesses</div>,
    <div className="flex-center-vertical base-margin-top">
        <div className="rating rating--alt">
            <div className="rating__stars">
                <div className="rating__star" title="5 Stars" tabIndex="0">
                    <span className="icon-star"></span>
                </div>
                <div className="rating__star active" title="4 Stars" tabIndex="0">
                    <span className="icon-star"></span>
                </div>
                <div className="rating__star active" title="3 Stars" tabIndex="0">
                    <span className="icon-star"></span>
                </div>
                <div className="rating__star active" title="2 Stars" tabIndex="0">
                    <span className="icon-star"></span>
                </div>
                <div className="rating__star active" title="1 Star" tabIndex="0">
                    <span className="icon-star"></span>
                </div>
            </div>
        </div>
        <span className="qtr-margin-left">(3)</span>
    </div>,
    <div className="base-margin-top">
        <div className="subtitle">Starting At:</div>
        <h3 className="display-4">$349.00 (AUD)</h3>
        <button className="btn btn--small btn--primary base-margin-top">Shop Now</button>
    </div>
];

const SHORT_TEXT_CONTENT = "The Hitch Hiker's Guide to the Galaxy has a few things to say on the subject of towels."
const LONG_TEXT_CONTENT = "A towel, it says, is about the most massively useful thing an interstellar" +
    " hitch hiker can have. Partly it has great practical value - you can wrap it around you for warmth as" +
    " you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble-sanded beaches" +
    " of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars which shine so" +
    " redly on the desert world of Kakrafoon; use it to sail a mini raft down the slow heavy river Moth; wet it" +
    " for use in hand-to-hand-combat; wrap it round your head to ward off noxious fumes or to avoid the gaze of the" +
    " Ravenous Bugblatter Beast of Traal (a mindboggingly stupid animal, it assumes that if you can't see it, it can't" +
    " see you - daft as a bush, but very ravenous); you can wave your towel in emergencies as a distress signal, and of" +
    " course dry yourself off with it if it still seems to be clean enough."


export default class CiscoCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: !!props.collapsed,
            collapsed1: !!props.collapsed,
            collapsedControlled: !!props.collapsed
        };
    }

    collapse = () => {
        this.setState({
            collapsed: true
        });
    }

    collapse1 = () => {
        this.setState({
            collapsed1: true
        });
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const titledHeader = {
            title: 'Card Title',
            subtitle: 'Card SubTitle'
        }

        const iconWithTitleHeader = {
            icon: <Icon key="cisco-card-header-icon" type={Icon.TYPE.CHECK_OUTLINE} size={Icon.SIZE.MEDIUM_SMALL} style={{color: '#6ebe4a'}}/>,
            title: 'Card Title'
        }

        const iconWithTitleAndSubTitleHeader = {
            icon: <Icon key="cisco-card-header-icon" type={Icon.TYPE.CHECK_OUTLINE} size={Icon.SIZE.MEDIUM_SMALL} style={{color: '#6ebe4a'}}/>,
            title: 'Card Title',
            subtitle: 'Card SubTitle'
        }

        const cards1 = [
            <Card key="cisco-card-1" cardAlignment={Card.ALIGNMENT.DEFAULT} headerContent={titledHeader}
                  bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."/>,
            <Card key="cisco-card-2" cardAlignment={Card.ALIGNMENT.CENTERED} headerContent={titledHeader}
                  bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."/>,
            <Card key="cisco-card-3" cardAlignment={Card.ALIGNMENT.RIGHT} headerContent={titledHeader}
                  bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."/>
        ];

        const classes = {
            bodyClasses: 'no-margin'
        };

        const sectionExamples = [
            {
                headerText: 'Alignment',
                examplesSection: {examples: cards1, exampleHeaders: ['Default', 'Centered', 'Right']}
            },
            {
                headerText: 'Raised',
                examplesSection: {examples: [<Card key="cisco-card-4" raised={true} headerContent={titledHeader} bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."/>]}
            },
            {
                headerText: 'Compact (Raised and Hover-able)',
                examplesSection: {
                    exampleHeaders: ['Compact', 'Compact with component header', 'Compact Small'],
                    exampleNotes: ['Each use a MoreLessPanel to restrict text content to a max of 3 lines'],
                    examples: [<Card key="cisco-card-5"
                                     headerContent={{
                                         icon: Icon.TYPE.ANOMALY,
                                         title: 'Title'
                                     }}
                                     key="card-compact-0"
                                     raised={true}
                                     hoverable={true}
                                     size={Card.SIZE.COMPACT}>
                        <MoreLessPanel key="more-less-1a"
                                       persistCollapsed={true}
                                       collapsedLines={3}
                                       moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.ELLIPSES}>
                            The longest preview of the fault description can only be three lines. Any descriptions longer than three lines will not be fully shown.
                        </MoreLessPanel>
                    </Card>,
                        <Card
                            key="card-compact-1"
                            size={Card.SIZE.COMPACT}
                            raised={true}
                            hoverable={true}
                            componentHeaderContent={
                                {
                                    icon: Icon.TYPE.ANOMALY,
                                    heading: 'Component Header',
                                    tools: [<Icon type={Icon.TYPE.CLOSE} className="actionable"/>]
                                }
                            }>
                            <CardHeader key="cisco-card-header-5" content={
                                {
                                    icon: Icon.TYPE.ANOMALY,
                                    title: 'Title'
                                }
                            }/>

                            <CardBody>
                                <MoreLessPanel key="more-less-1a"
                                               persistCollapsed={true}
                                               collapsedLines={3}
                                               moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.ELLIPSES}>
                                    The longest preview of the fault description can only be three lines. Any descriptions longer than three lines will not be fully shown.
                                </MoreLessPanel>                            </CardBody>
                        </Card>,
                        <Card
                            key="card-compact-1"
                            size={Card.SIZE.COMPACT}
                            raised={true}
                            hoverable={true}
                            componentHeaderContent={
                                {
                                    size: ComponentHeader.SIZE.MEDIUM,
                                    icon: Icon.TYPE.ANOMALY,
                                    heading: 'Component Header',
                                    tools: [<Icon type={Icon.TYPE.CLOSE} className="actionable"/>]
                                }
                            }>
                            <CardHeader key="cisco-card-header-5" content={
                                {
                                    icon: Icon.TYPE.ANOMALY,
                                    title: 'Title'
                                }
                            }/>

                            <CardBody>
                                <MoreLessPanel key="more-less-1a"
                                               persistCollapsed={true}
                                               collapsedLines={3}
                                               moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.ELLIPSES}>
                                    The longest preview of the fault description can only be three lines. Any descriptions longer than three lines will not be fully shown.
                                </MoreLessPanel>                            </CardBody>
                        </Card>,
                        <Card
                            key="card-compact-1"
                            size={Card.SIZE.COMPACT}
                            raised={true}
                            hoverable={true}
                            componentHeaderContent={
                                {
                                    size: ComponentHeader.SIZE.LARGE,
                                    icon: Icon.TYPE.ANOMALY,
                                    heading: 'Component Header',
                                    tools: [<Icon type={Icon.TYPE.CLOSE} className="actionable"/>]
                                }
                            }>
                            <CardHeader key="cisco-card-header-5" content={
                                {
                                    icon: Icon.TYPE.ANOMALY,
                                    title: 'Title'
                                }
                            }/>

                            <CardBody>
                                <MoreLessPanel key="more-less-1a"
                                               persistCollapsed={true}
                                               collapsedLines={3}
                                               moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.ELLIPSES}>
                                    The longest preview of the fault description can only be three lines. Any descriptions longer than three lines will not be fully shown.
                                </MoreLessPanel>                            </CardBody>
                        </Card>,
                        <Card
                            key="card-compact-2"
                            raised={true}
                            hoverable={true}
                            size={Card.SIZE.COMPACT_SMALL}>
                            <CardHeader content={
                                {
                                    icon: Icon.TYPE.ANOMALY,
                                    title: 'Title'
                                }
                            }/>

                            <CardBody>
                                <MoreLessPanel key="more-less-1a"
                                               persistCollapsed={true}
                                               collapsedLines={3}
                                               moreIndicatorStyle={MoreLessPanel.MORE_INDICATOR_STYLE.ELLIPSES}>
                                    The longest preview of the fault description can only be three lines. Any descriptions longer than three lines will not be fully shown.
                                </MoreLessPanel>                            </CardBody>
                        </Card>]
                }
            },
            {
                headerText: 'State',
                examplesSection: {
                    exampleHeaders: ['Hovered', 'Selected'],
                    examples: [<Card key="cisco-card-4" headerContent={titledHeader} hovered={true} bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."/>,
                        <Card key="cisco-card-5" headerContent={titledHeader} selected={true} hoverable={true} bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."/>]
                }
            },
            {
                headerText: 'Tools',
                examplesSection: {
                    exampleHeaders: ['Collapsible', 'Custom Tools', 'Dropdown'],
                    exampleNotes: [null, null, 'Dropdown behavior on expand/collapsed implemented by setting prop styles={{cardStyles: {position: \'absolute\', zIndex: \'1\'}}}'],
                    examples: [<Card key="cisco-collaped-controlled-card-1"
                                     collapsible={false} // put 'collapsed' prop into controlled mode.
                                     collapsed={this.state.collapsedControlled}
                                     tools={[<CollapseButton key="collapse-btn-0"
                                                             collapsed={this.state.collapsedControlled}
                                                             onAction={() => {
                                                                 this.setState({collapsedControlled: !this.state.collapsedControlled});
                                                             }}
                                                             stopPropagation={true}/>]}
                                     onCollapsed={() => {
                                         this.setState({collapsedControlled: true});
                                     }}
                                     onExpanded={() => {
                                         this.setState({collapsedControlled: false});
                                     }}
                                     headerContent={titledHeader}
                                     bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."
                                     footerContent={<Button type={Button.TYPE.PRIMARY} size={Button.SIZE.SMALL}
                                                            onAction={(e) => this.collapse1()}>In footer</Button>}/>,
                        <Card key="cisco-card-6" collapsible={true} // Let card manage its collapsed/expanded state.
                              headerContent={iconWithTitleAndSubTitleHeader}
                              bodyContent="Equidem recteque sea et. Per detracto iracundia ea, duo nusquam denique omittantur in."
                              tools={[<Checkbox key="cisco-tools-checkbox-1" label="Checkbox" layout={Checkbox.LAYOUT.INLINE}/>]}/>,
                        <Card key="cisco-card-6" collapsible={true} // Let card manage its collapsed/expanded state.
                              collapsed={true} // initial collapsed state since collapsible is set to true.
                              headerContent={{
                                  icon: <Icon key="cisco-card-header-icon" type={Icon.TYPE.CHECK_OUTLINE} size={Icon.SIZE.MEDIUM_SMALL} style={{color: BasePalette.CiscoGreen}}/>,
                                  title: 'Card Title',
                                  subtitle: 'Card SubTitle'
                              }}
                              bodyContent={'A towel, it says, is about the most massively useful thing an interstellar' +
                              ' hitch hiker can have. Partly it has great practical value - you can wrap it around you for warmth;' +
                              ' you can lie on it on the brilliant marble-sanded beaches' +
                              ' of Santraginus V, inhaling the heady sea vapours; you can sleep under it beneath the stars' +
                              ' on the desert world of ... course dry yourself off with it if it still seems to be clean enough.'}
                              tools={[<Checkbox key="cisco-tools-checkbox-1" label="Checkbox" layout={Checkbox.LAYOUT.INLINE}/>]}
                              styles={{cardStyles: {position: 'absolute', zIndex: '1'}}}/>]
                }
            },

        ];

        return (<Examples exampleHeader="Card"
                          sectionExamples={sectionExamples} columnSpan={4}/>)

    }
}
