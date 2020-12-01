import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ViewPDFButton = () => {
    return (
        <a
            href='./Kashyap_Patel_Resume.pdf'
            target='_blank'
            className='float-right text-sm bg-primary-700 text-white hover:bg-primary-600 py-1 px-2 rounded-md print:hidden'
        >
            <FontAwesomeIcon icon={faFilePdf} className='mr-1' />
            View PDF
        </a>
    );
};
