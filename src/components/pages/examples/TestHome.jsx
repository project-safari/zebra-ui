import React from 'react';
import {Link, List} from 'blueprint-react';

// import here so that webpack config loads resource and is thus available in build and leveraged below.
// import dmgv3 from '../../assets/designs/Blueprint_v3.dmg';

export default class TestHome extends React.Component {

    render() {
        return (<div>
            <h1 className="text-vibrant base-margin-bottom">Blueprint React Examples</h1>
            <h2 className="text-billboard-subtitle half-margin-bottom">
                Useful Links
            </h2>

            {/*<Link href="/assets/designs/Blueprint_v3.dmg" download="/assets/designs/Blueprint_v3.dmg" >
                Download Sketch Library V3
            </Link>*/}

            <List spacing={List.SPACING.REGULAR}>
                <Link href="https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/BLUEPRINT/repos/blueprint-react/browse" >
                    The Blueprint React repository
                </Link>
                <Link href="https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/BLUEPRINT/repos/blueprint-react-examples/browse" >
                    The Blueprint React Examples repository
                </Link>
                {/*<Link href="https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/BLUEPRINT/repos/blueprint-react/browse/ROADMAP.md" >
                    Roadmap
                </Link>*/}
                <Link href="https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/BLUEPRINT/repos/blueprint-react/browse/CONTRIBUTING.md" >
                    Contributing
                </Link>
                <Link href="https://bitbucket-eng-sjc1.cisco.com/bitbucket/projects/BLUEPRINT/repos/blueprint-react/browse/AUTHORS.md" >
                    Contributors
                </Link>

            </List>
        </div>);
    }
}