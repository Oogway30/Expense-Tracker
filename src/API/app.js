const express = require('express');
const app = express();

app.use(express.json());

app.post("/api/add-remove/transactions", (req, res) => {


})
app.get("/api/show/transactions", (req, res) => {


})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}   );