select
 concat(users.first_name,' ',last_name) as name , 
	count(sessions.session_id) as counts, count(game_stats.run_id) as attempts ,sum(game_stats.run_score) as total_score
	from users
	join sessions  on users.user_id = sessions.user_id
	join game_stats on  sessions.session_id  =  game_stats.session_id
	group by name 
	order by attempts desc;