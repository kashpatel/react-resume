import React from 'react';
import { HiChevronRight } from 'react-icons/hi2';
import { ResumeSchemaWork } from '../../resume-data/interface';
import { DateFormatter } from '../../utils/date';
import { Badges } from './Badges';

export const Experience = (props: { data: ResumeSchemaWork[] }) => {
    const experiences = props.data.map((exp: ResumeSchemaWork, i: number) => {
        return (
            <div key={i}>
                <div className='flex justify-between'>
                    <h3>
                        <a
                            className='font-bold text-primary-700 hover:text-primary-600'
                            href={exp.website}
                        >
                            {exp.company}
                        </a>
                    </h3>

                    <h4 className='text-secondary-600'>{exp.location}</h4>
                </div>

                <div className='flex justify-between'>
                    <h4 className='text-secondary-600'>{exp.position}</h4>
                    <h4 className='text-secondary-600'>
                        {DateFormatter(exp.startDate)} –{' '}
                        {exp.endDate ? DateFormatter(exp.endDate) : 'Present'}
                    </h4>
                </div>

                <h5 className='my-1'>{exp.summary}</h5>
                <ul>
                    {exp.highlights.map(hl => {
                        return (
                            <li key={hl} className='flex ml-1 mb-1'>
                                <HiChevronRight className='mr-1 mt-1 text-secondary-600 align-middle' />
                                <div dangerouslySetInnerHTML={{ __html: hl }}></div>
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
    return <div className='flex flex-col space-between gap-6'>{experiences}</div>;
};
