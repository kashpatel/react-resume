import React from 'react';
import { ResumeSchemaEducation } from '../../resume-data/interface';
import { DateFormatter } from '../../utils/date';

export const Education = (props: { data: ResumeSchemaEducation[] }) => {
    const educations = props.data.map((ed: ResumeSchemaEducation, i: number) => {
        return (
            <div key={i}>
                <h3>
                    <a
                        className='font-bold text-primary-700 hover:text-primary-600'
                        href={ed.website}
                    >
                        {ed.area}
                    </a>
                </h3>

                <h4 className='text-secondary-600'>
                    {DateFormatter(ed.startDate)} - {DateFormatter(ed.endDate)}
                    &nbsp;|&nbsp;
                    {ed.institution}
                </h4>
            </div>
        );
    });

    return <div className='flex flex-col space-between gap-4'>{educations}</div>;
};
