
--  determine top 5 most popular actor based on the rental frequency
PSQL CONNECT TO "//localhost:5432/dvdrental" AS dvdrental USER postgres;
drop view if exists
public.top5_actor_popular ;

create view top5_actor_popular as
select concat(actor.first_name,' ', actor.last_name) as fullname, count(rental.rental_id) as counts
from rental
join inventory on rental.inventory_id = inventory.film_id
join film on inventory.inventory_id = film.film_id
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
group by fullname
order by counts desc
limit 5;

select * from public.top5_actor_popular