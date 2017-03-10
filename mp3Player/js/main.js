// function TechnicalDetails(itemWeight, productDimensions) {
//     this.itemWeight = '132g';
//     this.productDimensions = productDimensions;
// }

var mediaLibrary = [
    {
        author: 'Selin Dion',
        track: 'I`am alive'
    },
    {
        author: 'Alan Walker',
        track: 'fade in'
    },
    {
        author: 'Whitney Houston',
        track: 'When You Believe'
    },
    {
        author: 'Mariah Carey',
        track: 'Hero'
    },
]

function MP3Player(model, color, mediaLibrary) {
    this.volume = 5;
    numTrack = 0;
    this.model = model;
    this.color = color;
    this.play = function () {
        console.log(this.model + ' ' + 'is playing now - ' + mediaLibrary[numTrack].author + ' : ' + mediaLibrary[numTrack].track);
    }
    this.stop = function () {
        console.log(this.model + ' ' + 'stoped');
    }
    this.volumeUp = function () {
        this.volume++;
        return this.volume;
    }
    this.volumeDown = function () {
        this.volume--;
        return this.volume;
    }
    this.nextTrack = function() {
        if (numTrack === mediaLibrary.length - 1) {
            numTrack = 0;
            return mediaLibrary[numTrack].author + ' : ' + mediaLibrary[numTrack].track
        } else {
            numTrack++;
            return mediaLibrary[numTrack].author + ' : ' + mediaLibrary[numTrack].track
        }
        
    }
    this.previousTrack = function() {
        if (numTrack === 0 ) {
            numTrack = mediaLibrary.length - 1;
            return mediaLibrary[numTrack].author + ' : ' + mediaLibrary[numTrack].track
        } else {
            numTrack--;
            return mediaLibrary[numTrack].author + ' : ' + mediaLibrary[numTrack].track
        }
        
    }
}

var mp = new MP3Player('Sony Xperia T3', 'grey', mediaLibrary);
console.dir(mp);