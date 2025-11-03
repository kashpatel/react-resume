import React from 'react';
import { ResumeSchemaSkills } from '../../resume-data/interface';
import { Badges } from './Badges';

export const Skills = (props: { data: ResumeSchemaSkills[] }) => {
    const skills = props.data.map((skill: ResumeSchemaSkills) => {
        return (
            <div key={skill.name}>
                <h3 className='font-bold text-primary-700 mb-1'>{skill.name}</h3>
                <Badges badges={skill.keywords} />
            </div>
        );
    });
    return <div className='flex flex-col space-between gap-6'>{skills}</div>;
};
