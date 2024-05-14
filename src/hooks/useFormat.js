export const useFormat = (data) => {
  //Created this custom hook for formating data to display.
  let format =
    data &&
    data.map((Flight) => {
      let temp = {
        fare: [],
        flight: [],
        aircraft: [],
        departure: [],
        arrival: [],
        route: [],
        class: [],
      };
      temp.price = Flight.price;
      Flight.fareBasis.forEach((level1) => {
        level1.forEach((level2) => {
          temp.fare.push(level2);
        });
      });
      Flight.class.forEach((level1) => {
        level1.forEach((level2) => {
          temp.class.push(level2);
        });
      });

      Flight?.itineraries.forEach((itinerary) => {
        temp.duration = itinerary.duration;
        itinerary?.segments.forEach((segment) => {
          temp.flight.push(segment.carrierCode + " " + segment.aircraft);
          temp.aircraft.push(segment.flightNumber);
          temp.route.push(
            segment.departure.iataCode + " - " + segment.arrival.iataCode
          );
          temp.departure.push(segment.departure.at);
          temp.arrival.push(segment.arrival.at);
        });
      });
      return temp;
    });
  return format;
};
