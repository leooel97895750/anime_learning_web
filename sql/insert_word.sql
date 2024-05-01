use anime_learning_db;

insert into class(`Type`, CName) values(3, 'N1');
set @n1_id := LAST_INSERT_ID();
insert into class(`Type`, CName) values(3, 'N2');
set @n2_id := LAST_INSERT_ID();
insert into class(`Type`, CName) values(3, 'N3');
set @n3_id := LAST_INSERT_ID();
insert into class(`Type`, CName) values(3, 'N4');
set @n4_id := LAST_INSERT_ID();
insert into class(`Type`, CName) values(3, 'N5');
set @n5_id := LAST_INSERT_ID();

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n1_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '経緯', '經緯，原委，事情的經過');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n1_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '資金', '資金');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n1_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '無茶', '毫無道理，離譜，亂來');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n2_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '浮気', '花心，感情不專一，拈花惹草');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n2_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '心遣い', '關心，關照');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n2_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '思い切り', '決意，斷念;盡情地，徹底地');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n3_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '味つけ', '調味');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n3_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '甘やかす', '縱容，驕縱，溺愛');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n3_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '改めて', '重新，再次');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n4_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, 'やっと', '終於，好不容易才~');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n4_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, 'ねだん', '價格');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n4_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '酒', '酒');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n4_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '強い', '強，強壯;強烈');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n5_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '少し', '一點兒，稍微，稍許');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n5_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '大変', '嚴重，不得了;辛苦，費勁');

insert into object() values();
set @OID := LAST_INSERT_ID();
insert into co(CID, OID) values(@n5_id, @OID);
insert into word(WID, JWord, CDes) values(@OID, '新しい', '新的');