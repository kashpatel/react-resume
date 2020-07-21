import { ResumeSchema } from './interface';

export default {
    basics: {
        name: 'Kashyap Patel',
        label: '',
        picture: '',
        email: 'patel.kashyap226@gmail.com',
        website: '',
        summary: '',
        location: {
            city: 'Charlottetown',
            countryCode: 'CA',
            region: 'PE',
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
            company: 'CGI Inc.',
            website: 'https://www.cgi.com/en/overview',

            summary:
                'I build features that help the Federal Bank to auction market operations efficiently.',
            highlights: [
                'Lead an effort to convert Angular 6 code into Angular 8 with a focus on reducing continuous integration times using Nx',
                'Redesigned legacy npm libraries, improving app performance remarkably',
                'Pushed for better development practices. Mentoring fellow team members',
            ],
            position: 'Senior Frontend Developer',
            startDate: '2018-11-05',
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
                    website:
                        'https://en.wikipedia.org/wiki/Java_(programming_language)',
                },
                {
                    display: 'Oracle',
                    website: 'https://www.oracle.com/database/',
                },
            ],
        },
        {
            company: 'DeltaWare Inc.',
            website: 'https://maximuscanada.ca/locations',
            location: 'Charlottetown, PE',
            summary:
                'I rebuilt legacy healthcare software as modern web applications with an emphasis on maintainability and usability.',
            highlights: [
                'Introduced a continuous integration pipeline and local development environment',
                'Developed intuitive employers Solr search for PEI-WCB',
                'Migrated AngularJS apps to Angular 6',
                'Contributed to private NPM libraries to increase reusability across web applications',
            ],
            position: 'Programmer Analyst',
            startDate: '2016-12-16',
            endDate: '2018-11-03',
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
            company: 'MetricAid Inc.',
            website: 'https://www.metricaid.com/',
            location: 'North Bay, ON',
            summary:
                'I contributed to the development of physicians scheduling application used across 10+ hospitals.',
            highlights: [
                'Created emails delivery mechanism which reduced delivery time by 50%',
                'Designed interactive reports with patient flow data to predict emergency department trends',
                'Optimized MongoDB queries, nightly scheduled tasks which allowed quicker app loads and smoother browsing',
            ],
            position: 'Software Developer',
            startDate: '2015-03-15',
            endDate: '2016-12-16',
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
            company: 'Shore Consulting Group.',
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
            tags: [
                {
                    display: 'ASP.NET',
                    website: 'https://www.asp.net/',
                },
                {
                    display: 'C#',
                    website:
                        'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
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
                    website:
                        'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
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
                    website:
                        'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
                },
                {
                    display: 'NoSQL',
                    website: 'https://www.mongodb.com/nosql-explained',
                },
                {
                    display: 'SQL',
                    website: 'https://en.wikipedia.org/wiki/SQL',
                },
            ],
        },
        {
            name: 'Frameworks',
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
            ],
        },
        {
            name: 'Tools',
            keywords: [
                {
                    display: 'Docker',
                    website: 'https://www.docker.com/',
                },
                {
                    display: 'Jira',
                    website: 'https://www.atlassian.com/software/jira',
                },
                {
                    display: 'Jenkins',
                    website: 'https://www.jenkins.io/',
                },
                {
                    display: 'Azure DevOps',
                    website:
                        'https://azure.microsoft.com/en-ca/services/devops/#DevOps',
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
                    display: 'Balsamiq Wireframes',
                    website: 'https://balsamiq.com/wireframes/',
                },
                {
                    display: 'Digital Ocean',
                    website: 'https://www.digitalocean.com/',
                },
            ],
        },
        {
            name: 'Concepts',
            keywords: [
                'Agile Methodology',
                'Automated testing',
                'Continuous integration/deployment (CI/CD)',
                'Cross-browser debugging',
                'Functional Programming',
                'Internationalization (i18n)',
                'REST API design',
                'Reactive Programming',
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
