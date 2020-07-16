import React from 'react';
import { isString } from 'util';

const badgeClasses =
    'bg-secondary-200 py-0.10 px-2 mb-2 mr-1 rounded-tr-lg rounded-bl-lg';

export const Badges = (props: {
    badges: Array<{ display: string; website: string } | string>;
}) => {
    const badges = props.badges.map(
        (badge: { display: string; website: string }, i: number) => {
            if (isString(badge)) {
                return (
                    <div key={i} className={badgeClasses}>
                        {badge}
                    </div>
                );
            }

            return (
                <a
                    key={i}
                    href={badge.website}
                    className={`${badgeClasses} hover:bg-secondary-300`}
                >
                    {badge.display}
                </a>
            );
        }
    );

    return (
        <div className="flex flex-wrap justify-start -mb-2 -mr-1">{badges}</div>
    );
};
