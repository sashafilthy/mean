/**
 * Created by ifelsc on 9/27/2017.
 */
var path = require('path');
var blanket = require('blanket');

blanket({
    pattern: [
        path.resolve(__dirname, '../../../controllers')
    ]
})