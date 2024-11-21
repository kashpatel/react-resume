import { ResumeSchema } from './interface';

export default {
    basics: {
        name: 'Kashyap Patel',
        label: '',
        picture: '',
        email: 'kash@kashpatel.dev',
        website: '',
        summary: '',
        location: {
            city: 'Edmonton',
            countryCode: 'CA',
            region: 'AB',
        },
        profiles: [
            {
                network: 'GitHub',
                username: 'kashpatel',
                icon: 'github-alt',
                url: 'https://github.com/kashpatel',
            },
            {
                network: 'LinkedIn',
                username: 'kashpatel',
                icon: 'linkedin-in',
                url: 'https://www.linkedin.com/in/kash-patel/',
            },
            {
                network: 'Stack Overflow',
                username: 'kashpatel',
                icon: 'stack-overflow',
                url: 'https://stackoverflow.com/users/9620606/kashpatel',
            },
        ],
    },
    work: [
        {
            company: 'Cvent',
            website: 'https://www.cvent.com/',
            summary: 'I build features that deliver successful events worldwide.',
            highlights: [
                'Creator of the <a class="hover:underline text-primary-700" target="_blank" href="https://support.cvent.com/s/communityarticle/Adding-and-Editing-Images-in-the-Site-Designer"/>Image Editor</a> tool',
                'Maintainer of the <a class="hover:underline text-primary-700" target="_blank" href="https://support.cvent.com/s/communityarticle/Using-the-Site-Designer"/>Site Designer Framework</a>',
                'Developed and integrated <a class="hover:underline text-primary-700" target="_blank" href="https://www.cvent.com/en/event-marketing-management/ai-writing-assistant">AI writing assistant</a>',
                'Direct reports & cross teams collaborations'
            ],
            position: 'Lead Software Engineer',
            startDate: '2021-06-21',
            significant: true,
            tags: [
                {
                    display: 'React',
                    website: 'https://https://reactjs.org/',
                },
                {
                    display: 'Redux',
                    website: 'https://redux.js.org/',
                },
                {
                    display: 'Typescript',
                    website: 'https://www.typescriptlang.org/',
                },
                {
                    display: 'AWS',
                    website: 'https://aws.amazon.com/',
                },
                {
                    display: 'Node',
                    website: 'https://nodejs.org/en/',
                },
                {
                    display: 'Java',
                    website: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
                },
            ],
        },
        {
            company: 'CGI',
            website: 'https://www.cgi.com/en/overview',
            summary:
                'I built features that helped Bank of Canada auction market operations efficiently.',
            highlights: [
                'Lead an effort to migrate Angular 6 code to Angular 8',
                'Reduced CI time using monorepo architecture & nx.dev',
                'Rewrote core frontend validation architecture which improved page rendering time by 80%',
                'Pushed for better development practices. Mentoring fellow team members',
            ],
            position: 'Senior Frontend Developer',
            startDate: '2018-11-05',
            endDate: '2021-06-14',
            significant: true,
            tags: [
                {
                    display: 'Angular',
                    website: 'https://angular.io/',
                },
                {
                    display: 'Typescript',
                    website: 'https://www.typescriptlang.org/',
                },
                {
                    display: 'Nx',
                    website: 'https://nx.dev/',
                },
                {
                    display: 'Ag grid',
                    website: 'https://www.ag-grid.com/',
                },
                {
                    display: 'Java',
                    website: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
                },
                {
                    display: 'Oracle',
                    website: 'https://www.oracle.com/database/',
                },
            ],
        },
        {
            company: 'DeltaWare - Maximus Canada',
            website: 'https://maximuscanada.ca/locations',
            location: 'Charlottetown, PE',
            summary:
                'I rebuilt legacy healthcare software as modern web applications with an emphasis on maintainability and usability.',
            highlights: [
                'Introduced an Azure CI pipeline and development environment using Docker',
                'Developed intuitive employers search using Apache Solr',
                'Migrated AngularJS code to Angular 6',
                'Contributed to private NPM libraries and documentation',
            ],
            position: 'Programmer Analyst',
            startDate: '2016-12-16',
            endDate: '2018-11-03',
            significant: true,
            tags: [
                {
                    display: 'Angular',
                    website: 'https://angular.io/',
                },
                {
                    display: 'Material UI',
                    website: 'https://material.angular.io/',
                },
                {
                    display: 'Solr',
                    website: 'https://lucene.apache.org/solr/',
                },
                {
                    display: 'Node',
                    website: 'https://nodejs.org/',
                },
                {
                    display: 'ASP.NET',
                    website: 'https://www.asp.net/',
                },
            ],
        },
        {
            company: 'MetricAid',
            website: 'https://www.metricaid.com/',
            location: 'North Bay, ON',
            summary:
                'I contributed to the development of physician scheduling application used in 10+ hospitals.',
            highlights: [
                'Created emails program reducing delivery time up to 50%',
                'Designed interactive reporting app with patient flow data and nvd3.js to predict emergency department trends.',
                'Optimized MongoDB queries and nightly cron jobs using Goroutines to pre-process reporting data',
            ],
            position: 'Software Developer',
            startDate: '2015-03-15',
            endDate: '2016-12-16',
            significant: true,
            tags: [
                {
                    display: 'Golang',
                    website: 'https://golang.org/',
                },
                {
                    display: 'MongoDB',
                    website: 'https://www.mongodb.com/',
                },
                {
                    display: 'jQuery',
                    website: 'https://jquery.com/',
                },
                {
                    display: 'NVD3.js',
                    website: 'http://nvd3.org/',
                },
                {
                    display: 'Semantic UI',
                    website: 'https://semantic-ui.com/',
                },
            ],
        },
        {
            company: 'Shore Consulting',
            website: 'https://www.shore.ca/',
            location: 'Toronto, ON',
            summary:
                'I added AODA accessibility support to the Ontario Ministry of Education application.',
            highlights: [
                'Performed software and hardware infrastructure maintenance',
                'Collaborated with clients to gather requirements and to present a progress report',
            ],
            position: 'System Anylast and Administrator',
            startDate: '2015-01-01',
            endDate: '2015-03-12',
            significant: false,
            tags: [
                {
                    display: 'ASP.NET',
                    website: 'https://www.asp.net/',
                },
                {
                    display: 'C#',
                    website: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
                },
                {
                    display: 'MS-SQL',
                    website: 'https://www.microsoft.com/en-ca/sql-server/',
                },
                {
                    display: 'Linux',
                    website: 'https://www.debian.org/',
                },
                'OS Upgrades',
            ],
        },
    ],
    education: [
        {
            institution: 'Seneca College',
            website: 'https://www.senecacollege.ca/programs/fulltime/CPD.html',
            area: 'Computer Programmer',
            studyType: 'Diploma in Computer Programming',
            startDate: '2013-01-01',
            endDate: '2014-08-31',
            gpa: '',
            courses: [
                'Front-end Development',
                'Databases',
                'Algorithms',
                'Professional Communication',
                'Operating Systems',
            ],
        },
        {
            institution: 'KSV University',
            website: 'http://ksv.ac.in/',
            area: "Bachelor's in Computer Application",
            studyType: 'Bachelor',
            startDate: '2009-06-01',
            endDate: '2012-05-31',
            gpa: '',
            courses: [
                'Operating Systems',
                'Software Foundation',
                'Computer Architecture',
                'Algorithms',
                'Project Planning',
                'Cloud Computing',
                'Content Management',
                'Desktop and Web Applications Design',
            ],
        },
    ],
    skills: [
        {
            name: 'Languages',
            keywords: [
                {
                    display: 'JavaScript',
                    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                },
                {
                    display: 'TypeScript',
                    website: 'https://www.typescriptlang.org/',
                },
                {
                    display: 'Golang',
                    website: 'https://golang.org/',
                },
                {
                    display: 'C♯',
                    website: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
                },
                {
                    display: 'Java',
                    website: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
                },
                {
                    display: 'NoSQL',
                    website: 'https://www.mongodb.com/nosql-explained',
                },
                {
                    display: 'SQL',
                    website: 'https://en.wikipedia.org/wiki/SQL',
                },
                {
                    display: 'HTML',
                    website: 'https://en.wikipedia.org/wiki/HTML',
                },
                {
                    display: 'CSS',
                    website: 'https://en.wikipedia.org/wiki/CSS',
                },
            ],
        },
        {
            name: 'Frameworks/Libraries',
            keywords: [
                {
                    display: 'Angular',
                    website: 'https://angular.io/',
                },
                {
                    display: 'React',
                    website: 'https://reactjs.org/',
                },
                {
                    display: 'ASP.NET',
                    website: 'https://www.asp.net/',
                },
                {
                    display: 'jQuery',
                    website: 'https://jquery.com/',
                },
                {
                    display: 'Angular Material',
                    website: 'https://material.angular.io/',
                },
                {
                    display: 'Ng Bootstrap',
                    website: 'https://ng-bootstrap.github.io/#/home',
                },
            ],
        },
        {
            name: 'Tools',
            keywords: [
                {
                    display: 'AWS',
                    website: 'https://aws.amazon.com/',
                },
                {
                    display: 'Azure DevOps',
                    website: 'https://azure.microsoft.com/en-ca/services/devops/#DevOps',
                },
                {
                    display: 'Docker',
                    website: 'https://www.docker.com/',
                },
                {
                    display: 'Jenkins',
                    website: 'https://www.jenkins.io/',
                },
                {
                    display: 'Jira',
                    website: 'https://www.atlassian.com/software/jira',
                },
                {
                    display: 'Nginx',
                    website: 'https://www.nginx.com/',
                },
                {
                    display: 'Keycloak',
                    website: 'https://www.keycloak.org/',
                },
                {
                    display: 'Nx',
                    website: 'https://nx.dev/',
                },
                {
                    display: 'Figma',
                    website: 'https://www.figma.com/',
                },
            ],
        },
        {
            name: 'Concepts',
            keywords: [
                'Automated testing',
                'Developer Mentoring',
                'Continuous integration/deployment (CI/CD)',
                'Cross-browser debugging',
                'Functional programming',
                'Internationalization (i18n)',
                'REST/GraphQL API design',
                'Reactive programming',
                'Responsive design',
                'Single Page Applications (SPAs)',
            ],
        },
    ],
    awards: [],
    volunteer: [],
    languages: [],
    interests: [],
    references: [],
    publications: [],
} as ResumeSchema;
