WITH tab1 AS(SELECT * FROM payment),
	 tab2 AS(SELECT * FROM inventory WHERE store_id = 2),
	 tab3 AS(SELECT title, SUM(amount) AS rental_total FROM tab1 
			JOIN rental USING(rental_id)
			JOIN tab2 USING(inventory_id)
			JOIN film USING(film_id)
			GROUP BY title
			ORDER BY SUM(amount) DESC
			LIMIT 10 )
	 SELECT * FROM tab3
