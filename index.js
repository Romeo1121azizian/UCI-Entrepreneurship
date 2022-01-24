var map;

function initMap(){
    map = new google.maps.Map(
        document.getElementById('map'),
        {center: new google.maps.LatLng(33.642466, -117.846760), zoom:15});

    var iconBase =
        'http://maps.google.com/mapfiles/kml/paddle/';

    var icons = {
        A: {
            icon: iconBase + 'A_maps.png'
        },
        B: {
            icon: iconBase + 'B_maps.png'
        },
        C: {
            icon: iconBase + 'C_maps.png'
        },
        D: {
            icon: iconBase + 'D_maps.png'
        },
        E: {
            icon: iconBase + 'E_maps.png'
        },
        F: {
            icon: iconBase + 'F_maps.png'
        },
        G: {
            icon: iconBase + 'G_maps.png'
        },
        H: {
            icon: iconBase + 'H_maps.png'
        },
        I: {
            icon: iconBase + 'I_maps.png'
        },
        J: {
            icon: iconBase + 'J_maps.png'
        },
        K: {
            icon: iconBase + 'K_maps.png'
        },
        L: {
            icon: iconBase + 'L_maps.png'
        },
        M: {
            icon: iconBase + 'M_maps.png'
        },
        N: {
            icon: iconBase + 'N_maps.png'
        },
        O: {
            icon: iconBase + 'O_maps.png'
        },
        P: {
            icon: iconBase + 'P_maps.png'
        },
        Q: {
            icon: iconBase + 'Q_maps.png'
        }
    };

    var features = [
        {
            position: new google.maps.LatLng(33.646141, -117.836847),
            type: 'A'
        }, {
            position: new google.maps.LatLng(33.637999, -117.848972),
            type: 'B'
        }, {
            position: new google.maps.LatLng(33.640518, -117.854019),
            type: 'C'                   
        }, {
            position: new google.maps.LatLng(33.637865, -117.848768),
            type: 'D'
        }, {
            position: new google.maps.LatLng(33.646734, -117.837912),
            type: 'E'
        }, {
            position: new google.maps.LatLng(33.642851, -117.841210),
            type: 'F'
        }, {
            position: new google.maps.LatLng(33.644128, -117.849978),
            type: 'G'
        }, {
            position: new google.maps.LatLng(33.643445, -117.851898),
            type: 'H'
        }, {
            position: new google.maps.LatLng(33.643363, -117.852373),
            type: 'I'
        }, {
            position: new google.maps.LatLng(33.642643, -117.841532),
            type: 'J'
        }, {
            position: new google.maps.LatLng(33.644586, -117.841346),
            type: 'K'
        }, {
            position: new google.maps.LatLng(33.643814, -117.839102),
            type: 'L'
        }, {
            position: new google.maps.LatLng(33.640457, -117.854091),
            type: 'M'
        }, {
            position: new google.maps.LatLng(33.648856, -117.842119),
            type: 'N'
        }, {
            position: new google.maps.LatLng(33.640504, -117.856120),
            type: 'O'
        }, {
            position: new google.maps.LatLng(33.638142, -117.849181),
            type: 'P'
        }, {
            position: new google.maps.LatLng(33.643681, -117.845301),
            type: 'Q'
        }
    ];

    for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
    };
}
