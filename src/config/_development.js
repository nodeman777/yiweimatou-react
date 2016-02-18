export default (config) => ({
    compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
    api_url             : {
        inside  :{

        },
        outside :{

        }
    }
});

