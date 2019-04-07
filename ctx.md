this
```js
{
    ctx: {
        request: {
            method: 'GET',
            url: '/',
            header: [Object]
        },
        response: {
            status: 404,
            message: 'Not Found',
            header: [Object]
        },
        app: {
            env: 'local',
            name: 'ax-server',
            baseDir: '/Users/mhy/private/ax-server',
            subdomainOffset: 2,
            config: '<egg config>',
            controller: '<egg controller>',
            httpclient: '<egg httpclient>',
            loggers: '<egg loggers>',
            middlewares: '<egg middlewares>',
            router: '<egg router>',
            serviceClasses: '<egg serviceClasses>'
        },
        originalUrl: '/',
        req: '<original node req>',
        res: '<original node res>',
        socket: '<original node socket>'
    },
    app: {
        env: 'local',
        name: 'ax-server',
        baseDir: '/Users/mhy/private/ax-server',
        subdomainOffset: 2,
        config: '<egg config>',
        controller: '<egg controller>',
        httpclient: '<egg httpclient>',
        loggers: '<egg loggers>',
        middlewares: '<egg middlewares>',
        router: '<egg router>',
        serviceClasses: '<egg serviceClasses>'
    },
    config: {
        session: {
            maxAge: 86400000,
            key: 'EGG_SESS',
            httpOnly: true,
            encrypt: true,
            overwrite: true,
            signed: true,
            autoCommit: true,
            encode: [Function: encode],
            decode: [Function: decode],
            genid: [Function]
        },
        security: {
            domainWhiteList: [Array],
            protocolWhiteList: [],
            defaultMiddleware: 'csrf,hsts,methodnoallow,noopen,nosniff,csp,xssProtection,xframe,dta',
            csrf: [Object],
            xframe: [Object],
            hsts: [Object],
            dta: [Object],
            methodnoallow: [Object],
            noopen: [Object],
            nosniff: [Object],
            referrerPolicy: [Object],
            xssProtection: [Object],
            csp: [Object],
            ssrf: [Object],
            _protocolWhiteListSet: [Set]
        },
        helper: {
            shtml: {}
        },
        jsonp: {
            limit: 50,
            callback: [Array],
            csrf: false
        },
        onerror: {
            errorPageUrl: '',
            appErrorFilter: null,
            templatePath: '/Users/mhy/private/ax-server/node_modules/egg-onerror/lib/onerror_page.mustache'
        },
        i18n: {
            defaultLocale: 'en_US',
            dirs: [Array],
            queryField: 'locale',
            cookieField: 'locale',
            cookieMaxAge: '1y',
            functionName: '__'
        },
        watcher: {
            type: 'development',
            eventSources: [Object]
        },
        customLogger: {
            scheduleLogger: [Object]
        },
        schedule: {
            directory: []
        },
        multipart: {
            mode: 'stream',
            autoFields: false,
            defaultCharset: 'utf8',
            fieldNameSize: 100,
            fieldSize: 102400,
            fields: 10,
            fileSize: 10485760,
            files: 10,
            fileExtensions: [],
            whitelist: null,
            tmpdir: '/var/folders/6b/p3mmjslj43v_p9jwgxpp00_80000gp/T/egg-multipart-tmp/ax-server',
            cleanSchedule: [Object]
        },
        development: {
            watchDirs: [],
            ignoreDirs: [],
            fastReady: false,
            reloadOnDebug: true,
            overrideDefault: false
        },
        logrotator: {
            filesRotateByHour: null,
            hourDelimiter: '-',
            filesRotateBySize: null,
            maxFileSize: 52428800,
            maxFiles: 10,
            rotateDuration: 60000,
            maxDays: 31
        },
        static: {
            prefix: '/public/',
            dir: '/Users/mhy/private/ax-server/app/public',
            dynamic: true,
            preload: false,
            buffer: false,
            maxFiles: 1000
        },
        view: {
            root: '/Users/mhy/private/ax-server/app/view',
            cache: false,
            defaultExtension: '.html',
            defaultViewEngine: '',
            mapping: {}
        },
        mongoose: {
            url: '',
            options: {},
            loadModel: true,
            app: true,
            agent: false,
            client: [Object]
        },
        env: 'local',
        name: 'ax-server',
        keys: 'ax-server_1553329987414_9935',
        proxy: false,
        protocolHeaders: 'x-forwarded-proto',
        ipHeaders: 'x-forwarded-for',
        hostHeaders: '',
        pkg: {
            name: 'ax-server',
            version: '1.0.0',
            description: '',
            private: true,
            egg: [Object],
            scripts: [Object],
            dependencies: [Object],
            devDependencies: [Object],
            engines: [Object],
            ci: [Object],
            repository: [Object],
            author: 'mahy',
            license: 'MIT'
        },
        baseDir: '/Users/mhy/private/ax-server',
        HOME: '/Users/mhy',
        rundir: '/Users/mhy/private/ax-server/run',
        dump: {
            ignore: [Set]
        },
        confusedConfigurations: {
            bodyparser: 'bodyParser',
            notFound: 'notfound',
            sitefile: 'siteFile',
            middlewares: 'middleware',
            httpClient: 'httpclient'
        },
        notfound: {
            pageUrl: ''
        },
        siteFile: {
            '/favicon.ico':
                <
                Buffer 89 50 4 e 47 0 d 0 a 1 a 0 a 00 00 00 0 d 49 48 44 52 00 00 00 ca 00 00 00 ca 08 06 00 00 00 e4 65 df a8 00 00 00 01 73 52 47 42 00 ae ce 1 c e9 00 00 18 f9... >
        },
        bodyParser: {
            enable: true,
            encoding: 'utf8',
            formLimit: '100kb',
            jsonLimit: '100kb',
            strict: true,
            queryString: [Object],
            detectJSON: undefined,
            onerror: undefined,
            returnRawBody: true
        },
        logger: {
            dir: '/Users/mhy/private/ax-server/logs/ax-server',
            encoding: 'utf8',
            env: 'local',
            level: 'DEBUG',
            consoleLevel: 'INFO',
            disableConsoleAfterReady: false,
            outputJSON: false,
            buffer: true,
            appLogName: 'ax-server-web.log',
            coreLogName: 'egg-web.log',
            agentLogName: 'egg-agent.log',
            errorLogName: 'common-error.log',
            coreLogger: [Object],
            allowDebugAtProd: false,
            type: 'application'
        },
        httpclient: {
            enableDNSCache: false,
            dnsCacheLookupInterval: 10000,
            dnsCacheMaxLength: 1000,
            request: [Object],
            httpAgent: [Object],
            httpsAgent: [Object]
        },
        meta: {
            enable: true,
            logging: false
        },
        coreMiddleware: ['meta',
            'siteFile',
            'notfound',
            'static',
            'bodyParser',
            'overrideMethod',
            'session',
            'securities',
            'i18n',
            'eggLoaderTrace'
        ],
        workerStartTimeout: 600000,
        serverTimeout: null,
        cluster: {
            listen: [Object]
        },
        clusterClient: {
            maxWaitTime: 60000,
            responseTimeout: 60000
        },
        onClientError: null,
        middleware: ['proxy', 'gzip'],
        coreMiddlewares: ['meta',
            'siteFile',
            'notfound',
            'static',
            'bodyParser',
            'overrideMethod',
            'session',
            'securities',
            'i18n',
            'eggLoaderTrace'
        ],
        appMiddlewares: ['proxy', 'gzip'],
        appMiddleware: ['proxy', 'gzip'],
        multipartParseOptions: {
            autoFields: false,
            defCharset: 'utf8',
            limits: [Object],
            checkFile: [Function: checkFile]
        }
    },
    service: ClassLoader {
        _cache: Map {},
        _ctx: {
            request: [Object],
            response: [Object],
            app: [Object],
            originalUrl: '/',
            req: '<original node req>',
            res: '<original node res>',
            socket: '<original node socket>'
        }
    }
}
```