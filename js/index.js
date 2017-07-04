/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicitly call 'app.receivedEvent(...);'
	onDeviceReady: function(){
		document.addEventListener('pause', function(){
			getGPS("Entre en modo background");
		}, false); 
		
		document.addEventListener('resume', function(){
			getGPS("Me reactivé");
		}, false);
		//document.addEventListener('online', this.onLineApp, false);
		//document.addEventListener('offline', this.offLineApp, false);
		//document.addEventListener('backbutton', this.onBackButton, false);
	
	
		getGPS("Pruebas");
		
		function getGPS(mensaje){
			var f = new Date;
			navigator.geolocation.getCurrentPosition(function(position){
				$.post("http://192.168.2.4/info.php", {
					"mensaje": mensaje,
					"latitude": position.coords.latitude,
					"longitude": position.coords.longitude,
					"altitude": position.coords.altitude,
					"fecha": f.getYear() + "-" + f.getMonth() + "-" + f.getDay() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()
				}, function(){
			
				});
			}, function(){
				console.log("Error");
			});
		}
	}
};


app.initialize();

$(document).ready(function(){
	
});
