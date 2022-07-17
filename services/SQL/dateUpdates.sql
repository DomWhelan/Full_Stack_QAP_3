UPDATE public.rental SET rental_date = rental_date +
 MAKE_INTERVAL(YEARS := 2021 - EXTRACT(YEAR FROM rental_date)::INTEGER)
 
UPDATE public.rental SET rental_date = rental_date +
 MAKE_INTERVAL(YEARS := 2022 - EXTRACT(YEAR FROM rental_date)::INTEGER)
 WHERE rental_date BETWEEN '2021-01-01' AND '2021-07-13'
 
UPDATE public.rental SET return_date = rental_date + interval '1 week'