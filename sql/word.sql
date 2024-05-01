use anime_learning_db;

create table word
(
	WID int unsigned not null,
	JWord varchar(1000) null,
    CDes varchar(10000) null,
	constraint FK_Member_WID foreign key(WID) references object(OID),
	constraint PK_Member primary key clustered (WID)
);