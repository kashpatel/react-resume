import React from 'react';
import { Content } from '../Content/Content';
import { FooterComponent as Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const App = () => {
    return (
        <div
            className='flex flex-col mx-auto w-full paper:w-paper print:w-paper
            text-sm paper:text-70 print:text-70 paper:my-20 print:my-0
            transform xl:scale-120 2xl:scale-10 3xl:scale-160 origin-top'
        >
            <div
                className='h-auto paper:h-paper print:h-paper
                    bg-white p-4 sm:p-10 paper:p-12 print:p-10
                    shadow-none paper:shadow-2xl print:shadow-none'
            >
                <Header />
                <hr className='mt-2 mb-4' />
                <Content />
            </div>

            <Footer></Footer>
        </div>
    );
};
