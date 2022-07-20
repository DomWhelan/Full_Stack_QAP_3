-- getRentalsByID() manipulating "rentalsByCustomer" view

SELECT * FROM public."rentalsByCustomer"
    WHERE customer_id = ${id} AND rental_date > (CURRENT_DATE - '1 year'::interval)

-- getRentalsDue() manipulating "rentalsByCustomer" view

SELECT * FROM public."rentalsByCustomer"
    WHERE return_date > CURRENT_DATE ORDER BY return_date ASC LIMIT 50

-- store1TopRentals() select all from "top10RentalsStore1" view

SELECT * FROM public."top10RentsStore1"

-- store2TopRentals() select all from "top10RentalsStore2" view

SELECT * FROM public."top10RentsStore2"