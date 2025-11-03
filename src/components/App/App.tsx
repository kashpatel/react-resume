import React from 'react';
import { Content } from '../Content/Content';
import { FooterComponent as Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const App = () => {
    return (
        <div
            className='flex flex-col mx-auto w-full paper:w-paper
            paper:text-xs paper:leading-5 paper:my-20 print:my-0
            lg:scale-[1.2] 2xl:scale-[1.3] origin-top'
        >
            <div
                className='h-auto bg-white p-4 paper:p-10 print:p-10 
                        shadow-none paper:shadow-2xl print:shadow-none'
            >
                <Header />
                <hr className='mt-2 mb-4' />
                <Content />
            </div>

            <Footer />
        </div>
    );
};
