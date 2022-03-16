/* 
 * Backend REST services on Express
 */

const express = require("express");
const router = express.Router();

// MongoDB
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/mydb");

// GET products list
router.get("/products", async function (req, res) {
    try {

        await client.connect();
        const database = client.db("mydb");
        const products = database.collection("products");

        // query products
        const result = await products.find().toArray();
        console.log(`/api/products returned ${result.length} product data`);

        res.status(200).json(result);

    } catch (err) {

        console.log(err);
        res.status(500).json({ "error": err });

    } finally {
        await client.close();
    }
});

// POST order
router.post("/orders", async function (req, res) {
    try {

        let newId = 1;

        await client.connect();
        const database = client.db("mydb");
        const orders = database.collection("orders");

        // find the highest order id
        if (await orders.countDocuments() > 0) {
            const result = await orders.find().sort({ id: -1 }).limit(1).toArray();
            newId = result[0].id + 1;
        }

        // write new order data
        const newOrder = { ...req.body, id: newId };
        await orders.insertOne(newOrder);
        console.log(`/api/orders wrote new order: ${JSON.stringify(newOrder)}`);

        res.status(200).json({ "id": newId });

    } catch (err) {

        console.log(err);
        res.status(500).json({ "error": err });

    } finally {
        await client.close();
    }
});

module.exports = router
