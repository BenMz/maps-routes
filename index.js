
var variables = {    
      markerArray: [],  
      renderers: [],
      strokeColors: ["#5cb85c","#5c84b8"],
      flag: "am",
      amroutes: [    
        [15,16,25,21,22,17,12,13,14,11],
        [4,1,2,3,19,18,5,8,10,7,6,20,23,24,9]
      ],
      pmroutes: [
        [9,17,22,21,25,16,15],
        [11,14,12,13,20,23,24,19,18,5,7,6,8,10,1,2,3,4]
      ],

 
      stops: [
            {
              location: "14.66194,-90.535737",
              stopover: true,
              label: "Condado Naranjo, Condominio Santa Laura torre 5 apto 201"
            },
            {
              location: "14.664554,-90.540175",
              stopover: true,
              label: "Condado Naranjo, Condominio Dan Helena cas L-7 zona 4 Mixco"
             },
            {
              location: "14.660489,-90.541174",
              stopover: true,
              label: "Condado Naranjo Condominiob San Esteban"
             },
            {
              location: "14.678804,-90.55137",
              stopover: true,
              label: "9 calle A 5-90 zona 11 de Mixco Residenciales Minerva sur casa 35. (parada garita)"
             },
            {
              location: "14.646109,-90.560813",
              stopover: true,
              label: "6 calle 20-29 zona 4 de Mixco Villas de San José Residenciales Tulam Zu casa 4"
             },
            {
              location: "14.640936,-90.568226",
              stopover: true,
              label: "Pasarela del centro comercial Monserrat "
             },
            {
              location: "14.643895,-90.569299",
              stopover: true,
              label: "2 calle 11-77 colonia Monte Real zona 4 de Mixco"
             },
            {
              location: "14.643081,-90.563571",
              stopover: true,
              label: "Lote 6 Manzana J Zona 4 de Mixco Villas Del Rosario"
             },
            {
              location: "14.618666,-90.556925",
              stopover: true,
              label: '9 calle 22-43 zona 11 Residenciales San Jorge',
            },
            {
              location: "14.643738,-90.561341",
              stopover: true,
              label: "Cañadas del Naranjoncasa D16"
             },
             {
              location: "14.586803,-90.567477",
              stopover: true,
              label: 'Cañadas de Mariscal Zona 11',
            },
            {
              location: "14.599164,-90.558288",
              stopover: true,
              label: "9 ave 27-61 zona 11 Colonia Grani II",
            },
            {
              location: "14.59989,-90.559068",
              stopover: true,
              label: "27 calle 12-46 zona 11 Granai II",
            },
            {
              location: "14.596603,-90.557608",
              stopover: true,
              label: "30 calle A 7-01 zona 11 Granai I",
            },
            {
              location: "14.651706,-90.455138",
              stopover: true,
              label: "1era calle 20-10 zona 17 casa A24, condominio casa Florentina Premier"
             },
            {
              location: "14.657486,-90.498947",
              stopover: true,
              label: "14 ave 11-16 zona 2 Ciudad Nueva"
             },
            {
              location: "14.614245,-90.55011",
              stopover: true,
              label: "14 ave 9-25 zona 11 Carabanchel",
            },
            {
              location: "14.643481,-90.552576",
              stopover: true,
              label: "18 Calle 39-61 Zona 7 Colonia Villa Linda II Sector II"
             },
            {
              location: "14.642511,-90.549091",
              stopover: true,
              label: "18 calle 31-62 zona 7 Villa Linda II"
             },
            {
              location: "14.629132,-90.551404",
              stopover: true,
              label: "5 calle B 26-64 zona 7 Kaminal Juyu1"
             },
            {
              location: "14.621108,-90.537183",
              stopover: true,
              label: "5a. Avenida 9-01 Zapto A zona 7 Colonia Landívar",
            },
            {
              location: "14.618668,-90.538761",
              stopover: true,
              label: "6ta calle 'A' 5-57 zona Colonia Landivar",
            },
            {
              location: "14.632531,-90.55291",
              stopover: true,
              label: "8 calle 30-50 zona 7 Jardines de Tikal 1"
             },
            {
              location: "14.63004,-90.554198",
              stopover: true,
              label: "30 Avenida B 7-87 Zona 7 Tikal 1"
             },
            {
              location: "14.636497,-90.493683",
              stopover: true,
              label: "Gasolinera Puma Jardines de la Asunción 7a Calle Zona 5"
             },
        ]
      }



