function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


function clicked(key) {
    
    if(key == 1){
        document.getElementById('dash_board').style.display = 'block';  
        document.getElementById('userprofile').style.display = 'none';
        document.getElementById('form1').style.display = 'none';
        document.getElementById('googleMap').style.display = 'none';
        
        document.getElementById('heading').innerHTML = 'Dashboard';
    }
    else if (key == 2){
        document.getElementById('dash_board').style.display = 'none';  
        document.getElementById('userprofile').style.display = 'block';
        document.getElementById('form1').style.display = 'none';
        document.getElementById('googleMap').style.display = 'none';

        document.getElementById('heading').innerHTML = 'User Profile';
    }
    else if (key == 3){
        document.getElementById('dash_board').style.display = 'none';  
        document.getElementById('userprofile').style.display = 'none';
        document.getElementById('form1').style.display = 'block';
        document.getElementById('googleMap').style.display = 'none';

        document.getElementById('heading').innerHTML = 'Form';
    }
    else if (key == 4){
        document.getElementById('dash_board').style.display = 'none';  
        document.getElementById('userprofile').style.display = 'none';
        document.getElementById('form1').style.display = 'none';
        document.getElementById('googleMap').style.display = 'block';

        document.getElementById('heading').innerHTML = 'Map';
    }
}