require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3001,
    mongoURI: process.env.MONGODB_PRODUCT_URI || 'mongodb://mongo:27017/productproject',
    rabbitMQURI: process.env.RABBITMQ_URI || 'amqp://admin:123456@rabbitmq:5672',
    queueName: 'product',
};
  