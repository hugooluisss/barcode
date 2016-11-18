$(document).ready(function(){
	alert("Hola Mundo");
	
	cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );
	
	
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert("We got a barcode\n" +
			"Result: " + result.text + "\n" +
			"Format: " + result.format + "\n" +
			"Cancelled: " + result.cancelled);
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	
	
	my_stream = new Stream("http://209.208.97.249/mobile/live/index.m3u8", onSuccess, onError);
	// Play audio
	my_media.play();
	function onSuccess() {
    		console.log("playAudio():Audio Success");
	}
	function onError(error) {
    		alert('code: '    + error.code    + '\n' +
    			'message: ' + error.message + '\n');
	}
});
