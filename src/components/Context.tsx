import { merge } from 'lodash';
import React from 'react';

let privateResumeData = {};
try {
    privateResumeData = require('../resume-data/private').default;
} catch (e) {
    // private resume json file does not exist
}

const publicResumeData = require('../resume-data/public').default;

const resumeData = merge({}, publicResumeData, privateResumeData);

export const ResumeDataContext = React.createContext(resumeData);
