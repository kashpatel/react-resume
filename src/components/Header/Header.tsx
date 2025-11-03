
import React, { useContext } from 'react';
import { ResumeDataContext } from '../Context';
import { Profile } from './Profile';
import { ViewPDFButton } from './ViewPDFButton';

export const Header: React.FC = () => {
    const data = useContext(ResumeDataContext);
    return (
        <header>
            <h1 className='text-5xl text-primary-700 leading-none mb-3'>
                {data.basics.name}
                {ViewPDFButton()}
            </h1>
            {Profile(data.basics)}
        </header>
    );
};
