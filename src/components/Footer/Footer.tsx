
import React, { useEffect, useState } from 'react';
import { HiMiniEllipsisVertical } from 'react-icons/hi2';
import { DateFormatter, DateFormatterTypes } from '../../utils/date';

const lastCommitApi = 'https://api.github.com/repos/kashpatel/react-resume/commits/master';
const repoUrl = 'https://github.com/kashpatel/react-resume/';

interface CommitInfo {
    commit: {
        committer: {
            date: string;
        };
    };
}

export const FooterComponent: React.FC = () => {
    const [lastCommit, setLastCommit] = useState<CommitInfo | null>(null);

    useEffect(() => {
        fetch(lastCommitApi)
            .then(response => response.json())
            .then(setLastCommit)
            .catch(err => console.error('Error retriving last commit history ', err));
    }, []);

    if (!lastCommit) return null;

    return (
        <div className='w-full text-center mt-4 mb-4 print:hidden'>
            <p className='inline-block'>
                <span className='text-primary-600'>
                    Last updated on{' '}
                    {DateFormatter(lastCommit.commit?.committer?.date, DateFormatterTypes.Full)}
                </span>
            </p>

            <HiMiniEllipsisVertical className='align-middle text-primary-600 mx-4 inline-block' />

            <a
                href={repoUrl}
                className='hover:underline text-primary-700 hover:text-primary-600'
            >
                <span className='text-primary-600'>View source code</span>
            </a>
        </div>
    );
};