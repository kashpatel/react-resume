import moment from 'moment';

export enum Date_Formats {
    Month_Year = 'MMM-YYYY',
}

export const Date_Formatter = (
    dt: string,
    format = Date_Formats.Month_Year
) => {
    return moment(dt).format(format);
};
