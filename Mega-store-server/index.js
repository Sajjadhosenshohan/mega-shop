require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion} = require('mongodb');
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
        
        app.post("/users", async(req,res)=>{
            const data = req.body;
            const result = await megaShop_user_collection.insertOne(data);
            res.send(result)
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