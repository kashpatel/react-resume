import React from 'react';

const badgeClasses = 'bg-secondary-200 py-0.10 px-2 mb-2 mr-1 rounded-tr-lg rounded-bl-lg';

export const Badges = (props: { badges: ({ display: string; website: string } | string)[] }) => {
    const badges = props.badges.map((badge: { display: string; website: string }, i: number) => {
        if (typeof badge === 'string') {
            return (
                <div key={i} className={badgeClasses}>
                    {badge}
                </div>
            );
        }

        return (
            <a key={i} href={badge.website} target='_blank' className={`${badgeClasses} hover:bg-secondary-300`} rel="noreferrer">
                {badge.display}
            </a>
        );
    });

    return <div className='flex flex-wrap justify-start -mb-2 -mr-1'>{badges}</div>;
};
