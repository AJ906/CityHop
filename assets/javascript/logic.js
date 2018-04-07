(function($) {
    $(function() {
 
      $('.button-collapse').sideNav();
      $('select').material_select();
      $('.dropdown-button').dropdown();
 
    }); // end of document ready
  })(jQuery); // end of jQuery name space


var config = {
    apiKey: "AIzaSyAfwIYxRwylW_E_p9z1fnuwN0qTTqZNx5g",
    authDomain: "first-firebase-afdaf.firebaseapp.com",
    databaseURL: "https://first-firebase-afdaf.firebaseio.com",
    storageBucket: "first-firebase-afdaf.appspot.com",

};

firebase.initializeApp(config);

var dataRef = firebase.database();

var vlat = 33.8273952;
var vlng = -84.466407;
var vzoom = 3;
var city = { name: ["atl","mia","nyc","chg","los"],
    lat:[33.8273952,25.761680,40.6971494,41.85,34.0201613],
    lang:[-84.466407,-80.191790,-74.2598712, -87.64999999999998,-118.6919267]
};

var places = { placename:["Piedmont Park","Atlanta Botanical Garden","SunTrust Park","Fox Theatre","World of Coca-Cola"],
    cityname: ["atl","atl","atl","atl","atl"],
    lat:[33.7760763,33.7887578,33.8907854,33.7725845,33.7628693],
    lang:[-84.407654,-84.3776903,-84.4699601,-84.3877915,-84.3948583]
};

$(document).on("click", ".btn", function()
{ event.preventDefault();
    console.log(this.id);
    for(i = 0;i < city.name.length;i++)
    {

        if(this.id === city.name[i])
        {
            console.log(city.name[i],city.lat[i],city.lang[i]);
            vlat = city.lat[i];
            vlng = city.lang[i];
            vzoom = 10;
            initMap();
            $("#hops").html("");
            for (j=0;j<places.placename.length;j++)
            {
                if(places.cityname[j] === city.name[i])
                {

                    var a = $("<button class='btn btn-info'>  </button>");

                    a.attr("data-name", places.placename[j]);
                    a.text(places.placename[j]);
                    a.attr("id",j);

                    $("#hops").append(a);
                }

            }

            if(city.name[i] === "los"){
                var userFeed = new Instafeed({
                    target: 'instafeed',
                    get: 'tagged',
                    tagName: 'losangeles',
                    clientId: '69836a1b3e934354894e03d0bb04286b',
                    accessToken: '7440074842.69836a1.1f4fe9f3a0504cec8bd1f3ed3796328c',
                    resolution: 'low_resolution',
                    sortBy: 'most-recent',
                    limit: 5,
                    links: false,
                    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
                });
                $("#instafeed").empty();
                $("#nameDisplay").text("Los Angeles, LA");
                userFeed.run();
            }
            if(city.name[i] === "nyc"){
                var userFeed1 = new Instafeed({
                    target: 'instafeed',
                    get: 'tagged',
                    tagName: 'newyork',
                    clientId: '69836a1b3e934354894e03d0bb04286b',
                    accessToken: '7440074842.69836a1.1f4fe9f3a0504cec8bd1f3ed3796328c',
                    resolution: 'low_resolution',
                    sortBy: 'most-recent',
                    limit: 5,
                    links: false,
                    template: '<a href="{{link}}" target="_blank" ><img src="{{image}}" /></a>'
                });
                $("#instafeed").empty();
                $("#nameDisplay").text("New York, NY");
                userFeed1.run();
            }
            if(city.name[i] === "atl"){
                var userFeed2 = new Instafeed({
                    target: 'instafeed',
                    get: 'tagged',
                    tagName: 'atlanta',
                    clientId: '69836a1b3e934354894e03d0bb04286b',
                    accessToken: '7440074842.69836a1.1f4fe9f3a0504cec8bd1f3ed3796328c',
                    resolution: 'low_resolution',
                    sortBy: 'most-recent',
                    limit: 5,
                    links: false,
                    template: '<a href="{{link}}" target="_blank" ><img src="{{image}}" /></a>'
                });
                $("#instafeed").empty();
                $("#nameDisplay").text("Atlanta, GA");
                userFeed2.run();
            }
            if(city.name[i] === "chg"){
                var userFeed3 = new Instafeed({
                    target: 'instafeed',
                    get: 'tagged',
                    tagName: 'chicago',
                    clientId: '69836a1b3e934354894e03d0bb04286b',
                    accessToken: '7440074842.69836a1.1f4fe9f3a0504cec8bd1f3ed3796328c',
                    resolution: 'low_resolution',
                    sortBy: 'most-recent',
                    limit: 5,
                    links: false,
                    template: '<a href="{{link}}" target="_blank" ><img src="{{image}}" /></a>'
                });
                $("#instafeed").empty();
                $("#nameDisplay").text("Chicago, IL");
                userFeed3.run();
            }
            if(city.name[i] === "mia"){
                var userFeed4 = new Instafeed({
                    target: 'instafeed',
                    get: 'tagged',
                    tagName: 'miami',
                    clientId: '69836a1b3e934354894e03d0bb04286b',
                    accessToken: '7440074842.69836a1.1f4fe9f3a0504cec8bd1f3ed3796328c',
                    resolution: 'low_resolution',
                    sortBy: 'most-recent',
                    limit: 5,
                    links: false,
                    template: '<a href="{{link}}" target="_blank" ><img src="{{image}}" /></a>'
                });
                $("#instafeed").empty();
                $("#nameDisplay").text("Miami, FL");
                userFeed4.run();
            }

        }

    }
    // if($(this).val()==)
});

