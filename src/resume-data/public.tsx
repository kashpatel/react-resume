import { ResumeSchema } from './interface';

export default {
    basics: {
        name: 'Kash Patel',
        label: 'Software Engineer',
        picture: '',
        email: 'kash@kashpatel.dev',
        website: '',
        summary:
            'Results-driven Software Engineer with over 10 years of experience designing, developing, and delivering robust solutions across diverse industries. Adept in modern web technologies, cloud platforms, and scalable architectures. Proven track record of leading teams, mentoring developers, and driving projects from concept to production. Passionate about building high-quality products and continuously learning new tools and languages.',
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
            location: 'Edmonton, AB',
            summary:
                'Driving high-impact product innovation while mentoring teams to deliver scalable solutions for global event management.',
            highlights: [
                'Architected the <a class="hover:underline text-primary-700" target="_blank" href="https://support.cvent.com/s/communityarticle/Using-the-Site-Designer">Site Designer Framework</a>, driving strategic vision, cross-team collaboration, and key scalability and reliability improvements.',
                'Oversaw frontend for <a class="hover:underline text-primary-700" target="_blank" href="https://release.cvent.com/eventmanagement/board/media-library-refresh">Media Library refresh</a>, modernizing the asset management interface.',
                'Launched <a class="hover:underline text-primary-700" target="_blank" href="https://support.cvent.com/s/communityarticle/Adding-and-Editing-Images-in-the-Site-Designer">Image Editor</a> to enhance user productivity.',
                'Built <a class="hover:underline text-primary-700" target="_blank" href="https://www.cvent.com/en/event-marketing-management/ai-writing-assistant">AI writing assistant</a> to improve content creation.',
                'Managed cross-functional team and direct report, fostering collaboration and growth.',
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
                    display: 'Next.js',
                    website: 'https://nextjs.org/',
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
            location: 'Charlottetown, PE',
            summary: 'Optimized financial market operations applications at the Bank of Canada.',
            highlights: [
                'Led migration from Angular 6 to 8, boosting performance and maintainability.',
                'Implemented monorepo architecture with Nx.dev to cut CI times and streamline deployments.',
                'Redesigned validation architecture, improving rendering speed by 80%.',
                'Mentored developers and drove best practices to elevate code quality and teamwork.',
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
            company: 'Maximus Canada',
            website: 'https://maximuscanada.ca/locations',
            location: 'Charlottetown, PE',
            summary:
                'Modernized legacy healthcare systems for better usability, scalability, and maintainability.',
            highlights: [
                'Implemented Azure CI/CD pipelines and Docker-based environments to accelerate deployments.',
                'Built employer search functionality leveraging Apache Solr for fast, relevant results.',
                'Upgraded AngularJS codebases to Angular 6, boosting performance and maintainability.',
                'Contributed to internal NPM libraries and technical documentation to standardize development practices.',
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
                'Built critical scheduling system optimizing shifts and response times for ER doctors.',
            highlights: [
                // 'Engineered email automation programs, reducing delivery times by up to 50%.',
                // 'Designed interactive reporting applications with nvd3.js to predict emergency department trends.',
                // 'Optimized MongoDB queries and automated nightly data processing using Go routines.'
            ],
            position: 'Software Developer',
            startDate: '2015-03-15',
            endDate: '2016-12-16',
            significant: false,
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
                'Enhanced accessibility and infrastructure for Ontario Government applications.',
            highlights: [
                // 'Integrated AODA accessibility support for Ontario Ministry of Education applications.',
                // 'Collaborated with clients to gather requirements and deliver progress reports.'
            ],
            position: 'System Analyst and Administrator',
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
            area: 'Computer Programming',
            studyType: 'Diploma in Computer Programming',
            startDate: '2013-01-01',
            endDate: '2014-08-31',
            gpa: '',
            courses: [
                'Front-end Development',
                'Database Design and Management',
                'Algorithms and Data Structures',
                'Professional Communication',
                'Operating Systems',
            ],
        },
        {
            institution: 'KSV University',
            website: 'https://ksv.ac.in/index.php/under-graduate-programme?pg=25',
            area: "Bachelor's in Computer Application",
            studyType: 'Bachelor of Computer Applications',
            startDate: '2009-06-01',
            endDate: '2012-05-31',
            gpa: '',
            courses: [
                'Operating Systems',
                'Software Engineering Fundamentals',
                'Computer Architecture',
                'Algorithms and Data Structures',
                'Project Planning and Management',
                'Cloud Computing',
                'Content Management Systems',
                'Desktop and Web Application Design',
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
                'Accessibility (a11y)',
                'API design (REST, GraphQL)',
                'CI/CD automation',
                'Cloud-native development',
                'Code review & collaboration',
                'Design systems',
                'Mentoring & technical leadership',
                'Microservices architecture',
                'Performance optimization',
                'SPA & modern web app architecture',
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
