function superDuperRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let pickUpRoutes = [];
    let deliveryRoutes = [];

    for (const parcel of parcels) {
      if (parcel.place != place) {
        pickUpRoutes.push(findRoute(roadGraph, place, parcel.place));
      } else {
        deliveryRoutes.push(findRoute(roadGraph, place, parcel.address));
      }
    }

    pickUpRoutes.sort((a, b) => {
      return a.length - b.length;
    });

    deliveryRoutes.sort((a, b) => {
      return a.length - b.length;
    });

    route = pickUpRoutes.length == 0 ? deliveryRoutes[0] : pickUpRoutes[0];
  }
  return { direction: route[0], memory: route.slice(1) };
}
