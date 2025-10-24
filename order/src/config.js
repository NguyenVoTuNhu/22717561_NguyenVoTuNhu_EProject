require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3002,
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://mongo:27017/orderproject',
    rabbitMQURI: process.env.RABBITMQ_URI || 'amqp://admin:123456@rabbitmq:5672',
    queueName: 'orders', // product thì là 'products_queue'
};
  