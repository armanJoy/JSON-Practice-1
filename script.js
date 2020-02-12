var profile = {
  "sazid" : {
    "name" : "Sazid Khan",
    "title" : "Developer",
    "mobile" : "01700000000",
    "address" : "Kazipara",
  },

  "jyoti" : {
    "name" : "Jyoti Roy",
    "title" : "Developer",
    "mobile" : "01711111111",
    "address" : "Mirpur 10",
  },

  "joy" : {
    "name" : "Arman Reza Joy",
    "title" : "Developer",
    "mobile" : "01722222222",
    "address" : "Mirpur 2",
  },
};

  var sazidClick = 0;
  var jyotiClick = 0;
  var joyClick  = 0;
  debugger;
  function button(event) {
    var element = event.target;
    var eventId = element.id;
    if(eventId=="sazidButton"){
      sazidClick++;
      if(sazidClick%2==1)
      {
        showSazid();
      }
      else if (sazidClick%2==0) {
        hideSazid();
      }
    }
    else if(eventId=="jyotiButton") {
      jyotiClick++;
      if(jyotiClick%2==1)
      {
        showJyoti();
      }
      else if (jyotiClick%2==0) {
        hideJyoti();
      }
    }
    else if(eventId=="joyButton") {
      joyClick++;
      if(joyClick%2==1)
      {
        showJoy();
      }
      else if (joyClick%2==0) {
        hideJoy();
      }
    }
  }

function showSazid() {

    document.getElementById("datasazid").innerHTML = "Name: " + profile.sazid.name + '<BR>' + "Designation: " + profile.sazid.title + '<br>' + "Contact: " + profile.sazid.mobile + '<br>' + "Address: " + profile.sazid.address ;
}

function showJyoti() {
  document.getElementById("datajyoti").innerHTML = "Name: " + profile.jyoti.name + '<BR>' + "Designation: " + profile.jyoti.title + '<br>' + "Contact: " + profile.jyoti.mobile + '<br>' + "Address: " + profile.jyoti.address ;
}

function showJoy() {
  document.getElementById("datajoy").innerHTML = "Name: " + profile.joy.name + '<BR>' + "Designation: " + profile.joy.title + '<br>' + "Contact: " + profile.joy.mobile + '<br>' + "Address: " + profile.joy.address ;
}

function hideSazid() {

    document.getElementById("datasazid").innerHTML = "";
}

function hideJyoti() {
  document.getElementById("datajyoti").innerHTML = "";
}

function hideJoy() {
  document.getElementById("datajoy").innerHTML = "";
}
