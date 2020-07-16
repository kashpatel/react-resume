import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithubAlt,
    faLinkedinIn,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ResumeSchemaBasics } from '../../resume-data/interface';

library.add(
    faPhoneAlt,
    faEnvelope,
    faLinkedinIn,
    faGithubAlt,
    faStackOverflow,
    faMapMarkerAlt
);

export const Profile = (basics: ResumeSchemaBasics) => {
    const Slash = (
        <span
            aria-hidden="true"
            className="text-secondary-600 hidden paper:inline print:hidden"
        >
            /
        </span>
    );

    const Anchor = (link: string, text: string) => (
        <a
            href={link}
            className="hover:underline text-primary-700 hover:text-primary-600"
        >
            {text}
        </a>
    );

    const items = [
        {
            icon: 'phone-alt' as IconName,
            prefix: 'fa',
            url: 'tel:' + basics.phone,
            username: basics.phone,
        },
        {
            icon: 'envelope' as IconName,
            prefix: 'fa',
            url: 'mailto:' + basics.email,
            username: basics.email,
        },
        {
            icon: 'map-marker-alt' as IconName,
            prefix: 'fa',
            url: 'https://en.wikipedia.org/wiki/Charlottetown',
            username: `${basics.location.city}, ${basics.location.region}`,
        },
        ...basics.profiles,
    ];

    return (
        <section className="flex flex-wrap justify-start md:justify-between paper:justify-between print:justify-between">
            {items.map((item, i: number) => (
                <React.Fragment key={i}>
                    <div className="whitespace-no-wrap mr-3 mb-1 md:m-0 paper:m-0 print:m-0">
                        <FontAwesomeIcon
                            icon={{
                                iconName: item.icon,
                                prefix: item.prefix || 'fab',
                            }}
                            className="mr-1 align-middle text-secondary-600"
                        />

                        {Anchor(item.url, item.username)}
                    </div>

                    {i < items.length - 1 ? Slash : null}
                </React.Fragment>
            ))}
        </section>
    );
};
