const app = express();
app.use(express.json());

const transactions = [
  {id: 1, reference: "TX-06", amount: 863, day: 9, category: "rent"},
  {id: 2, reference: "TX-10", amount: 1016, day: 9, category: "rent"},
  {id: 3, reference: "TX-08", amount: 454, day: 8, category: "salary"},
  {id: 4, reference: "TX-11", amount: 667, day: 23, category: "rent"},
  {id: 5, reference: "TX-07", amount: -4, day: 8, category: "salary"},
  {id: 6, reference: "TX-12", amount: 949, day: 28, category: "fun"},
  {id: 7, reference: "TX-01", amount: 123, day: 8, category: "salary"},
  {id: 8, reference: "TX-05", amount: 540, day: 20, category: "fun"}
];

// TODO: protect writes with an api key
