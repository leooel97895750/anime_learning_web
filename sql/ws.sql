use anime_learning_db;

create table ws
(
	WID int unsigned not null,
	SID int unsigned not null,
	constraint FK_WS_WID foreign key(WID) references word(WID),
	constraint FK_WS_SID foreign key(SID) references sentence(SID),
	constraint PK_WS primary key clustered (WID, SID)
)
