import React, { Component } from 'react';
import { ResumeDataContext } from '../Context';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skills } from './Skills';

const titleClasses = 'font-bold uppercase text-secondary-600 mb-3';

export class Content extends Component {
    render() {
        return (
            <ResumeDataContext.Consumer>
                {data => {
                    const significantWork = data.work.filter(work => work.significant);

                    const nonSignificantWork = data.work.filter(work => !work.significant);

                    return (
                        <div className='-mx-4 flex flex-col paper:flex-row print:flex-row justify-between'>
                            <div className='px-4 w-full paper:w-1/2 print:w-1/2'>
                                <section>
                                    <h2 className={titleClasses}>Experience</h2>

                                    <Experience data={significantWork} />
                                </section>
                            </div>

                            <div className='px-4 w-full paper:w-1/2 print:w-1/2'>
                                <section>
                                    <h2 className={titleClasses}>Education</h2>

                                    <Education data={data.education} />
                                </section>

                                <section className='mt-5'>
                                    <h2 className={titleClasses}>Skills</h2>

                                    <Skills data={data.skills} />
                                </section>

                                <section className='mt-5'>
                                    <h2 className={titleClasses}>Experiences</h2>

                                    <Experience data={nonSignificantWork} />
                                </section>
                            </div>
                        </div>
                    );
                }}
            </ResumeDataContext.Consumer>
        );
    }
}
