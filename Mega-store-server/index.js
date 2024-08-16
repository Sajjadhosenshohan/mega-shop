require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    credentials: true,
}
// middleware
app.use(cors(corsOptions));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ejfr6xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const megaShop_user_collection = client.db("megaShop").collection("megaShop_user");
        const megaShop_products_collection = client.db("megaShop").collection("megaShop-products");


        // // jwt related api
        // app.post('/jwt', async (req, res) => {
        //     const user = req.body;
        //     const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
        //     res.send({ token });
        // })

        // // middlewares 
        // const verifyToken = (req, res, next) => {
        //     // console.log('inside verify token', req.headers.authorization);
        //     if (!req.headers.authorization) {
        //         return res.status(401).send({ message: 'unauthorized access' });
        //     }
        //     const token = req.headers.authorization.split(' ')[1];
        //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        //         if (err) {
        //             return res.status(401).send({ message: 'unauthorized access' })
        //         }
        //         req.decoded = decoded;
        //         next();
        //     })
        // }



        // await client.db("admin").command({ ping: 1 });

        app.post("/users", async (req, res) => {
            const data = req.body;

            const query = { email: data?.email }
            const isAvailable = await megaShop_user_collection.findOne(query)
            if (isAvailable) {
                return res.send({ message: 'user already exists', insertedId: null })
            }

            const result = await megaShop_user_collection.insertOne(data);
            res.send(result)
        })

        app.get("/allProducts", async (req, res) => {

            const page = parseInt(req.query.page);
            const size = parseInt(req.query.size);

            // query
            let query = {

            };

            // query by brand name
            const brandName = req.query.brandName || "";
            if (brandName) {
                query.brandName = brandName;
            }

            // query by category name
            const category = req.query.category || "";
            if (category) {
                query.category = category;
            }

            // search
            const search = req.query.search || "";
            if (search) {
                query.productName = { $regex: search, $options: "i" };
            }



            // Initialize sorting objects
            let price_query = {};
            let sortQuery = {};

            // Sort by price
            const sort = req.query.sort || "";
            if (sort === "asc") {
                price_query.price = 1; // Ascending order
            } else if (sort === "dsc") {
                price_query.price = -1; // Descending order
            }

            // Sort by date
            const DateSort = req.query.DateSort || "";
            if (DateSort === "newest") {
                sortQuery.productCreationDate = -1; // Newest first
            } else if (DateSort === "oldest") {
                sortQuery.productCreationDate = 1; // Oldest first
            }

            // Merge sorting objects
            const finalSortQuery = { ...price_query, ...sortQuery };

            // Filter by price range
            const minPrice = parseFloat(req.query.minPrice) || 0;
            const maxPrice = parseFloat(req.query.maxPrice) || 1000;
            query.price = { $gte: minPrice, $lte: maxPrice };


            const allProducts = await megaShop_products_collection.find(query)
                .sort(finalSortQuery) // Apply sorting here
                .skip(page * size)
                .limit(size)
                .toArray();


            const count = await megaShop_products_collection.countDocuments(query)
            // console.log(allProducts, count)

            res.send({
                products: allProducts,
                count: count
            })

        })

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("my assets is running")
})

app.listen(port, () => {
    console.log(`My assets is running on port ${port}`);
})