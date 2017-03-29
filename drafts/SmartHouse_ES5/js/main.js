'use strict';

//model objects
var tvModel = new Tv('Sony', listChannel);
var refrModel = new Refrigerator('Bosh');
var lampModel = new Lamp('maxus');
var conditionerModel = new Conditioner('Samsung');

//view objects
var view = new View(tvModel);


//controller
var controller = new Controller(tvModel, view);



// var controller = new Controller();