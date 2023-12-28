module.exports = {

    // ============
    // Suites
    // ============
    //
    // For example, here we have two suites defined, with first suite having two cases
    // and second suite having only a single case.
    //
    suites: [
        {
            name: 'Selenium',    // suite name
            cases: [             // cases inside this suite
                {
                    path: './tests/selenium-with-po.js'
                },
                {
                    path: './tests/pdf.js'
                }
            ]        
        },{
            name: 'Visual',
            cases: [
                {
                    path: './tests/visual.js'
                }
            ]        
        }
    ],
    
    // ============
    // Capabilities
    // ============
    //
    // If "concurrency" value is greater than 1, 
    // tests with different capabilities will be executed in parallel.
    //
    concurrency: 1,
    capabilities: [
        {
            browserName: 'chrome',    // execute on Chrome
        },
        {
            browserName: 'firefox',   // execute on Firefox
        }
    ],
    
    // ============
    // Parameters
    // ============
    //
    parameters : {
        file: '<excel or csv file path>',
        mode: 'seq', // can be 'random' or 'all' as well
    },
    
    // ============
    // Iterations
    // ============
    //
    // Tests will run only once if iterations number is not explicitly specified.
    //
    iterations: 1,
    
    // ============
    // Selenium & Appium server URLs
    // ============
    //
    // If not specified, the default URLs will be used
    //
    seleniumUrl: 'http://localhost:4444/wd/hub',
    appiumUrl: 'http://localhost:4723/wd/hub',

    // ============
    // Services
    // ============
    //
    // List services you want to enable during the test execution.
    // Available services: selenium-standalone | devtools
    // selenium-standalone needs to be installed with `npm i @wdio/selenium-standalone-service` first. 
    //
    services: ['selenium-standalone', 'devtools'],   
    
    // ============
    // Modules
    // ============
    // List modules you want to enable during the test execution.
    // Loading unnecessary modules might slow down your test execution, 
    // so only load modules that are used in the test.
    // See here https://docs.oxygenhq.org for a list of available modules.
    //
    modules: ['web', 'db', 'log', 'assert', 'pdf', 'http', 'email'],

    // ============
    // Framework
    // ============
    // Define a testing framework for this project. 
    // Available frameworks: oxygen | cucumber
    //
    framework: 'oxygen',

    // ============
    // Reporting
    // ============
    // Define test reporter format and corresponding options. 
    // Multiple reporter formats can be specified.
    // Available reporters: json | html | junit | excel | pdf | xml
    //
    reporting: {
        reporters: ['json'],
    },
    
    // ==========
    // Applitools
    // ==========
    // Define your Applitools service API key.
    // This is only for when using the `eyes` module.
    //
    applitoolsOpts: {
        key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    },
    
    // ==========
    // Hooks
    // ==========
    // Oxygen provides several hooks that can be used to interfere with the test
    // execution process. 
    //
    hooks: {
        //
        // Hook that gets executed before the test starts.
        // At this point, Oxygen has been already initialized, so you
        // can access Oxygen functionality via relevant modules. 
        //
        beforeTest: function(runId, options, caps) {
        },
        beforeSuite: function(suiteDef) {
        },
        beforeCase: function(caseDef) {
            log.info('Hey there! Case is about to start.');
        },
        beforeCommand: function(cmdDef) {
        },
        afterCommand: function(cmdResult) {
        },
        afterCase: function(caseDef, caseResult) {
            log.info(`currentdie is: ${__dirname}`);
            log.info(`Case result = ${JSON.stringify(caseResult)}`);
            //log.info(web.getSource());
        },
        afterSuite: function(suiteDef, suiteResult) {
        },
        afterTest: function(runId, testResult) {
            
        }
    }
};