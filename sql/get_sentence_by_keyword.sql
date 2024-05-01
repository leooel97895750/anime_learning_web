use anime_learning_db;

select c.CName, c.YoutubeID, s.JText, s.Start, s.Duration from sentence s, co, class c
where s.JText like '%勇者%' and s.SID=co.OID and co.CID=c.CID;