import swaggerJsDoc from 'swagger-jsdoc'
import swaggerDocument from './swagger.json'

//swagger doc
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'mangyver-photo',
            description: 'Microservice to handle photo from mangyver services',
            contact: {
                name: 'Richard HC & Eiron Diaz'
            }
            //servers: ['http://localhost:3200', 'https://jopipedia.herokuapp.com']
        }
    },
    apis: ['src/swagger/swagger-doc.ts']
}

const swaggerDocs = swaggerJsDoc(swaggerDocument)

export default swaggerDocs