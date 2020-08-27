/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { merge } from 'lodash';
import React from 'react';
import { ResumeSchema } from '../resume-data/interface';

let privateResumeData = {};
try {
    privateResumeData = require('../resume-data/private').default;
} catch (e) {
    // private resume json file does not exist
}

const publicResumeData = require('../resume-data/public').default;

const resumeData = merge({}, publicResumeData, privateResumeData);

export const ResumeDataContext = React.createContext(resumeData as ResumeSchema);
