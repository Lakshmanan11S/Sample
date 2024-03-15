const PORT = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    // .then(() => console.log("Connected to MongoDB"))
    // .catch(err => console.error("Failed to connect to MongoDB:", err));

app.get("/", (req, res) => {
    res.send("My name is sundhar");
});

app.use("/api",router);

app.listen(PORT, () => {
    console.log("The server is running on PORT", PORT);
});

