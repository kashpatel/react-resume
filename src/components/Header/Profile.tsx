import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';
import { HiEnvelope, HiMapPin, HiPhone } from 'react-icons/hi2';
import { ResumeSchemaBasics } from '../../resume-data/interface';

const ICON_MAP = {
    phone: HiPhone,
    email: HiEnvelope,
    location: HiMapPin,
    'github-alt': FaGithubAlt,
    'linkedin-in': FaLinkedinIn,
    'stack-overflow': FaStackOverflow,
} as const;

type ContactLinkProps = {
    icon?: string;
    url: string;
    username: string;
};

export const ContactLink: React.FC<ContactLinkProps> = ({ icon, url, username }) => {
    const Icon = ICON_MAP[icon];

    return (
        <div className='whitespace-nowrap'>
            <Icon className='mr-1 align-middle text-primary-700' />
            <a
                href={url}
                className='hover:underline hover:text-primary-700 transition-colors duration-150'
            >
                {username}
            </a>
        </div>
    );
};

export const Profile = (basics: ResumeSchemaBasics) => {
    const DEFAULT_ITEMS = [
        {
            icon: 'phone',
            url: `tel:${basics.phone}`,
            username: basics.phone,
        },
        {
            icon: 'email',
            url: `mailto:${basics.email}`,
            username: basics.email,
        },
        {
            icon: 'location',
            url: 'https://en.wikipedia.org/wiki/Charlottetown',
            username: `${basics.location.city}, ${basics.location.region}`,
        },
    ];

    const items = [...DEFAULT_ITEMS, ...basics.profiles].filter(i => !!i.username);

    return (
        <section className='flex flex-wrap gap-3 justify-start paper:justify-between print:justify-between'>
            {items.map((item, i: number) => (
                <React.Fragment key={i}>
                    <ContactLink icon={item.icon} url={item.url} username={item.username} />
                </React.Fragment>
            ))}
        </section>
    );
};
