var wwd = new WorldWind.WorldWindow('canvasOne');

// Create imagery layers.
var BMNGOneImageLayer = new WorldWind.BMNGOneImageLayer();
var BMNGLayer = new WorldWind.BMNGLayer();
wwd.addLayer(BMNGOneImageLayer);
wwd.addLayer(BMNGLayer);

// Use the StarField layer to show stars and the Sun around the globe, and the Atmosphere layer to display
// the atmosphere effect and the night side of the Earth.
var starFieldLayer = new WorldWind.StarFieldLayer();
var atmosphereLayer = new WorldWind.AtmosphereLayer();
wwd.addLayer(starFieldLayer);
wwd.addLayer(atmosphereLayer);
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));


// The StarField layer positions its stars according to this date.
var now = new Date();
starFieldLayer.time = now;
atmosphereLayer.time = now;

// In this example, each full day/night cycle lasts 8 seconds in real time.
var simulatedMillisPerDay = 8.64e+7;

// Begin the simulation at the current time as provided by the browser.
var startTimeMillis = Date.now();

function runSimulation() {
    // Compute the number of simulated days (or fractions of a day) since the simulation began.
    var elapsedTimeMillis = Date.now() - startTimeMillis;
    var simulatedDays = elapsedTimeMillis / simulatedMillisPerDay;

    // Compute a real date in the future given the simulated number of days.
    var millisPerDay = 24 * 3600 * 1000; // 24 hours/day * 3600 seconds/hour * 1000 milliseconds/second
    var simulatedMillis = simulatedDays * millisPerDay;
    var simulatedDate = new Date(startTimeMillis + simulatedMillis);

    // Update the date in both the Starfield and the Atmosphere layers.
    starFieldLayer.time = simulatedDate;
    atmosphereLayer.time = simulatedDate;
    wwd.redraw(); // Update the WorldWindow scene.

    requestAnimationFrame(runSimulation);
}

// Animate the starry sky as well as the globe's day/night cycle.
requestAnimationFrame(runSimulation);

// Getting real time in seconds
const d = new Date();
var seconds = 0;
var minutes = d.getMinutes() * 60;
var hour = d.getHours() * 3600;
var day = d.getDate() * 60 * 60 * 24;
var month = (d.getMonth() + 1) * 60 * 60 * 24 * 30;
var year = d.getFullYear() * 60 * 60 * 24 * 365 + (((d.getFullYear() - d.getFullYear() % 4) / 4) * 60 * 60 * 24);
seconds += minutes + hour + day + month + year;
const sevs = Math.floor(d.getTime() / 1000);
//alert(d.getTime());

var increase = 1000;
var cameralock = false;

// Constants
var grav = 6.67 * Math.pow(10, -11);
var massEarth = 5.97219 * Math.pow(10, 24);
var vreme = seconds;
var c = 299792458;

var theta = 0;
var phi = 0;
var velocity = (27500 / 3600) * 1000; // m/s
var gamma = 1 / (Math.sqrt(1-Math.pow((velocity / c), 2)));
var radius = ((grav * massEarth) / Math.pow(velocity, 2)) / Math.pow(gamma, 2);
var period = ((2 * Math.PI)/ (velocity/radius)) / gamma;
var offsetA = 22.9 / period;
var deltaTheta = (vreme * (velocity/radius)*180/Math.PI);
var deltaPhi = 51.6 * Math.sin(deltaTheta*Math.PI/180);

// Fill the inputs values with the time now
window.onload = function() {
    document.getElementById("txtminutes").value = d.getMinutes();
    document.getElementById("txthours").value = d.getHours();
    document.getElementById("txtday").value = d.getDate();
    document.getElementById("txtmonth").value = d.getMonth() + 1;
    document.getElementById("txtyear").value = d.getFullYear();
    document.getElementById("txtVelocity").value = velocity;
    btntravel();
}

