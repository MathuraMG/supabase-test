import 'dotenv/config';
import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use('/', express.static('public')); // serve client-side code

// DB - 1 - connect to the DB
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// to parse JSON
app.use(express.json());

// add a route on server, that is listening for a post request
app.post('/noCups', async (req, res) => {
    console.log(req.body);
    let currentDate = Date().toString(); // using Date().toString() to make it more readable

    // DB - 2 - add value to the DB
    const { error } = await supabase
        .from('coffee_tracker')
        .insert({ date: currentDate, coffee: req.body.number });

    if (error) {
        console.error(error);
        return res.json({ task: "failed" });
    }
    res.json({ task: "success" });
});

// add route to get all coffee track information
app.get('/getCups', async (req, res) => {
    // DB - 3 - fetch from the DB
    const { data, error } = await supabase
        .from('coffee_tracker')
        .select('*');

    if (error) {
        console.error(error);
        return res.json({ data: [] });
    }
    res.json({ data });
});

app.listen(3000, () => {
    console.log('listening at localhost:3000');
});