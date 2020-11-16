var express = require('express');
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroOptions = require('./admin/admin');
var app = express();
const mongoose = require('mongoose');


//Database
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.connection.once('open', function () {
  console.log('Database connected Successfully');
}).on('error', function (err) {
  console.log('Error', err);
})

//Admin Bro
AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro(AdminBroOptions)

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)
app.use(express.static('public'));
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});