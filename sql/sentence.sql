create table sentence
(
	SID int unsigned not null,
	JText varchar(10000) null,
    `Start` float not null,
    `Duration` float not null,
	constraint FK_Member_SID foreign key(SID) references object(OID),
	constraint PK_Member primary key clustered (SID)
);
