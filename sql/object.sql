create table object
(
	OID int unsigned AUTO_INCREMENT,
	Type smallint null,
	Since datetime default now(),
	constraint PK_Object primary key clustered (OID)
)