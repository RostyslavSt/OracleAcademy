'use strict';

//model objects
var tvModel = new Tv('Sony');
var refrModel = new Refrigerator('Bosh');

//device's creator
var creator = new CreateDevice();



//view objects
var view = new View();

//controller
var controller = new Controller(tvModel, view, creator);

view.renderDevices();