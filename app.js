(function () {
  //Global Variables
  var ctemp;
  var cdt;
  var cphrase;
  //Weather Function
  function weather() {
    //Some basic stuff
    var location = document.getElementById("location");
    var apiKey = "99205d9d8c768513f61624c90c83f0e0";
    var url = "https://api.forecast.io/forecast/";
    var proxy = "https://cors-anywhere.herokuapp.com/"

    navigator.geolocation.getCurrentPosition(success, error);
    //for geolocation succ
    function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    currenticon = "";
    //request for the json for weather
    $.getJSON(proxy + url + apiKey + '/' + latitude + ',' + longitude + '?' + "units=si", function(forecast) {
      currenticon = forecast.currently.icon;
      ctemp = Math.round(forecast.currently.temperature);
      cdt = function (currenticon){
        if(forecast.currently.icon === "partly-cloudy-day" || "partly-cloudy-night" )
          return "cloudy";
        else
          return currenticon;
      }();
      //Construsct the phrase via the parser
      cphrase = phrasemaker((parser(cdt, ctemp)));
      console.log(cphrase);
      $("#some").html(cphrase);
  });
  }
  function error() {
    some.innerHTML = "Unable to retrieve your location";
  }
}
//Parser starts here
  function parser(con, temp){
    //list of available phrases
    phrases =[
      {
          highlight:"love is",
          title:"Fucking\nlove is\nin the air.",
          subline:"Take off your shirt and get wet.",
          min:25,
          condition:"clear",
          color:"FF0060"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\nraining.",
          subline:"You can look outside to get more information.",
          condition:"rain",
          color:"007EFF"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\ncloudy.",
          subline:"You can look outside to get more information.",
          condition:"cloudy",
          color:"007EFF"
      },
      {
          highlight:"fridge.",
          title:"Freezing\ncold like\na fucking\nfridge.",
          subline:"You can look outside to get more information.",
          max:4,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\nnice.",
          subline:"Take off your shirt but keep on your panties.",
          min:20,
          max:30,
          color:"FF0060"
      },
      {
          highlight:"fucking",
          title:"Holy\nfucking\nsnow.",
          subline:"Still not ready for building that fucking snow castle.",
          condition:"snow",
          color:"007EFF"
      },
      {
          color:"007EFF",
          condition:"clear",
          min:5,
          title:"It's\nfucking\nalright\ntoday.",
          subline:"Not amazeballs but also not fucking shitty.",
          highlight:"fucking",
          max:15
      },
      {
          highlight:"freezing",
          title:"Are you\nfreezing\nfucking\nserious?",
          subline:"You can't look outside because of fucking snow.",
          max:3,
          condition:"snow",
          color:"007EFF"
      },
      {
          highlight:"oven.",
          title:"It's like\na fucking\noven.",
          subline:"Just get naked, now - And get some ice cream.",
          min:30,
          color:"FFC600"
      },
      {
          color:"9F9F9F",
          condition:"cloudy",
          min:5,
          title:"It's just\nfucking\ngrey.",
          subline:"Just clouds & no love, but computer games.",
          highlight:"grey.",
          max:16
      },
      {
          highlight:"fucking",
          title:"Can't see\nbecause\nfucking\nsnow.",
          subline:"Try looking outside for more information, try it...",
          condition:"snow",
          color:"FFFFFF"
      },
      {
          highlight:"fucking",
          title:"Can't see\nbecause\nfucking\nsnow.",
          subline:"Try looking outside for more information, try it...",
          condition:"sleet",
          color:"FFFFFF"
      },
      {
          color:"FF0060",
          condition:"clear",
          min:20,
          title:"Fucking\nAmaze\nBalls.",
          subline:"So fucking nice outside, holy schmoly.",
          highlight:"Amaze",
          max:35
      },
      {
          highlight:"fucking",
          title:"I'm\nfucking\nmelting.",
          subline:"Take off your shirt and get wet.",
          min:23,
          color:"FF0000"
      },
      {
          highlight:"fucking",
          title:"It's so\nfucking\nhot.",
          subline:"I wouldn't go outside for more information.",
          min:25,
          color:"FF0000"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\ncar wash\ntime.",
          subline:"Exactly! It's going to be hot as shit.",
          min:24,
          color:"FF0F66"
      },
      {
          highlight:"fucking",
          title:"Let's get\nfucking\nnaked.",
          subline:"You heard it, it's going to be hot!",
          min:24,
          color:"FF0F66"
      },
      {
          highlight:"fucking",
          title:"Global\nfucking\nwarming.",
          subline:"Yeah, let's blame Global Warming.",
          min:30,
          color:"FF0000"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\ntropical.",
          subline:"Ice Cream is my final answer.",
          min:35,
          color:"FF0000"
      },
      {
          highlight:"damn",
          title:"It's too\ndamn\nhot.",
          subline:"Ice Cream is my final answer.",
          min:33,
          color:"FF0000"
      },
      {
          highlight:"you are",
          title:"I think\nyou are\nfucking\nhot.",
          subline:"Just kidding, but the fucking weather is.",
          min:25,
          color:"FF0000"
      },
      {
          highlight:"hot.",
          title:"Drop it\nlike it's\nhot.",
          subline:"*Don't drop your fucking iPhone though, seriously.",
          min:35,
          color:"FF0000"
      },
      {
          highlight:"BBQ",
          title:"It's\nfucking\nBBQ\ntime.",
          subline:"Vegetarians and Meat fans unite! BBQ is for all of us.",
          min:24,
          color:"FF0000"
      },
      {
          highlight:"umbrella.",
          title:"Get your\nfucking\numbrella.",
          subline:"Shitloads of rain is awaiting you.",
          condition:"rain",
          color:"007EFF"
      },
      {
          highlight:"shades",
          title:"Fucking\nfifty\nshades\nof grey.",
          subline:"Fucking grey clouds everywhere.",
          condition:"cloudy",
          color:"9F9F9F"
      },
      {
          highlight:"thunder",
          title:"Fucking\nthunder\nstorm.",
          subline:"It's time to sing the Fuck you Thunder song.",
          condition:"wind",
          color:"9F9F9F"
      },
      {
          highlight:"Cloudy",
          title:"Cloudy\nwith a\nchance\nof....",
          subline:"You thought I would say meatballs right? Stupid.",
          condition:"cloudy",
          color:"007EFF"
      },
      {
          highlight:"fucking",
          title:"It's\ngetting\nfucking\ndark.",
          subline:"The storm is coming - May the Force be with you.",
          condition:"wind",
          color:"9F9F9F"
      },
      {
          highlight:"stoopid.",
          title:"So hot\nmakin'\nme\nstoopid.",
          subline:"I heard that Ryan Gosling said this.",
          min:34,
          color:"FF0000"
      },
      {
          highlight:"stupid",
          title:"It's\nstupid\nhot.",
          subline:"Even fucking Siri has no answer for you today.",
          min:25,
          color:"FF0000"
      },
      {
          highlight:"whiskey",
          title:"It's\nfucking\nwhiskey\ntime.",
          subline:"This will warm you up. It's freezing!",
          max:5,
          color:"004A96"
      },
      {
          highlight:"skiing",
          title:"It's\nfucking\nskiing\ntime.",
          subline:"Snow every where, yay!",
          condition:"snow",
          color:"004A96"
      },
      {
          highlight:"monkey",
          title:"Cold ass\nmonkey\npants.",
          subline:"Yeah, exactly.",
          max:5,
          color:"004A96"
      },
      {
          highlight:"cold",
          title:"Hey girl\nare you\ncold?",
          subline:"That's because it's freezing outside. Go & look.",
          max:5,
          color:"004A96"
      },
      {
          highlight:"Hello?",
          title:"Hello?\nyes, this\nis snow-\nman.",
          subline:"It's time to build me. Look outside fancy pants.",
          condition:"snow",
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Frozen\nfucking\nweather.",
          subline:"It's fucking freezing right now, look outside.",
          max:5,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Negative\nfucking\nzero.",
          subline:"It's fucking freezing right now, look outside!",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Below\nfucking\nzero.",
          subline:"It's fucking freezing right now, look outside!",
          max:-1,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Cold as\nfucking\nshit.",
          subline:"You heard it, unpack your space heater!",
          max:4,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"It's\ngetting\nfucking\nchilly.",
          subline:"You heard it, unpack your space heater!",
          min:5,
          max:10,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Frozen\nfucking\nfingers.",
          subline:"Can't feel my fingers any more.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Frost\nfucking\nbite.",
          subline:"Can't feel my fingers any more.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"As cold\nas a\nfucking\npenguin.",
          subline:"I have to admit, that sounds kinda cute.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"North\nfucking\npole.",
          subline:"Nothing against the north pole, but seriously!",
          max:0,
          color:"004A96"
      },
      {
          highlight:"your shit.",
          title:"Icebergs\nall over\nyour shit.",
          subline:"Time to get cozy and watch Titanic again!",
          max:5,
          color:"004A96"
      },
      {
          highlight:"ice age.",
          title:"Fucking\nice age.",
          subline:"The movie was great, the weather is not.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\narctic.",
          subline:"Can't feel my fucking fingers any more.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Glacial\nfucking\nice.",
          subline:"Can't feel my fucking fingers any more.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Numb\nfucking\nfingers.",
          subline:"Can't feel my fucking fingers any more.",
          max:3,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Hypo\nfucking\nthermic.",
          subline:"A friend of mine called Tim said that. Smartypants.",
          max:-3,
          color:"004A96"
      },
      {
          highlight:"nipples",
          title:"Am I\nallowed\nto say\nnipples?",
          subline:"Because it's freezing! You get the point.",
          max:5,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"Brezzy\nfucking\nbreezy.",
          subline:"It's getting cold outside!",
          max:6,
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\nfoggy.",
          subline:"It's getting cold outside!",
          condition:"fog",
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\nwindy.",
          subline:"It's getting cold outside!",
          condition:"wind",
          color:"004A96"
      },
      {
          highlight:"shitty",
          title:"Totally\nnot\nshitty.",
          subline:"Look outside for more information.",
          min:10,
          condition:"cloudy",
          color:"004A96"
      },
      {
          highlight:"fucking",
          title:"It's\nfucking\nokay.",
          subline:"Look outside for more information.",
          min:9,
          max:20,
          color:"004A96"
      },
      {
          highlight:"ducking",
          title:"It's\nducking\nfreezing.",
          subline:"Oh damnit you fucking autocorrect.",
          max:3,
          color:"004A96"
      },
      {
          highlight:"nippy!",
          title:"It's a\nwee bit \nnippy!",
          subline:"This is for you my Scottish friends.",
          min:-3,
          max:6,
          color:"004A96"
      },
      {
          highlight:"frosty",
          title:"It's\nfrosty\nas fuck.",
          subline:"This is for you my Scottish friends.",
          max:0,
          color:"004A96"
      },
      {
          highlight:"It rains",
          title:"It rains\ncats and\ndogs.",
          subline:"You better get an umbrella my friend.",
          condition:"rain",
          color:"004A96"
      },
      {
          highlight:"for chest",
          title:"Prepare\nfor chest\nhair.",
          subline:"It's fucking freezing, boys & girls!",
          max:0,
          color:"004A96"
      },
      {
          highlight:"freeze.",
          title:"Fucking\nbrain\nfreeze.",
          subline:"Fuck Yeah Ice Cream!",
          min:20,
          color:"FF0000"
      },
      {
          highlight:"glasses.",
          title:"Sun\nfucking\nglasses.",
          subline:"Time to put on my coolest shades.",
          min:15,
          condition:"clear",
          color:"FF0000"
      },
      {
          highlight:"fried.",
          title:"Let's get\nfucking\nfried.",
          subline:"Take off your shirt but keep on the panties.",
          min:20,
          color:"FF0000"
      },
      {
          highlight:"fucking",
          title:"I'm on a\nfucking\nboat.",
          subline:"It's hot! Take off your shirt, keep on your pants.",
          min:20,
          color:"FF0000"
      },
      {
          highlight:"in bed.",
          title:"Meh...\nJust stay\nin bed.",
          subline:"You can browse Tumblr & play Angrybirds.",
          condition:"rain",
          color:"004A96"
      },
      {
          highlight:"in bed.",
          title:"Meh...\nJust stay\nin bed.",
          subline:"You can browse Tumblr & play Angrybirds.",
          condition:"sleet",
          color:"004A96"
      },
      {
          highlight:"in bed.",
          title:"Meh...\nJust stay\nin bed.",
          subline:"You can browse Tumblr & play Angrybirds.",
          min:10,
          condition:"cloudy",
          color:"004A96"
      },
      {
          highlight:"in bed.",
          title:"Meh...\nJust stay\nin bed.",
          subline:"You can browse Tumblr & play Angrybirds.",
          min:15,
          condition:"fog",
          color:"004A96"
      },
      {
          highlight:"beard.",
          title:"Grow a\nfucking\nbeard.",
          subline:"It's freezing outside, you will need it.",
          max:4,
          color:"004A96"
      },
      {
          highlight:"amazing",
          title:"You look\namazing\ntoday.",
          subline:"And so is the weather. You just need to believe it.",
          min:15,
          max:20,
          color:"FF0F66"
      },
      {
          highlight:"amazing",
          title:"You look\namazing\ntoday.",
          subline:"And so is the weather.",
          min:15,
          condition:"clear",
          color:"FF0F66"
      },
      {
          color:"FE730F",
          condition:"cloudy",
          min:3,
          title:"It’s like\na meh…\nkinda\nday.",
          subline:"But you can change it with a smile :) Or drugs.",
          highlight:"kinda",
          max:9
      }
  ];
  return getPhrase(con,temp);
  function getPhrase(condition, temp) {
    let possiblePhrase = [];
    phrases.forEach((v, k) => {
        if (v.condition) {
            if (v.condition == condition) {
                if (v.min) {
                    if (temp >= v.min) {
                        if (v.max) {
                            if (temp <= v.max) {
                                possiblePhrase.push(k)
                            }
                        } else {
                            possiblePhrase.push(k)
                        }
                    }
                } else if (v.max) {
                    if (temp <= v.max) {
                        possiblePhrase.push(k)
                    }
                } else {
                    possiblePhrase.push(k)
                }
            }
        } else {
            if (v.min) {
                if (temp >= v.min) {
                    if (v.max) {
                        if (temp <= v.max) {
                            possiblePhrase.push(k)
                        }
                    } else {
                        possiblePhrase.push(k)
                    }
                }
            } else if (v.max) {
                if (temp <= v.max) {
                    possiblePhrase.push(k)
                }
            }
        }
    });
    const random = Math.round(Math.random() * (possiblePhrase.length - 1));
    const yourPhrase = phrases[possiblePhrase[random]];
    return (yourPhrase);
  }
  
    //use replace() subsitute for display
  }
  
  weather();
//Phrasemaker 2000-inator
  function phrasemaker (ph){
    var processed = "";
    var highlighted = "<span id=with-anim>"+ph.highlight+"</span>";
    ph.title = ph.title.replace(ph.highlight,highlighted);
    processed = ph.title + "\n<span id=subtext>\n" + ph.subline + "</span>";
    console.log(ph.color);
    var effcolor = 'linear-gradient(45deg, #dadadada 20%, #'+ ph.color + ' 40%, #'+ ph.color + ' 60%, #dadadada 80%)';
    console.log(effcolor);
    $("#with-anim").css({"background":effcolor});
    return processed;
  }
})();