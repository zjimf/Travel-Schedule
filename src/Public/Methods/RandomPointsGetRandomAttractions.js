import axios from "axios";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function RandomPointsGetRandomAttractions(begin, end, randomPoints) {
  let allAttractions = [];
  const pickFirstOne = [];
  let cleanedBegin, cleanedEnd;
  for (const point of randomPoints) {
    const pickFive = [];
    try {
      const response = await axios.get(
        `http://localhost:3001/api/getAttractions`,
        {
          params: {
            location: `${point.lat},${point.lng}`,
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