function initMap() {
  const markerArray = []
  // Instantiate a directions service.
  const directionsService = new google.maps.DirectionsService();
  // Create a map and center it on Manhattan.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 14.6210835, lng: -90.521788 },
  });
  // Create a renderer for directions and bind it to the map.
  const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });
  // Instantiate an info window to hold step text.
  const stepDisplay = new google.maps.InfoWindow();

  // Display the route between the initial start and end selections.
  calculateAndDisplayRoute(
    directionsRenderer,
    directionsService,
    markerArray,
    stepDisplay,
    map,
  );

  // Listen to change events from the start and end lists.
  const onChangeHandler = function () {
    variables.flag = document.getElementById("start").value
    calculateAndDisplayRoute(
      directionsRenderer,
      directionsService,
      markerArray,
      stepDisplay,
      map,
    );
  };

  document.getElementById("start").addEventListener("change", onChangeHandler);

}

function calculateAndDisplayRoute(
  directionsRenderer,
  directionsService,
  markerArray,
  stepDisplay,
  map,
) {

  // First, remove any existing markers from the map.
  for (let i = 0; i < variables.markerArray.length; i++) {
    variables.markerArray[i].setMap(null);
  }
  for (let i = 0; i < variables.renderers.length; i++) {
    variables.renderers[i].setMap(null);
  }
  
  variables.markerArray = []
  variables.renderers = [];
  var waypts = (variables.flag == "am") ? variables.amroutes : variables.pmroutes;
  for(var j = 0; j < waypts.length ; j++) {
    let route = waypts[j]
    
    for (var i = 0; i < route.length; i++) {
      var stop = variables.stops[route[i] - 1]
      
        let marker = new google.maps.Marker({
          position:  {lat: parseFloat(stop.location.split(",")[0]), lng: parseFloat(stop.location.split(",")[1])},
          visible: true,
          infoVisible: false,
          label: {text: (i+1) + "", color: "white"},
          school: stop.label,
          // icon: icon
        });
        google.maps.event.addListener(marker, "click", () => {
          stepDisplay.setContent(marker.school);
          stepDisplay.open(map, marker);
        });

        variables.markerArray.push(marker);
        marker.setMap(map);
      if(variables.flag == "am" && i == 0){
       continue 
      }
     const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({ map: map, suppressMarkers: true, polylineOptions: { strokeColor: variables.strokeColors[j] }});
      
        if(variables.flag == "pm" && i == 0){
          directionsService
            .route({
              origin: "14.588065,-90.570937",
              destination: stop.location,
              travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((result) => {
              directionsRenderer.setDirections(result);
            })
          }  else {
              directionsService
                .route({
                  origin: variables.stops[route[i-1] - 1].location,
                  destination: stop.location,
                  travelMode: google.maps.TravelMode.DRIVING,
                })
                .then((result) => {
                  directionsRenderer.setDirections(result);
                })
          }
          variables.renderers.push(directionsRenderer)
          if(variables.flag == "am" && i == route.length - 1){
           const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer({ map:  map, suppressMarkers: true, polylineOptions: { strokeColor: variables.strokeColors[j] }});
          directionsService
            .route({
              origin: stop.location,
              destination: "14.588065,-90.570937",
              travelMode: google.maps.TravelMode.DRIVING,
            })
            .then((result) => {
              directionsRenderer.setDirections(result);
            })
            variables.renderers.push(directionsRenderer)
          }

          
    }
  }
}


window.initMap = initMap;
