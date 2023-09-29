function roadRadar(kmH, zone) {
  let speedLimit;
  switch (zone) {
    case "residential":
      speedLimit = 20;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "motorway":
      speedLimit = 130;
      break;
    case "city":
      speedLimit = 50;
      break;
  }
  if (kmH > speedLimit) {
    let diff = kmH - speedLimit;
    let status;

    if (diff <= 20) {
      status = "speeding";
    } else if (diff <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  } else {
    console.log(`Driving ${kmH} km/h in a ${speedLimit} zone`);
  }
}
roadRadar(40, 'city');
