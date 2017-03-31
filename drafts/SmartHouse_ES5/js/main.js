'use strict';

//model objects
var tvModel = new Tv('Sony', listChannel);
var refrModel = new Refrigerator('Bosh');
var lampModel = new Lamp('maxus');
var conditionerModel = new Conditioner('Samsung');

//view objects
var viewTv = new View(tvModel);
// var viewRefr = new View(viewRefr);


//controller
var controller = new Controller(tvModel, viewTv);



