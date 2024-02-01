import db from "../config/dbconfig.js";

export const Payment = async (req, res) => {
    const { serviceid, order_id, name, price, qty } = await req.body;
    let authString = btoa(`${process.env.SERVER_KEY}:`);
    let parameter = {
        transaction_details: {
            order_id: order_id,
            gross_amount: price * qty
        },
        item_details: {
            id: serviceid,
            price: price,
            quantity: qty,
            name: name
        }
    }

    const response = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Basic ${authString}`
        },
        body: JSON.stringify(parameter)
    })

    const result = await response.json();

    res.json({ result });
};

export const TRXStatus = async (req, res) => {
    const {order_id} = await req.body;
    console.log(order_id);

    const authString = btoa(`${process.env.SERVER_KEY}:`);

    const response = await fetch(`https://api.sandbox.midtrans.com/v2/${order_id}/status`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Basic ${authString}`
        }
    });

    const result = await response.json();

    res.json({ result });
}