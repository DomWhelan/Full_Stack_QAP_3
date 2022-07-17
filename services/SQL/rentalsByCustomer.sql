 SELECT customer.customer_id,
    concat(customer.first_name, ' ', customer.last_name) AS full_name,
    film.title,
    rental.rental_date,
    rental.return_date
   FROM rental
     JOIN customer USING (customer_id)
     JOIN inventory USING (inventory_id)
     JOIN film USING (film_id)
  ORDER BY customer.customer_id;