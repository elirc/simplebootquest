const app = express();
app.use(express.json());

const cars = [
  {id: 1, model: "Polo", priceK: 38, km: 170530, year: 2018, fuel: "petrol"},
  {id: 2, model: "Mazda3", priceK: 42, km: 21941, year: 2011, fuel: "hybrid"},
  {id: 3, model: "Model 3", priceK: 39, km: 89121, year: 2016, fuel: "hybrid"},
  {id: 4, model: "Golf", priceK: 31, km: 170064, year: 2019, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 51, km: 54530, year: 2011, fuel: "diesel"},
  {id: 6, model: "Mustang", priceK: 31, km: 33744, year: 2009, fuel: "electric"},
  {id: 7, model: "Civic", priceK: 19, km: 76746, year: 2008, fuel: "petrol"},
  {id: 8, model: "Fiesta", priceK: 49, km: 153746, year: 2022, fuel: "electric"}
];

app.get('/cars/stats', (req, res) => {
  const total = cars.reduce((s, x) => s + x.year, 0);
  res.json({ count: cars.length, totalYear: total, averageYear: cars.length ? Math.round(total / cars.length) : 0 });
});
