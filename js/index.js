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
});