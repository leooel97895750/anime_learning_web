
create table class
(
	CID int unsigned AUTO_INCREMENT,
	Type smallint null,
	CName varchar(1000) null,
	CDes varchar(5000) null,
    PlayListID varchar(1000) null,
	JName varchar(1000) null,
	JDes varchar(5000) null,
    Click int null default 0,
	Since datetime default now(),
	LastModifyDT datetime null,
	constraint PK_Class primary key clustered (CID)
);