import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DateFormats, DateFormatter } from '../../utils/date';

const lastCommitApi = 'https://api.github.com/repos/kashpatel/react-resume/commits/master';
const repoUrl = 'https://github.com/kashpatel/react-resume/';

export class FooterComponent extends React.Component {
    state = { lastCommit: null };

    componentDidMount() {
        fetch(lastCommitApi)
            .then(response => response.json())
            .then(lastCommit => {
                this.setState({ lastCommit });
            })
            .catch(err => console.error('Error retriving last commit history ', err));
    }

    render() {
        const lc = this.state.lastCommit;
        if (!lc) {
            return null;
        } else {
            return (
                <div className='w-full text-center mt-4 mb-4 paper:mb-0 print:hidden'>
                    <p className='inline-block'>
                        <span className='text-primary-600'>
                            Last updated on{' '}
                            {DateFormatter(lc.commit?.committer?.date, DateFormats.Full)}
                        </span>
                    </p>

                    <FontAwesomeIcon
                        icon={faGripLinesVertical}
                        className='align-middle text-primary-600 mx-4'
                    />

                    <a
                        href={repoUrl}
                        className='hover:underline text-primary-700 hover:text-primary-600'
                    >
                        <span className='text-primary-600'>View source code</span>
                    </a>
                </div>
            );
        }
    }
}
