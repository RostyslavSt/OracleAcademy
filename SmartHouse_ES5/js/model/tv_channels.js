'use stritct';

// ['discovery', 'sport', 'science', 'education', 'music', 'fishing', 'motosport', 'formula 1'];
function TvChannels() {
    this.channels = [{
            name: 'discovery',
            path: '../../img/discovery_channel.jpg'
        },
        {
            name: 'sport',
            path: '../../img/sport.jpg'
        },
        {
            name: 'science',
            path: '../../img/science.jpg'
        },
        {
            name: 'education',
            path: '../../img/Education-channel.jpg'
        },

    ]
}

var listChannels = new TvChannels();