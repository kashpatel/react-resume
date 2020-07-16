import React, { Component } from 'react';
import { ResumeDataContext } from '../Context';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skills } from './Skills';

const titleClasses = 'font-bold uppercase text-secondary-600 mb-3';

export class Content extends Component {
    render() {
        return (
            <div className="-mx-4 flex flex-col paper:flex-row print:flex-row justify-between">
                <div className="px-4 w-full paper:w-1/2 print:w-1/2">
                    <section>
                        <h2 className={titleClasses}>Experience</h2>

                        <ResumeDataContext.Consumer>
                            {(data) => (
                                <Experience data={data.work}></Experience>
                            )}
                        </ResumeDataContext.Consumer>
                    </section>
                </div>

                <div className="px-4 w-full paper:w-1/2 print:w-1/2">
                    <section>
                        <h2 className={titleClasses}>Education</h2>

                        <ResumeDataContext.Consumer>
                            {(data) => (
                                <Education data={data.education}></Education>
                            )}
                        </ResumeDataContext.Consumer>
                    </section>

                    <section className="mt-5">
                        <h2 className={titleClasses}>Skills</h2>

                        <ResumeDataContext.Consumer>
                            {(data) => <Skills data={data.skills}></Skills>}
                        </ResumeDataContext.Consumer>
                    </section>
                </div>
            </div>
        );
    }
}
