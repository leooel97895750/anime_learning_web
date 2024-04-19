use anime_learning_db;

-- select * from class limit 0, 10000;
select * from co, sentence where co.CID=66 and co.OID=sentence.SID;