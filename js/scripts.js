var answer = function (L1, L2, L3) {
  //Make variables for the three values.
  var L1 = parseInt(document.getElementById("L1").value);
  var L2 = parseInt(document.getElementById("L2").value);
  var L3 = parseInt(document.getElementById("L3").value);

  var array = [L1, L2, L3];
  var text;

  //Conditions for not a Triangle
  if (
    L1 + L2 <= L3 ||
    L1 + L3 <= L2 ||
    L2 + L3 <= L1) {
    text = " Not a Triangle";
  }

  //Conditions for an Equilateral Traingle
  else if (
    // var text = " an Equilateral Traingle.";
    L1 === L2 &&
    L2 === L3 &&
    L3 === L1
  ) {
    text = " an Equilateral Traingle.";
  }



  //Conditions for an Isosceles traingle
  else if (
    L1 === L3 ||
    L3 === L2 ||
    L1 === L2
  ) {
    text = "an isosceles Traingle.";
  }

  //Conditions fro a Scalene Triangles
  else if (
    L1 !== L2 &&
    L1 !== L3 &&
    L2 !== L3
  ) {
    text = "a scalene Traingle.";
  }


  alert("These are the values you entered:" + " [" + array.join() + "] " + "\nThis is " + text);

};