// Button travel
function btntravel(){
    var sts = true;
    switch(parseInt(document.getElementById("txtmonth").value)){
        case 1:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 2:
            if(parseInt(document.getElementById("txtyear").value) % 4 == 0){
                if(parseInt(document.getElementById("txtday").value) > 29 || parseInt(document.getElementById("txtday").value) < 1){
                    alert("Please enter a valid day number for this month");
                    sts = false;
                }
            }else{
                if(parseInt(document.getElementById("txtday").value) > 28 || parseInt(document.getElementById("txtday").value) < 1){
                    alert("Please enter a valid day number for this month");
                    sts = false;
                }
            }
            
            break;
        case 3:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 4:
            if(parseInt(document.getElementById("txtday").value) > 30 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 5:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 6:
            if(parseInt(document.getElementById("txtday").value) > 30 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 7:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 8:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 9:
            if(parseInt(document.getElementById("txtday").value) > 30 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 10:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 11:
            if(parseInt(document.getElementById("txtday").value) > 30 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        case 12:
            if(parseInt(document.getElementById("txtday").value) > 31 || parseInt(document.getElementById("txtday").value) < 1){
                alert("Please enter a valid day number for this month");
                sts = false;
            }
            break;
        default:
            alert("Enter valid number for month (1-12)");
            sts = false;
            break;
    }
    if(parseInt(document.getElementById("txtyear").value) > 2031 || parseInt(document.getElementById("txtyear").value) < 1998){
        alert("Please enter a valid year (1998-2031)");
        sts = false;
    }
    if(parseInt(document.getElementById("txthours").value) > 23 || parseInt(document.getElementById("txthours").value) < 0){
        alert("Please enter a valid hour (0-24)");
        sts = false;
    }
    if(parseInt(document.getElementById("txtminutes").value) > 59 || parseInt(document.getElementById("txtminutes").value) < 0){
        alert("Please enter a valid minutes (0-59)");
        sts = false;
    }
    if(sts){
        day = parseInt(document.getElementById("txtday").value) * 60 * 60 * 24;
        month = (parseInt(document.getElementById("txtmonth").value) + 1) * 60 * 60 * 24 * 30;
        year = parseInt(document.getElementById("txtyear").value) * 60 * 60 * 24 * 365 + (((parseInt(document.getElementById("txtyear").value) - parseInt(document.getElementById("txtyear").value) % 4) / 4) * 60 * 60 * 24);
        hour = parseInt(document.getElementById("txthours").value) * 3600;
        minutes = parseInt(document.getElementById("txtminutes").value) * 60;
        seconds = 0;    
        seconds += minutes + hour + day + month + year;
        vreme = seconds;
        deltaTheta = (vreme * (velocity/radius)*180/Math.PI);
        deltaPhi = 51.6 * Math.sin(deltaTheta*Math.PI/180);
        wwd.navigator.lookAtLocation.latitude = deltaPhi;
        wwd.navigator.lookAtLocation.longitude = deltaTheta - offsetA*vreme;
    }    
}

// Button change velocity
function fChangeVelocity(){
    velocity = parseInt(document.getElementById("txtVelocity").value);
    radius = ((grav * massEarth) / Math.pow(velocity, 2)) / Math.pow(gamma, 2);
    deltaTheta = (vreme * (velocity/radius)*180/Math.PI);
    deltaPhi = 51.6 * Math.sin(deltaTheta*Math.PI/180);
    wwd.navigator.lookAtLocation.latitude = deltaPhi;
    wwd.navigator.lookAtLocation.longitude = deltaTheta - offsetA*vreme;
    wwd.navigator.range = radius;
}

function fResetVelocity(){
    velocity = (27500 / 3600) * 1000;
    radius = ((grav * massEarth) / Math.pow(velocity, 2)) / Math.pow(gamma, 2);
    deltaTheta = (vreme * (velocity/radius)*180/Math.PI);
    deltaPhi = 51.6 * Math.sin(deltaTheta*Math.PI/180);
    wwd.navigator.lookAtLocation.latitude = deltaPhi;
    wwd.navigator.lookAtLocation.longitude = deltaTheta - offsetA*vreme;
    wwd.navigator.range = 10000000; 
}

//CUSTOM MODEL(ISS)
var modelLayer = new WorldWind.RenderableLayer();
wwd.addLayer(modelLayer);
var position = new WorldWind.Position(deltaPhi, deltaTheta - offsetA*vreme, radius - 6400000);
var config = {dirPath: './models/'};
var colladaLoader = new WorldWind.ColladaLoader(position, config);

colladaLoader.load("ISS.dae", function colladF(colladaModel) {
    colladaModel.scale = 500;
    wwd.navigator.lookAtLocation.latitude = deltaPhi;
    wwd.navigator.lookAtLocation.longitude = deltaTheta - offsetA*vreme;
    wwd.navigator.range = 10000000;
    function inInterval(){
        deltaTheta = (vreme * (velocity/radius)*180/Math.PI);
        deltaPhi = 51.6 * Math.sin(deltaTheta*Math.PI/180);
        if(cameralock == true){
            wwd.navigator.lookAtLocation.latitude = deltaPhi;
            wwd.navigator.lookAtLocation.longitude = deltaTheta - offsetA*vreme;
        }
        var position = new WorldWind.Position(deltaPhi, deltaTheta - offsetA*vreme, radius - 6400000); // se odzima od radiusot da dojde 400 km od povrsinata na zemjata
        colladaModel.position = position;
        vreme += 1 / increase;
    } 
    const interval = setInterval(inInterval, 1); 
    modelLayer.addRenderable(colladaModel);
});


// Checkbox fast forward
function fFastForward(){
    if (document.getElementById('cbFastForward').checked){
        increase = 1;
    } else {
        increase = 1000;
    }
}

// Checkbox camera lock
function fCameraLock(){
    if (document.getElementById('cbCameraLock').checked){
        cameralock = true;
    } else {
        cameralock = false;
    }
}

// The loader on the startup to disappear
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    $("body").css("overflow","unset");
    $(".btnVelocity").css("display","block");
});