function initMap()
{
    console.log(vlat,vlng,vzoom);
    var map = new google.maps.Map(document.getElementById('maps'), {
        zoom: vzoom,
        center: {lat: vlat, lng: vlng} //33.8273952,-84.466407
    })

    /* for (j=0;j<places.placename.length;j++)
     {
       if(places.cityname[j] === city.name[i])
       {
       var flat = places.lat[j];
       var flng = places.lang[j];
       var marker = new google.maps.Marker({
         position: {lat: flat, lng: flng},
         map: map
         });
       }

     }*/



};

$(document).on("click", ".btn-info", function()
{ event.preventDefault();
    var m;
    var blat = 33.8273952;
    var blng = -84.466407;
    for(k=0;k<places.cityname.length;k++)
    {
        console.log(this.id, k);
        if(parseInt(this.id) === k)
        {
            blat=places.lat[k];
            blng=places.lang[k];
            console.log(blat);
            console.log(blng);
            m=k;
        }
    }

    var map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 14,
        center: {lat: blat, lng: blng} //33.8273952,-84.466407
    });

    var marker = new google.maps.Marker({
        position: {lat: blat, lng: blng},
        map: map
    });
    // Here we are building the URL we need to query the database
    var queryURL = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search.json?q="+blat + "," + blng +
        "&apikey=7bojNmSIKHOhVFv54Ep6cUWOj4h3mfof";
    var conditionURL;
    var key;



    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response.Key);
            key = response.Key;

            conditionURL = "http://dataservice.accuweather.com/currentconditions/v1/" + key +
                "?apikey=7bojNmSIKHOhVFv54Ep6cUWOj4h3mfof&details=1";

            // Nested ajax
            $.ajax({
                url: conditionURL,
                method: "GET"
            })
            // We store all of the retrieved data inside of an object called "response"
                .then(function(response) {
                    console.log(response);
                    console.log(conditionURL);
                    $("#weather").html("<h5> Weather Condition: <strong>" + response[0].WeatherText + "</strong><br> <br>Temperature: <strong>"+response[0].Temperature.Imperial.Value +" F</strong></h5>");

                    console.log(places.placename[m]);

                    dataRef.ref().push({

                        placename: places.placename[m],
                        city: places.cityname[m],
                        weather: response[0].WeatherText,
                        temp: response[0].Temperature.Imperial.Value + " F",
                        time: moment().format("MMMM Do YYYY, h:mm a")
                    });

                });

        });

});



dataRef.ref().on("child_added", function(childSnapshot) {

// Log everything that's coming out of snapshot
    console.log(childSnapshot.val().placename);



// full list of items to the well
    $("#places").append("<tr> <td> " + childSnapshot.val().placename +
        " </td><td> " + childSnapshot.val().city +
        " </td><td> " + childSnapshot.val().weather +
        " </td> <td> " + childSnapshot.val().temp +
        " </td> <td> " + childSnapshot.val().time + " </td> </tr>");

// Handle the errors
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});



$(document).ready(function(){
    $('.sidenav').sidenav();

});

// Token Refresh URL
// https://api.instagram.com/oauth/authorize/?client_id=69836a1b3e934354894e03d0bb04286b&redirect_uri=https://elfsight.com/service/generate-instagram-access-token/&response_type=code&scope=public_content



