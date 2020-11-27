import moment from 'moment';

export enum DateFormats {
    Month_Year = 'MMM-YYYY',
    Full = 'LLL',
}

export const DateFormatter = (dt: string, format = DateFormats.Month_Year) => {
    return moment(dt).format(format);
};
