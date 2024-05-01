use anime_learning_db;

delimiter $$
drop procedure if exists insert_ws $$
create procedure insert_ws()
begin
	declare done int default false;
	declare my_wid int unsigned;
    declare my_SID int unsigned;
    declare my_jword varchar(1000);
	declare cur cursor for select WID, JWord from word;
    declare continue handler for not found set done = true;
	open cur;
    read_loop: loop
		fetch cur into my_wid, my_jword;
		if done then
			leave read_loop;
		end if;
        -- do something
        -- select my_wid;
        set my_jword = concat('%', my_jword, '%');
        
        set my_SID = (select s.SID from sentence s, co, class c
		where s.JText like my_jword and s.SID=co.OID and co.CID=c.CID);
        
	end loop read_loop;
    close cur;
end
$$
delimiter ;
call insert_ws();
commit;


