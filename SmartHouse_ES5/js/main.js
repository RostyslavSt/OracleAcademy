'use strict';

//model objects
var tvModel = new Tv('Sony');
var refrModel = new Refrigerator('Bosh');

//device's creator
var creator = new CreateDevice();



//view objects
var viewTv = new View(tvModel);

//controller
var controller = new Controller(tvModel, viewTv, creator);