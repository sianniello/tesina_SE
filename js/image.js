/**
 * Created by Stefano on 29/06/2017.
 */

function getLastImage() {
    var imageUrl = 'http://stenomyapp.ddns.net:5000/cams/1/get_image?type=1';
    imageExists(imageUrl, function(exists) {
        console.log('RESULT: url=' + imageUrl + ', exists=' + exists);
        if (exists==true) {
            $('#myImage').attr("src", "http://stenomyapp.ddns.net:5000/cams/1/get_image?type=1");
            $('#img_panel').show();
            return text = 'ok';
        }
        else
        alert('No image found');
    });
}

function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}