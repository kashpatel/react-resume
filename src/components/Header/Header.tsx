import React, { Component } from 'react';
import { ResumeDataContext } from '../Context';
import { Profile } from './Profile';
import { ViewPDFButton } from './ViewPDFButton';

export class Header extends Component {
    render() {
        return (
            <header>
                <ResumeDataContext.Consumer>
                    {data => (
                        <>
                            <h1 className='text-5xl text-primary-700 leading-none mb-3'>
                                {data.basics.name}
                                {ViewPDFButton()}
                            </h1>
                            {Profile(data.basics)}
                        </>
                    )}
                </ResumeDataContext.Consumer>
            </header>
        );
    }
}
