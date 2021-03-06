UPDATE public.rental SET rental_date = rental_date +
 MAKE_INTERVAL(YEARS := 2021 - EXTRACT(YEAR FROM rental_date)::INTEGER)
 
UPDATE public.rental SET rental_date = rental_date +
 MAKE_INTERVAL(YEARS := 2022 - EXTRACT(YEAR FROM rental_date)::INTEGER)
 WHERE rental_date BETWEEN '2021-01-01' AND '2021-07-13'
 
UPDATE public.rental SET return_date = rental_date + interval '1 week'

-- These were used to give reults to rentals due section

UPDATE public.rental 
	SET rental_date = rental_date + INTERVAL '1 week'
	WHERE rental_date > DATE '2022-07-11'

UPDATE public.rental 
	SET return_date = return_date + INTERVAL '1 week'
	WHERE rental_date > DATE '2022-07-11'