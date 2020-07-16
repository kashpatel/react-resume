import React from 'react';
import { Content } from '../Content/Content';
import { Header } from '../Header/Header';

function App() {
    return (
        <div
            className="flex flex-col mx-auto w-full paper:w-paper print:w-paper
            text-sm paper:text-70 print:text-70
            transform xl:scale-120 2xl:scale-10 3xl:scale-160 origin-top"
        >
            <div
                className="h-auto paper:h-paper print:h-paper
                my-0 paper:my-20 print:my-0 bg-white
                p-4 sm:p-10 paper:p-12 print:p-12
                shadow-none paper:shadow-2xl print:shadow-none"
            >
                <Header />
                <hr className="border-primary-700 border-t-2 border-solid border-opacity-50 mt-2 mb-4"></hr>
                <Content />
            </div>
        </div>
    );
}

export default App;
