use anime_learning_db;
select w.* from class c, co, word w where c.CName = 'N3' and c.CID=co.CID and co.OID=w.WID;
