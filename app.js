import express from "express";

const app = express();

const cities = [
  {
    cityName: "Lisbon",
    country: "Portugal",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    id: "73930385",
  },
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2027-07-15T08:22:53.976Z",
    notes: "",
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: "17806751",
  },
  {
    id: "4b2f",
    cityName: "Giza",
    country: "Egypt",
    emoji: "🇪🇬",
    date: "2024-10-29T10:13:13.171Z",
    notes: "my home",
    position: {
      lat: "29.984676214106376",
      lng: "31.210098266601566",
    },
  },
];

app.get("/api/cities", function (request, response) {
  return response.status(200).json({
    status: "success",
    result: cities.length,
    data: cities,
  });
});

app.listen(8080, function () {
  console.log("Sever is running on port 8000");
});
