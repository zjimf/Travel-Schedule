import axios from "axios";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function RandomPointsGetRandomAttractions(begin, end, randomPoints) {
  let allAttractions = [];
  const pickFirstOne = [];
  for (const point of randomPoints) {
    const pickFive = [];

    const data = {
      location: `${point.lat},${point.lng}`,
    };
    try {
      const response = await axios.post(
        // `https://us-central1-ncusetravelschedule.cloudfunctions.net/app`,
        "https://1266-140-115-80-251.ngrok-free.app",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const attractions = response.data.results.map((result) => ({
        name: result.name,
        location: {
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng,
        },
      }));

      for (let i = 0; i < 6; i++)
        pickFive.push(attractions[getRandomInt(attractions.length)]);

      allAttractions.push(pickFive);
      pickFirstOne.push(attractions[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return { allAttractions, pickFirstOne };
}

export default RandomPointsGetRandomAttractions;
