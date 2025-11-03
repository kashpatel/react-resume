import React, { useContext } from 'react';
import { ResumeDataContext } from '../Context';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skills } from './Skills';

const titleClasses = 'font-bold uppercase text-secondary-600 mb-2';

export const Content: React.FC = () => {
    const data = useContext(ResumeDataContext);
    const significantWork = data.work.filter(work => work.significant);
    const nonSignificantWork = data.work.filter(work => !work.significant);

    return (
        <div className='flex flex-col gap-8 paper:flex-row print:flex-row justify-between'>
            <div className='w-full paper:w-1/2 print:w-1/2'>
                <section>
                    <h2 className={titleClasses}>Experience</h2>
                    <Experience data={significantWork} />
                </section>
            </div>

            <div className='w-full paper:w-1/2 print:w-1/2'>
                <section>
                    <h2 className={titleClasses}>Education</h2>
                    <Education data={data.education} />
                </section>

                <section className='mt-5'>
                    <h2 className={titleClasses}>Skills</h2>
                    <Skills data={data.skills} />
                </section>

                <section className='mt-5'>
                    <h2 className={titleClasses}>Additional Experience</h2>
                    <Experience data={nonSignificantWork} />
                </section>
            </div>
        </div>
    );
};
