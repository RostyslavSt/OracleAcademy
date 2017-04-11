function Templates() {
    this.tv = `<li class="tv-container" id="{{tv-id}}">
        <div class="remove-device-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <h2 class="tv-header">TV</h2>
        <p class="tv-name">{{tv-name}}</p>
        <p class="tv-info">{{tv-info}}</p>
        <button type="button" name="power" class="power btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
        <button type="button" name="volumeUp" class="volumeUp btn btn-success btn-xs glyphicon glyphicon-volume-up" disable></button>
        <button type="button" name="volumeDown" class="volumeDown btn btn-success btn-xs glyphicon glyphicon-volume-down"></i></button>
        <button type="button" name="volumeOff" class="volumeOff btn btn-success btn-xs glyphicon glyphicon-volume-off"></i></button>
        <button type="button" name="prevChannel" class="prevChannel btn btn-primary btn-xs glyphicon glyphicon-step-backward"></button>
        <button type="button" name="nextChannel" class="nextChannel btn btn-primary btn-xs glyphicon glyphicon-step-forward"></button>
    </li>`;
    this.refr = `<li class="refr-container" id="{{refr-id}}">
        <div class="remove-device-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <h2 class="refr-header">Refrigerator</h2>
        <p class="refr-name">{{refr-name}}</p>
        <p class="refr-info">{{refr-info}}
            <span><i class="fa fa-thermometer-empty" aria-hidden="true"></i></span>
        </p>
        <p>Cooling camera
         <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
        </p>
        <div class="cooling-camera-container">
            <input class="name-product-cooling" type="text" placeholder="Enter name of product">
            <button class="add-product-cooling">Add product</button>
            <ul class="cooling-camera-list">

            </ul>
        </div>
        <p>Freezing camera
            <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
            <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
            <span><i class="fa fa-snowflake-o" aria-hidden="true"></i></i></span>
        </p>
        <div class="freezing-camera-container">
            <input class="name-product-freezing" type="text" placeholder="Enter name of product">
            <button class="add-product-freezing">Add product</button>
            <ul class="freezing-camera-list">

            </ul>
        </div>
        <button type="button" name="power" class="power btn btn-danger btn-xs"><i class="fa fa-power-off" aria-hidden="true"></i> Power</button>
        <button type="button" name="tempUp" class="tempUp btn btn-success btn-xs glyphicon glyphicon-plus" disable></button>
        <button type="button" name="tempDown" class="tempDown btn btn-success btn-xs glyphicon glyphicon-minus"></i></button>
    </li>`;

    this.ProductContainer = `<li id={{id-product}}>
        <div class="remove-product-block"><p class="remove-device glyphicon glyphicon-remove"></p></div>
        <p class="name-product">{{name-product}}</p>
    </li>`;
};

var template = new Templates();