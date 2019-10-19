const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            description : 'Backend Services',
            version : '1.0.0',
            title: 'TEST API BACKEND',
            logo: 'logo!',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: ['application/json'],
        schemes: [
            'http',
        ],
    },
    apis: [undefined,'./**/api/route/*.route.js'],
};

module.exports = {
 spec() {
     return swaggerJSDoc(options);
 }
};
