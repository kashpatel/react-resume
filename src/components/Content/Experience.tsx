import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ResumeSchemaWork } from '../../resume-data/interface';
import { DateFormatter } from '../../utils/date';
import { Badges } from './Badges';

export const Experience = (props: { data: ResumeSchemaWork[] }) => {
    const experiences = props.data.map((exp: ResumeSchemaWork, i: number) => {
        return (
            <div key={i} className='mb-4'>
                <h3>
                    <a
                        className='font-bold text-primary-700 hover:text-primary-600'
                        href={exp.website}
                    >
                        {exp.company}
                    </a>
                </h3>

                <h4 className='text-secondary-600'>
                    {DateFormatter(exp.startDate)} –{' '}
                    {exp.endDate ? DateFormatter(exp.endDate) : 'Present'}
                    &nbsp;|&nbsp;
                    {exp.position}
                </h4>

                <h5 className='my-1'>{exp.summary}</h5>
                <ul>
                    {exp.highlights.map(hl => {
                        return (
                            <li key={hl} className='flex ml-1 mb-1'>
                                <FontAwesomeIcon
                                    icon={faChevronCircleRight}
                                    className='mr-1 mt-1 text-secondary-600 align-middle'
                                />
                                <div>{hl}</div>
                            </li>
                        );
                    })}
                </ul>

                <div className='mt-2'>
                    <Badges badges={exp.tags} />
                </div>
            </div>
        );
    });
    return <div>{experiences}</div>;
};
