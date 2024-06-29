export const projects = [
    {
        "name":"Healthcare Claims",
        "company":"Fidelity Healthcare",
        "image-src":"./project-images/claims.png",
        "date":"July 2020 - Current",
        "role":"Principal Software Engineer (Tech Lead)",
        "techStack":[
                {"tooltip":"Javascript","src":"./logos/vuejs.png"},
                {"tooltip":"Javascript","src":"./logos/graphql.png"},
                {"tooltip":"Javascript","src":"./logos/javascript.png"},
                {"tooltip":"Javascript","src":"./logos/typescript.png"},
                {"tooltip":"CSS3","src":"./logos/html5.png"},
                {"tooltip":"CSS3","src":"./logos/css3.png"},
            ],
        "description":"A web-based platform designed for account holders managed by Fidelity, enabling them to access and manage their medical claims efficiently.",
        "problem":"Client deliverable",
        "action":"Served as a technical lead for a team of five developers, focusing on ensuring code quality, reusability, and reliability. Led the project in an agile environment, maintaining continuous communication with Business Analysts, User Experience Designers, and fellow Developers. ",
        "result":"A full fledged healthcare claim management system using graphql, vuejs, html and scss",
        "metrics":"",
        "media":[
        ]

   },
   {
    "image-src":"./project-images/hbdex.png",
    "name":"Healthcare reusable Library (Monorepo)",
    "role":"Principal Software Engineer (Front-End Team)",
    "date":"December 2020",
    "company":"Fidelity Healthcare",
    "techStack":[
            {"tooltip":"Javascript","src":"./logos/javascript.png"},
            {"tooltip":"StencilJS","src":"./logos/stenciljs.png"},
            {"tooltip":"CSS3","src":"./logos/css3.png"},
        ],
    "description":"The Monorepo is a managed library of reusable components powered by storybook where developers can consume as well as publish their web components. ",
    "problem":"Create a central location for all reusable components where developers can shop for what they need. Allow developers to easily create and publish reusable components to npm artifactory.",
    "action":"In this project, along with maintaining the infra-structure needed to develop, host and publish components to npm,  I worked closely with developers on standards, reusability and best practices.",
    "result":"With the reusable monorepo we were able to speed up development by driving reusability and consistency throughout all our products, as well as better manage technical debt through component versioning.",
    "metrics":"",
    "media":[
 
    ]

    },
    {
        "name":"Accessibility Dashboard",
        "company":"Fidelity Healthcare",
        "image-src":"./project-images/accessibility.png",
        "date":"May 2021",
        "role":"Principal Software Engineer",
        "techStack":[
                {"tooltip":"Javascript","src":"./logos/vuejs.png"},
                {"tooltip":"Javascript","src":"./logos/javascript.png"},
                {"tooltip":"CSS3","src":"./logos/html5.png"},
                {"tooltip":"CSS3","src":"./logos/css3.png"},
                {"tooltip":"CSS3","src":"./logos/mongodb.png"},
            ],
        "description":"A dashboard to run daily accessibility tests and Fidelity Internal Requirement tests against registered apps, displaying the results to the users in an easy to read and well organized manner.",
        "problem":"Often times teams do not become aware of accessibility issues within their products until users report them, at which point, could be too late. We needed a proactive way to catch these accessibility issues early as part of our shift left strategy",
        "action":"This was a learning day project where i worked with one other developer every other tuesday on the proof of concept. It became an internal tool where we continued to maintain.",
        "result":"Early accessibility findings allowed our teams to deliver products that were more accessible from the start. Not having to go back and fix accessibility issues in production environments reduced the number of emergency go-live and code fixes alowing developers to focus on new stories.",
        "metrics":"",
        "media":[
            {src:"project-images/accessibility.png",type:"image", description:"Accessibility Dashboard"},
        ]

    },
    {
    "name":"CSS Playground",
    "company":"Fidelity Healthcare",
    "image-src":"./project-images/css-sandbox.png",
    "date":"January 2023",
    "role":"Principal Software Engineer",
    "techStack":[
        {"tooltip":"Javascript","src":"./logos/vuejs.png"},
        {"tooltip":"Javascript","src":"./logos/javascript.png"},
        {"tooltip":"CSS3","src":"./logos/html5.png"},
        {"tooltip":"CSS3","src":"./logos/css3.png"},
        {"tooltip":"CSS3","src":"./logos/mongodb.png"},
        ],
    "description":"A playground environment (online code compiler) that allowed users to live code and test out their HTML, Javascript and CSS skills, work on challenges and share code snippets inside Fidelity.",
    "problem":"Due to sensitive data, Fidelity employees are not allowed to store code in online IDEs outside of fidelity servers. This tool was entirely developed and hosted inside Fidelity's system allowing users to quickly prototype and test web components without having to spin up an entire appication.",
    "action":"Solo developer: This was a side project developed as a learning day initiative. The tool was used in hackathons and onboarding of new developers",
    "result":"Faster onboarding of new developers into our development standards, design systems and web component libraries.",
    "metrics":"",
    "media":[

    ]

},
    {
        "name":"FlowGrid - A Standalone grid system and reusable CSS",
        "company":"Fidelity Healthcare",
        "image-src":"./project-images/grid-system-0.png",
        "date":"July 2020 - December 2020",
        "role":"Principal Software Engineer (Front-End Team)",
        "techStack":[
                {"tooltip":"Javascript","src":"./logos/javascript.png"},
                {"tooltip":"CSS3","src":"./logos/css3.png"},
            ],
        "description":"An agnostic plug and play grid system, built with pure javascript and scss created to help front end developers ship out their code with better (and more responsive) user experience. This grid system started out as a one-man passion project and ended up incorporated into Fidelity's official design system.",
        "problem":"Our development team had a difficult time with creating products that matched what UX designers had in mind. A lot of development time was spend in aligning items on the screen and make things responsive. Also, in trying to create custom css to deliver on UXD requirements, unmanageable source codes and often times unintended side effects would occur.",
        "action":"During one of our Learning Days at Fidelity, i set out to create a grid system to solve the css and alignment problem for my immedate team. We began using it in the very next development cycle.",
        "result":"The idea was shared with other teams and the gid system was brought in as part of Fidelity's design system. As a result, developers began to create more readable and intuitive code that was easier to navigate, and quicker to develop.",
        "metrics":"Development time cut to nearly half allowing teams to deliver nearly double of the number of storypoints in sprints to follow",
        "media":[
            {src:"project-images/grid-system-0.png",type:"image", description:"Alignment example"},
            {src:"project-images/grid-system-01.png",type:"image", description:"Alignment example"},
            {src:"project-images/grid-system-1.png",type:"image", description:"Alignment example"},
            {src:"project-images/grid-system-2.png",type:"image", description:"Alignment example"},
            {src:"project-images/grid-system-3.png",type:"image", description:"Feature example"},
        ]

   },
    {
        "name":"Component Library",
        "company":"GE Healthcare, CDx",
        "image-src":"./project-images/component-library.png",
        "date":"Since May 2019",
        "role":"Front-End Software Engineer",
        "techStack":[
                {"tooltip":"Typescript","src":"./logos/typescript.png"},
                {"tooltip":"Javascript","src":"./logos/javascript.png"},
                {"tooltip":"ReactJS","src":"./logos/react.png"},
                {"tooltip":"CSS3","src":"./logos/css3.png"},
                {"tooltip":"HTML","src":"./logos/html5.png"},
            ],
        "description":"A reusable component library to provide a better developer experience to front end developers by delivering plug-and-play components so they can create pixel perfect / high fidelity prototypes based on UX specifications without having to worry about each component’s styles and behaviors",
        "problem":"Development team has a difficult time putting together user interfaces as laid out by the user experience team due to either lack of technical skills or lack of available time in a sprint to properly work on each feature and functionalities along with all business logic.",
        "action":"This is a current project where I am acting as a frontend developer using ReactJS and ReactNative. In this project I meet with the UX Team regularly to go over their design components, already outlined in sketch, in order to turn them into reusable components. My ability to see the bigger picture and think strategically allows me t work with the UX team in order to better define which component should be worked on first as well as delivery strategy to the final user.",
        "result":"As a project in development, metrics are not available but it is expected to create a better developer experience, bridging the gap between development and user experience teams as well as better maintainability and reusability via dependency consumption / distribution.",
        "metrics":"",
        "media":[
            {src:"project-images/cdxlib/cdxlib_1.png",type:"image", description:"Button component with configurable options"},
            {src:"project-images/cdxlib/cdxlib_2.png",type:"image", description:"Button component with accessibility assessment"},
            {src:"project-images/cdxlib/cdxlib_3.png",type:"image", description:"Button component with code example"},
            {src:"project-images/cdxlib/cdxlib_4.png",type:"image", description:"Input component with configurable options"},
            {src:"project-images/cdxlib/cdxlib_5.png",type:"image", description:"Input component wuth code examples"},
            {src:"project-images/cdxlib/cdxlib_6.png",type:"image", description:"Card component"},
            {src:"project-images/cdxlib/cdxlib_7.png",type:"image", description:"Card component with code examples"}
        ]

   },
   {
    "name":"SmartTriage",
    "company":"GE Healthcare, Global Services Technology",
    "image-src":"./project-images/smarttriage.jpg",
    "date":"September 2016 - May 2019",
    "role":"Full Stack Software Engineer",
    "techStack":[
        {"tooltip":"Python","src":"./logos/python.png"},
        {"tooltip":"Solr","src":"./logos/solr.png"},
        {"tooltip":"Spark","src":"./logos/spark.png"},
        {"tooltip":"Javascript","src":"./logos/javascript.png"},
        {"tooltip":"Angular","src":"./logos/angular.png"},
        {"tooltip":"CSS3","src":"./logos/css3.png"},
        {"tooltip":"HTML","src":"./logos/html5.png"},
        {"tooltip":"Java","src":"./logos/java.png"},
        {"tooltip":"MongoDB","src":"./logos/mongodb.png"}
        ],
    "description":"SmartTriage leverages the past to predict the future. It is an application that uses customer symptoms, system logs and system information matched against over 2 million records of service history to help Remote engineers decide what is the best course of action to fix an equipment.",
    "problem":"With the influx of new remote engineers being hired along with the number of 30+ years engineers retiring, lack of experience becomes an issue. Looking through service records, syphoning throw error logs and going through documentation adds up to the time it takes to troubleshoot each call.",
    "action":"I came into SmartTriage as the initial prototyper. I was given an idea to run with, making all the infra-structure decisions as well as dev stack and  data approaches. After the full functional initial prototype was created and went on to become a product, I took on the role of lead developer  (front and backend) as well as functional product owner for the following two years, working with the contracted data analysts, GE’s data analytics team and CRM teams to integrate the features with their products.<br/>During this period I went on to become machine learning certified with Apache Spark to better understand and help the team with prediction accuracy issues.",
    "result":"SmartTriage resulted in a $10 million VCP for the business in its first year of release, by helping remote engineers work their calls faster, cutting down on troubleshooting steps and automating most manual steps. The accuracy of its predictions along with preemptive error log parsing leaves less room for human errors, saving the business time and money.",
    "metrics":"",
    "media":[
        {src:"project-images/smarttriage/st_1.png",type:"image", description:"SmartTriage Main screen with recommendations"},
        {src:"project-images/smarttriage/st_2.png",type:"image", description:"SmartTriage Main screen with Service Procedure"},
        {src:"project-images/smarttriage/st_3.png",type:"image", description:"SmartTriage Main screen with log parser"},
        {src:"project-images/smarttriage/st_4.png",type:"image", description:"SmartTriage log parser full view"},
        {src:"project-images/smarttriage/st_5.png",type:"image", description:"SmartTriage Main screen with log search"},
        {src:"project-images/smarttriage/st_6.png",type:"image", description:"SmartTriage symptom in another language"},
        {src:"project-images/smarttriage/st_7.png",type:"image", description:"SmartTriage with notification"},
        {src:"project-images/smarttriage/st_8.png",type:"image", description:"SmartTriage with selected options"}
        
    ]

},
{
    "name":"Find an Expert",
    "company":"GE Healthcare, Global Services Technology",
    "image-src":"./project-images/fae.jpg",
    "date":"March 2016 - September 2016",
    "role":"Full Stack Software Engineer",
    "techStack":[
        {"tooltip":"Java","src":"./logos/java.png"},
        {"tooltip":"Angular","src":"./logos/angular.png"},
        {"tooltip":"CSS3","src":"./logos/css3.png"},
        {"tooltip":"HTML","src":"./logos/html5.png"},
        {"tooltip":"OracleDB","src":"./logos/oracle.png"}
    ],
    "description":"Internally nicknamed “The Uber of Field service,” Find An Expert is a web application that allows customers who are facing issues with their equipment to find and communicate with the best available field engineer in their area, bypassing all the internal call routing and manual searching. ",
    "problem":"The process for customers to request service on their equipment is multi-step and lengthy routing every call through call centers, remote engineers and finally field service engineer. In addition the manual investigation steps to decide to dispatch a call, and the search through several databases to find out who is the best trained field engineer to take that call is time consuming.",
    "action":"As a solo full stack developer, paired with a User experience designer,   I had the opportunity to work on all facet of this product  from  its original idea to product ready phase. My ability to always stay current with the technologies available allowed me to introduced two major changes to our development stack going from angular 1.4 to 2.0 and machine learning trained on service history and training data to find the best field engineer for the job. <br/> Since this was a solo development job, the ability to multitask, organize and see the bigger picture were essential to see this project through the finish line.",
    "result":"Find An Expert helped avoid the average 30min per customer onhold time on service calls by pre-triaging and connecting the customer immediately with an expert in their equipment around their area.",
    "metrics":"",
    "media":[
        {src:"project-images/fae/fae.mov",type:"video"},
        {src:"project-images/fae/fae_1.png",type:"image"},
        {src:"project-images/fae/fae_2.png",type:"image"},
        {src:"project-images/fae/fae_3.png",type:"image"},
        {src:"project-images/fae/fae_4.png",type:"image"},
        {src:"project-images/fae/fae_5.png",type:"image"},
        {src:"project-images/fae/fae_6.png",type:"image"},
        {src:"project-images/fae/fae_7.png",type:"image"},
    ]

},
{
    "name":"SynerGE CRM",
    "company":"GE Healthcare, Global Services Technology",
    "image-src":"./project-images/synerge.png",
    "date":"March 2015 - September 2016",
    "role":"Front-End Software Engineer",
    "techStack":[
        {"tooltip":"Angular","src":"./logos/angular.png"},
        {"tooltip":"Javascript","src":"./logos/javascript.png"},
        {"tooltip":"HTML","src":"./logos/html5.png"},
        {"tooltip":"CSS","src":"./logos/css3.png"},
        {"tooltip":"Java","src":"./logos/java.png"},
        {"tooltip":"OracleDB","src":"./logos/oracle.png"}
    ],
    "description":"SynerGE is a CRM web application built on top of a Siebel platform and oracle database to allow remote engineers to document, troubleshoot and dispatch service calls for all GE Diagnostics imaging equipment calls.",
    "problem":"Current Siebel CRM available at the time introduced a lengthy process for Remote Engineers to work through their daily calls. The long and cumbersome process resulted in longer wait time for customers in queue, difficulty to find and order the correct replacement part and a less than ideal manual multistep to dispatch field engineers and follow up on their onsite procedures.",
    "action":"In this project I worked as a lead developer along with a Siebel developer, a frontend developer, a business analyst and a project owner. As a lead developer (along with BA) I met with the users weekly as we iterated through the design and hardened the user experience based on their feedback. During this time, and due to the high demand of this project, I also became a Siebel developer taking over the role for the remainder of my time with the team.",
    "result":"SynerGE streamlined the user experience for field engineers reducing the amount of clicks (and time) to complete an entire service call from 250 to 120 clicks.  My full stack development background played a crucial role in overcoming challenges to bring together different legacy platforms (and information) not thought possible before. Under my leadership, with proper planning and above average technical skills, the SynerGE team was able to go from concept to ready-to-use product in record time. <br/> SynerGE directly impacted the business by increasing the amount of calls taken per FE each day by 20%. The application has a total of 435 active daily users processing an average of 12 service calls per day. SynerGE has processed over 1.2 million calls since its release.",
    "metrics":""
},
{
    "name":"FE Homepage",
    "company":"GE Healthcare, Americas",
    "image-src":"./project-images/fehomepage.jpg",
    "date":"November 2012 - April 2015",
    "role":"Front-End Software Engineer",
    "techStack":[
        {"tooltip":"HTML","src":"./logos/html5.png"},
        {"tooltip":"CSS3","src":"./logos/css3.png"},
        {"tooltip":"Javascript","src":"./logos/javascript.png"},
        {"tooltip":"Java","src":"./logos/java.png"},
        {"tooltip":"Oracle","src":"./logos/oracle.png"},

    ],
    "description":"The FEHP is a portal with more than 300 visits a day where users can easily find all the documents, links, procedures, tutorials and tools to betters and quickly perform their everyday tasks.",
    "problem":"The Entire FEHP and subsidiaries was developed by third party contractors. The cost to maintain and add new features, going up every year, became unfeasible, and the time it took to deploy new features to the customers was not quick enough.",
    "action":"After a few weeks as a content consultant, I took over the development of few features. Happy with the visual result and my ability to deliver the features quicker than expected, I was offered to assist in the broader project. Due to my expertise in java, oracleDB and html development and the knowledge I had gathered while working on the project I soon became the sole full stack developer for the FE Homepage.",
    "result":"After I joined the project we went from having new features released once a month to every other week. Meeting with the customers twice week allowed for keeping a better pulse on customer needs, up-to-date user stories and quicker ux/ui feedback on features being developed; increasing customer satisfaction with the final product and minimizing the need to make further changes on already deployed features.",
    "metrics":"Avg Users - from 25/day to 300/day <br/> Avg Session Duration: from 27s to 60s <br/> Bounce Rate: from 81% down to 20% <br/> Avg Page Returns: increased to 70% <br/> <br/> More users started to visit the FEHP daily and spend double the amount of time in the portal each visit. Seventy percent of these users returned to the FEHP and 80% of users would navigate past the landing page.",
    "media":[
        {src:"project-images/fehp/FEHP_brainstorm.mp4",type:"video", description:"FE Homepage brainstorming session"},
        {src:"project-images/fehp/FEHP_crew.jpg",type:"image", description:"FE Homepage & MyDCS Team"},
        {src:"project-images/fehp/FEHP_crew_2.jpg",type:"image",  description:"FE Homepage brainstorming session"},
        {src:"project-images/fehp/FEHP_crew_3.jpg",type:"image", description:"FE Homepage brainstorming session"},
    ]
}

]

export const getProject = (id) => projects[id];