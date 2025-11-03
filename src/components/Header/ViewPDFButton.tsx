import React from 'react';
import { PiFilePdfDuotone } from 'react-icons/pi';

export const ViewPDFButton = () => {
    return (
        <a
            href='./Kashyap_Patel_Resume.pdf'
            target='_blank'
            className='float-right text-sm bg-primary-700 text-white hover:bg-primary-600 py-1 px-2 rounded-md print:hidden'
            rel='noreferrer'
        >
            <PiFilePdfDuotone className='mr-1 inline-block' />
            View PDF
        </a>
    );
};
