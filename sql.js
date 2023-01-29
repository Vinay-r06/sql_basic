//sql is standard lang for
  //                          - storing, manipulating and retrieving data in database..
  //                  - accessing and manipulating databases.

// SQL stands for Structured Query Language
// SQL lets you access and manipulate databases..

//SQL is an ANSI/ISO standard..

//RDBMS stands for Relational Database Management System.
//RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.

//The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of columns and rows..

//Every table --> smaller entities called fields.

// the fields in the table ---id,name,contact, address, city, code, country..
// field is "column" in table..to matain specific information abt every record in table..

// a record-- a "row" is each indiviual entry (horizontal entity)..
// a column is a vertical entity..had all info with apecific field..  



// sql syntax


// a database has 1 or more table...
//each table is identified by "name"...
// tables contain records(rows) with data..

// table had 5 records (one for each constomer) and 7 columns(name, address, contact, id, country)


// statements


// to select all the records in the table:

// SELECT * FROM customer(table name)

//sql is not case sensitive:"select" is also "SELECT"..

//semicolon each statement: allow more than one SQL statement to be executed in the same call to the server.

// SELECT -                extracts data from a database
// UPDATE -                updates data in a database
// DELETE -                deletes data from a database
// INSERT INTO -           inserts new data into a database
// CREATE DATABASE -       creates a new database
// ALTER DATABASE -        modifies a database
// CREATE TABLE -          creates a new table
// ALTER TABLE -           modifies a table
// DROP TABLE -            deletes a table
// CREATE INDEX -          creates an index (search key)
// DROP INDEX -            deletes an index

// sudicacadcd...


// the SQL select statement..

// select: select data from a database...
// The data returned is stored in a result table, called the result-set.


// select syntax:

// SELECT (colum 1), (coulmn 2), ....     // here column is particular field name in table...
// FROM (table name) ;

//or

// SELECT (coulmn 1), (colunm 2) FROM (table name);           // in 1 line sql statement..


// to select all the field..

// SELECT * FROM (table name);



// sql select distinct statement...

// SELECT DISTINCT statement is used to return only distinct(different) values..
// in table , coulmn had many duplicates values.. and u only want to list the different (distinct) values.

// syntax..

// SELECT DISTINCT (coulmn 1), (coulnm 2), ......
// FROM (table name);


// or

// SELECT DISTINCT (coulmn name) FROM (table name);


// for lists the number of different(distinct) --syntax....

// SELECT COUNT(DISTINCT (coulmn name) ) FROM (table name);

 

// sql where clause: (can also use in "update", "delete"..etc)

// WHERE --used too filter records(means indiviual person record)
// extract only those records that fullfill a specified condition..


// WHERE --syntax

// SELECT (coulmn 1), (column 2), ....
// FROM (table name)
// WHERE (condition)




// example select mexico country..

// SELECT * FROM (table name)
// WHERE (field or column name)='mexico';




// Text Fields 

// sql requires single quotes (most dtabases also can uses double qoutes) 


// Numeric Fields:

// numeric should not use encolsed in quotes..


// example:

// SELECT * FROM (table name)
// WHERE (field or column name)= 1 (value in table);


// operators in the WHERE clause :

// =,
// >,
// <,
// >=,
// <=,
// <> OR != (Not equal), 
// BETWEEN, (btw in certain range)
// LIKE (search for a pattern),
// IN (to specify multiple posibble values for a colunm). 




// sql AND, OR & NOT operators..


// WHERE clause can join and use with --AND, OR & NOT operators...
// AND & OR ---to filter recors based on more than 1 condition...
  // AND --> displays a record, if "all" the conditions separted by "AND" are TRUE..
  // OR --> displays a record , if "any" the conditions separted by "OR" is TRUE..

// NOT ---> displays a record, if conditions is "NOT TRUE"...



// syntax for AND :


// SELECT (coulmn 1), (column 2), ...
// FROM (table name)
// WHERE (condition 1) AND (condition 2) AND (condition 3) ....;


// or demo for AND below--(basically selecting 2 fields )

// SELECT * FROM (table name)
// WHERE (field or coulnm 1 name)='Germany' AND (field or coulnm 2 name)='Berlin';




// syntax for OR :


// SELECT (coulmn 1), (column 2), ...
// FROM (table name)
// WHERE (condition 1) OR (condition 2) OR (condition 3) ....;


// or demo for OR below--(basically selecting anyone name from 1 field or coulmn )


// SELECT * FROM (table name)
// WHERE (feild or column name)='Berlin' OR (feild or column name)='München';


// example 2

// SELECT * FROM (table name)
// WHERE (feild or column name)='Germany' OR (feild or column name)='Spain';




// syntax for NOT :


// SELECT (coulmn 1), (column 2), ...
// FROM (table name)
// WHERE NOT condition;



// demo for NOT:

// SELECT * FROM (table name)
// WHERE NOT (feild or column name)='Germany';



// combining AND, OR, & NOT:

// SELECT * FROM (table name)
// WHERE Country(field 1)='Germany' AND (City(field 2)='Berlin' OR City(field 2)='München');


// example 2:


// SELECT * FROM Customers
// WHERE NOT Country='Germany' AND NOT Country='USA';





//sql order by keyword...

// ORDER BY--> used to sort the result-set in ascending or descending order order...
// this keyword sorts the records in ascending order by default...
// to store the records in decending order use---> DESC



// ORDER BY syntax...


// SELECT column1, column2, ...
// FROM table_name
// ORDER BY column1, column2, ... ASC|DESC;



// demo for country order:


// SELECT * FROM Customers
// ORDER BY Country;





// demo for country order in descending:


// SELECT * FROM Customers
// ORDER BY Country DESC;



// ORDER BY several Columns:  This means that it orders by Country, but if some rows have the same Country, it orders them by CustomerName:

// means some name in country column had repeated in that time order by name..


// syntax:


// SELECT * FROM (table name)
// ORDER BY Country(field 1), CustomerName(field 2);



// example 2:

// sorted ascending by the "Country" and descending by the "CustomerName" column:


// SELECT * FROM (table name)
// ORDER BY Country ASC, CustomerName DESC;
 



// sql INSERT INTO :


// INSERT INTO --> used to insert new records in table..

// 2 ways can write INSERT INTO..


// 1ST WAY:

// Specify both the column names and the values to be inserted:


// Syntax:

// INSERT INTO (table name) (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);


// 2nd way: to insert all coulms


// to insert all column 


// syntax:


// INSERT INTO (table name)
// VALUES (value1, value2, value3, ...);




// demo

//example 1:
 

// INSERT INTO (table name) (CustomerName, ContactName, Address, City, PostalCode, Country)
// VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');


// insert data only in specifed columns...

// remianing will be null

//syntax

// INSERT INTO (table name) (CustomerName, City, Country)
// VALUES ('Cardinal', 'Stavanger', 'Norway');



//sql null values

// a field with null value is a field with no value...
// in feild is optional, when new record  or update without adding value will be null and saved as NULL value...


// null value is different from a 0 value or field contains spaces..
// a field with NULL value is one that has been left blank during record creation...



// nulll values with comparision operators not posibble...

// had to use --> "IS NULL" & "IS NOT NULL" ...operators instead...


// NULL syntax..

// SELECT column_names
// FROM table_name
// WHERE column_name IS NULL;




// IS NOT NULL syntax..

// SELECT column_names
// FROM table_name
// WHERE column_name IS NOT NULL;


// example:

// IS NULL --> operator ...used to test for empty values (NULL values)


// syntax:


//SELECT CustomerName, ContactName, Address
// FROM Customers
// WHERE Address IS NULL;


// use "IS NULL" to look for NULL values.





// IS NOT NULL-->Operator..


// IS NOT NULL Operator---used to test for non-empty values (NOT NULL values).


// syntax:

// SELECT CustomerName, ContactName, Address
// FROM Customers
// WHERE Address IS NOT NULL;




// sql update:

// "UPDATE" --is used to modify the existing records in a table...

// syntax..

// UPDATE (table name)
// SET column1 = value1, column2 = value2, ...
// WHERE condition;




// example:

// UPDATE (table name)
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;




// customerID will updated for all sql statement....




// UPDATE --multiple records...

// WHERE--determines the how many records will be updated..

// syntax:

// UPDATE Customers
// SET ContactName='Juan'
// WHERE Country='Mexico';                                   // all contactName will change when country is mexico...



// update warning....in update if u omit "WHERE"...all records will uodated...

//example:

//syntax:

// UPDATE (table name)
// SET ContactName='Juan';             //this will update all juan because  no "WHERE"...




// sql delete:

//delete syntax:

// delete from (table name) where (condition);          // if u did not use "where"..all records will be deleted..


// example:

//DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';




//delete all records...

//syntax:

//DELETE FROM (table name);


//example:


//DELETE FROM Customers;






// In -- sql 


//this allows u to specify multiple values in "where" clause....
// this is a shorthand for multiple "OR" conditions...



// syntax


// SELECT column_name(s)
// FROM table_name
// WHERE column_name IN (value1, value2, ...);


//or


// syntax 

// SELECT column_name(s)
// FROM table_name
// WHERE column_name IN (SELECT STATEMENT);


// ex:

// SELECT * FROM Customers
// WHERE Country IN ('Germany', 'France', 'UK');


//ex

// SELECT * FROM Customers
// WHERE Country NOT IN ('Germany', 'France', 'UK');


//ex


// SELECT * FROM Customers
// WHERE Country IN (SELECT Country FROM Suppliers);




// LIKE --sql


//This used in a "WHERE" clause to search for a specified pattern in a column.


// percent sign (%) represents zero, one, or multiple characters..
//underscore sign (_) represents one, single character...



//syntax-----can also combine any number of conditions using AND or OR operators...

//SELECT column1, column2, ...
// FROM table_name
// WHERE columnN LIKE pattern;


//WHERE CustomerName LIKE 'a%'	Finds any values that start with "a"
//                        '%a'	  Finds -- end with "a"
//                        '%or%'	Finds--  "or" in any position
//                         '_r%'	Finds--  "r" in the second position
//                         'a_%'	Finds--  "a" and are at least 2 characters in length
//                         'a__%'	Finds--  "a" and are at least 3 characters in length
//                          'a%o'	Finds--  "a" and ends with "o"...




//exa:

//SELECT * FROM Customers
//WHERE CustomerName LIKE 'a%';


//ex

// SELECT * FROM Customers
// WHERE CustomerName LIKE '%a';


//ex

// SELECT * FROM Customers
// WHERE CustomerName LIKE '%or%';


//ex


// SELECT * FROM Customers
// WHERE CustomerName LIKE '_r%';


//ex


// SELECT * FROM Customers
// WHERE CustomerName LIKE 'a__%';


//ex

// SELECT * FROM Customers
// WHERE ContactName LIKE 'a%o';


//ex


//SELECT * FROM Customers
//WHERE CustomerName NOT LIKE 'a%';














// chapter 2---sql database:



//sql Create db:

//"CREATE DATABASE"-->used to create a new SQL database.




//syntax:

//CREATE DATABASE (databasename);


//ex:

//CREATE DATABASE testDB;        // note: u can check the list of databases in sql commands: "SHOW DATABASES;"




// sql drop db:

// "DROP DATABASE"-->is used to drop an existing SQL database.


//Syntax:

//DROP DATABASE (databasename);


//ex:

//DROP DATABASE testDB;




// sql backup db:


// "BACKUP DATABASE"-->is used in SQL Server to create a full back up of an existing SQL database.



//syntax:


// BACKUP DATABASE databasename
// TO DISK = 'filepath';



//ex: 

// BACKUP DATABASE testDB
// TO DISK = 'D:\backups\testDB.bak';



// BACKUP WITH DIFFERENTIAL :    differential back up reduces the back up time (since only the changes are backed up).


// Syntax:

// BACKUP DATABASE databasename
// TO DISK = 'filepath'
// WITH DIFFERENTIAL;


// ex:


// BACKUP DATABASE testDB
// TO DISK = 'D:\backups\testDB.bak'
// WITH DIFFERENTIAL;





// SQL CREATE TABLE:


// "CREATE TABLE"--> is used to create a new table in a database.


// Syntax:

// CREATE TABLE table_name (             
//   column1 datatype,                                          // column parameters-> name of the columns of the table....  and  datatype parameter--> type of data the column can hold (e.g. varchar, integer, date, etc.). 
//   column2 datatype,   
//   column3 datatype,
//  ....
// );




// ex:

//  CREATE TABLE Persons (
//   PersonID int,
//   LastName varchar(255),
//   FirstName varchar(255),
//   Address varchar(255),
//   City varchar(255)
//   );


// after create table...want to fill so use "insert into" to fill....





// create sql table using another table...


//A copy of an existing table can also be created using "CREATE TABLE".
// new table will be filled with the existing values from the old table...



//syntax:


// CREATE TABLE new_table_name AS
//     SELECT column1, column2,...
//     FROM existing_table_name
//     WHERE ....;



// eg: SQL creates a new table called "TestTables" (which is a copy of the "Customers" table):


// CREATE TABLE TestTable AS
// SELECT customername, contactname
// FROM customers;




// sql drop table:


// "DROP TABLE"--->is used to drop an existing table in a database.



// Syntax:


// DROP TABLE (table name);


// ex:

// DROP TABLE Shippers;





// SQL TRUNCATE TABLE:


// "TRUNCATE TABLE"-->is used to delete the data inside a table, but not the table itself.



// Syntax:

// TRUNCATE TABLE (table name);





// sql alter table:

// "ALTER TABLE"--->is used to add, delete, or modify columns in an existing table.

// also used to add and drop various constraints on an existing table.

// ex:

// ALTER TABLE Persons
// ADD DateOfBirth date;






// ALTER TABLE - ADD Column:

//to add a column:
// syntax:


// ALTER TABLE table_name
// ADD column_name datatype;

// ex:

// ALTER TABLE Customers
// ADD Email varchar(255);



//ALTER TABLE - DROP COLUMN
// To delete a column in a table...


//syntax:

// ALTER TABLE table_name
// DROP COLUMN column_name;


//ex 1:

// ALTER TABLE Customers
// DROP COLUMN Email;


// ex 2

// ALTER TABLE Persons
// DROP COLUMN DateOfBirth;







// ALTER TABLE - RENAME COLUMN..


// To rename a column in a table..

// syntax:

// ALTER TABLE table_name
// RENAME COLUMN old_name to new_name;


// ALTER TABLE - ALTER/MODIFY DATATYPE..

// To change the data type of a column in a table..



// in SQL Server / MS Access:
 
// ALTER TABLE table_name
// ALTER COLUMN column_name datatype;


// My SQL / Oracle..


// ALTER TABLE table_name
// MODIFY COLUMN column_name datatype;


// Oracle 10G and later:


//  ALTER TABLE table_name
//  MODIFY column_name datatype;



// ex: 

// ALTER TABLE Persons
// ALTER COLUMN DateOfBirth year;







// SQL Constraints:


// used to specify rules for data in a table.

// SQL Create Constraints:'

// Constraints can be specified when the table is created with the CREATE TABLE statement,
// or after the table is created with the ALTER TABLE statement.


// Syntax:

// CREATE TABLE table_name (
//   column1 datatype constraint,
//   column2 datatype constraint,
//   column3 datatype constraint,
//   ....
//  );



// SQL Constraints



// to specify rules for the data in a table.
// are used to limit the type of data that can go into a table.(accuracy and reliability)...
// violation between the constraint and the data action, the action is aborted.

// Constraints can be column level or table level.
// Column level constraints apply to a column, and
// table level constraints apply to the whole table.


// following constraints are commonly used in SQL:

// "NOT NULL" - that a column cannot have a NULL value..

// "UNIQUE" - that all values in a column are different...

// "PRIMARY KEY" - A combination of a "NOT NULL" and "UNIQUE". Uniquely identifies each row in a table...

// "FOREIGN KEY" - Prevents actions that would destroy links between tables..

// "CHECK" - that the values in a column satisfies a specific condition...

// "DEFAULT" - Sets a default value for a column if no value is specified..

// "CREATE INDEX " - Used to create and retrieve data from the database very quickly...





// "not null" Constraint--> 

// By default, a column can hold "NULL" values.


// The NOT NULL constraint a column to NOT accept NULL values.
// a field to always contain a value..



// NOT NULL on CREATE TABLE: (will NOT accept NULL values)...


// ex:

// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255) NOT NULL,
//   Age int
// );



// NOT NULL on ALTER TABLE (alter means table already created):

// syntax : (SQL Server / MS Access:)
 
// ALTER TABLE Persons                  // persons is already created table..
// ALTER COLUMN Age int NOT NULL;


// syntax: (My SQL / Oracle (prior version 10G):)


// ALTER TABLE Persons
// MODIFY COLUMN Age int NOT NULL;



// syntax: (Oracle 10G and later:)


//  ALTER TABLE Persons
// MODIFY Age int NOT NULL;




// SQL UNIQUE Constraint:


// The "UNIQUE" constraint that all values in a column are different.
//  Both the "UNIQUE" and "PRIMARY KEY"(combination of "not null" and "unique") constraints will provide unique in column or set coulmn... 
//  "PRIMARY KEY" constraint automatically has a "UNIQUE" constraint.
//   can have "many" "UNIQUE" constraints per table, 
//   but only "one" "PRIMARY KEY" constraint per table.



// SQL UNIQUE Constraint on CREATE TABLE:


// syntax: (SQL Server / Oracle / MS Access:) ---create "unique" in ID colomn.... 

// CREATE TABLE Persons (
//   ID int NOT NULL UNIQUE,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int
// );


// syntax:  (MySQL:)

// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   UNIQUE (ID)                           // here unique in mysql statement....
// );





// To name a "UNIQUE" constraint, and to define a "UNIQUE" constraint on multiple columns...


//syntax: (MySQL / SQL Server / Oracle / MS Access:)


// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   CONSTRAINT UC_Person UNIQUE (ID,LastName)
// );







// SQL UNIQUE Constraint on ALTER TABLE:





// To create a UNIQUE constraint on the "ID" column when the table is already created...

//syntax: (MySQL / SQL Server / Oracle / MS Access:)


// ALTER TABLE Persons
// ADD UNIQUE (ID);


// To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns....

//syntax: (MySQL / SQL Server / Oracle / MS Access:):


// ALTER TABLE Persons
// ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);





// DROP a UNIQUE Constraint:


// To drop a UNIQUE constraint,

// syntax : (mysql)

// ALTER TABLE Persons
// DROP INDEX UC_Person;


// syntax : (SQL Server / Oracle / MS Access:)


// ALTER TABLE Persons
// DROP CONSTRAINT UC_Person;





// SQL "PRIMARY KEY" Constraint


// "PRIMARY KEY"---> uniquely identifies each record in a table.

// Primary keys must contain "UNIQUE" values, and cannot contain "NULL values"...
// table have only "ONE" primary key;  
// in table,primary key can consist of single or multiple columns (fields).



// SQL PRIMARY KEY on CREATE TABLE:


// PRIMARY KEY on the "ID" column:

// syntax: (mysql)

// CREATE TABLE Persons (
//   ID int NOT NULL,                               // in sql server / oracle/ ms acesss---this line will be:--> ID int NOT NULL PRIMARY KEY,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   PRIMARY KEY (ID)
// );





// To  naming a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns,


// syntax(mysql/sql server/ oracle/ ms access)


// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
// );



/// SQL PRIMARY KEY on ALTER TABLE:


//  create a PRIMARY KEY constraint on the "ID" column when the table is already created..

//syntax: (MySQL / SQL Server / Oracle / MS Access:)

// ALTER TABLE Persons
// ADD PRIMARY KEY (ID);



// To allow naming of a PRIMARY KEY constraint, and for defining a PRIMARY KEY constraint on multiple columns...

//syntax:(MySQL / SQL Server / Oracle / MS Access:)


// ALTER TABLE Persons
// ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);


// If you use ALTER TABLE to add a primary key, the primary key column(s) must have been declared to not contain NULL values (when the table was first created).


// DROP a PRIMARY KEY Constraint...

// To drop a PRIMARY KEY constraint,..


// syntax (mysql):

// ALTER TABLE Persons
// DROP PRIMARY KEY;


// syntax: SQL Server / Oracle / MS Access:

// ALTER TABLE Persons
// DROP CONSTRAINT PK_Person;


// SQL FOREIGN KEY Constraint:

// "FOREIGN KEY" -->used to prevent actions that would destroy links between tables..
// FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.
 
// table with the foreign key is called the "child table "
// table with the primary key is called the "referenced or parent table".


// in foreign key column(child table)--> cannot insert invalid data because one of the values contained in the parent table.




// SQL FOREIGN KEY on CREATE TABLE:

// for  SQL creates a FOREIGN KEY on the "PersonID" column when the "Orders" table is created:



// syntax:(mysql)

// CREATE TABLE Orders (
//   OrderID int NOT NULL,
//   OrderNumber int NOT NULL,
//   PersonID int,
//   PRIMARY KEY (OrderID),
//   FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
// );


// allow naming of a "FOREIGN KEY" constraint, and for defining a FOREIGN KEY constraint on multiple columns..


// syntax: (MySQL / SQL Server / Oracle / MS Access:)

// CREATE TABLE Orders (
//   OrderID int NOT NULL,
//   OrderNumber int NOT NULL,
//   PersonID int,
//   PRIMARY KEY (OrderID),
//   CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
//   REFERENCES Persons(PersonID)
// );



//  SQL FOREIGN KEY on ALTER TABLE:

//  create a FOREIGN KEY constraint on the "PersonID" column when the "Orders" table is already created..



// syntax: (MySQL / SQL Server / Oracle / MS Access:)

// ALTER TABLE Orders
// ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);


// To allow naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns,..


// syntax:(MySQL / SQL Server / Oracle / MS Access:)


// ALTER TABLE Orders
// ADD CONSTRAINT FK_PersonOrder
// FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);


// DROP a FOREIGN KEY Constraint..

// To drop a FOREIGN KEY constraint..


// syntax: (MySQL)

// ALTER TABLE Orders
// DROP FOREIGN KEY FK_PersonOrder;



// SQL CHECK Constraint:

// "CHECK" --> used to limit the value range that can be placed in a column...

// SQL CHECK on CREATE TABLE:

// checking only age column:


// syntax( mysql):


// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   CHECK (Age>=18)
// );



// naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns..

// syntax : MySQL / SQL Server / Oracle / MS Access....


// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   City varchar(255),
//   CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
// );



// SQL CHECK on ALTER TABLE:


// To create a CHECK constraint on the "Age" column when the table is already created, :


// syntax:  (MySQL / SQL Server / Oracle / MS Access:)

// ALTER TABLE Persons
// ADD CHECK (Age>=18);



//  naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns..

// syntax: MySQL / SQL Server / Oracle / MS Access:


// ALTER TABLE Persons
// ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');



// DROP a CHECK Constraint:


// To drop a CHECK constraint:


// syntax: (SQL Server / Oracle / MS Access:)


// ALTER TABLE Persons
// DROP CONSTRAINT CHK_PersonAge;

// sql syntax:

// ALTER TABLE Persons
// DROP CHECK CHK_PersonAge;


// SQL DEFAULT Constraint:

// "DEFAULT" : used to set a default value for a column..

// default value will be added to all new records, if no other value is specified...


// SQL DEFAULT on CREATE TABLE:

// DEFAULT for city..


// syntax:  My SQL / SQL Server / Oracle / MS Access:


// CREATE TABLE Persons (
//   ID int NOT NULL,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   City varchar(255) DEFAULT 'Sandnes'
// );



// DEFAULT :  insert system values, by using functions like GETDATE()..

// syntax:

// CREATE TABLE Orders (
//   ID int NOT NULL,
//   OrderNumber int NOT NULL,
//   OrderDate date DEFAULT GETDATE()
// );


// SQL DEFAULT on ALTER TABLE..

// create a DEFAULT constraint on the "City" column when the table is already created..

// MySQL:

// ALTER TABLE Persons
// ALTER City SET DEFAULT 'Sandnes';


// DROP a DEFAULT Constraint

//  To drop a DEFAULT constraint,..

// syntax: MySQL

// ALTER TABLE Persons
// ALTER City DROP DEFAULT;



//  SQL CREATE INDEX Statement..

// CREATE INDEX statement is used to create indexes in tables...
// Indexes are used to retrieve data from the database more quickly than otherwise. 
// The users cannot see the indexes, they are just used to speed up searches/queries.
// Updating a table with indexes takes more time than updating a table without (because the indexes also need an update).
//  So, only create indexes on columns that will be frequently searched against.



// CREATE INDEX Syntax:

//  Creates an index on a table. Duplicate values are allowed:

// syntax:

// CREATE INDEX index_name
// ON table_name (column1, column2, ...);


// CREATE UNIQUE INDEX Syntax: 

//Creates a unique index on a table. Duplicate values are not allowed:..


// CREATE UNIQUE INDEX index_name
// ON table_name (column1, column2, ...);





// CREATE INDEX Example:

// CREATE INDEX idx_lastname
// ON Persons (LastName);



// create an index on a combination of columns,..

// CREATE INDEX idx_pname
// ON Persons (LastName, FirstName);


// DROP INDEX Statement:

// DROP INDEX statement is used to delete an index in a table...

// syntax: sql:


// ALTER TABLE table_name
// DROP INDEX index_name;



// SQL AUTO INCREMENT Field:


//   Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.

// Often this is the primary key field ..


// Syntax for MySQL:

// "Personid" column to be an auto-increment primary key field in the "Persons" table:..

// CREATE TABLE Persons (
//   Personid int NOT NULL AUTO_INCREMENT,
//   LastName varchar(255) NOT NULL,
//   FirstName varchar(255),
//   Age int,
//   PRIMARY KEY (Personid)
// );


//  default---AUTO_INCREMENT is 1,..increment by 1 for each new record...

//  syntax: 

// ALTER TABLE Persons AUTO_INCREMENT=100;




// To insert a new record into the "Persons" table, we will NOT have to specify a value for the "Personid" column (a unique value will be added automatically):..

// syntax: personid will will assigned automatically...unique value..


// INSERT INTO Persons (FirstName,LastName)
// VALUES ('Lars','Monsen');



// SQL Dates:

//  SQL Date Data Types..

// data types for storing a date or a date/time value in the database:


// DATE - format YYYY-MM-DD
// DATETIME - format: YYYY-MM-DD HH:MI:SS
// TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
// YEAR - format YYYY or YY


// if u  search with date in table...it will give result if the table had date...if that table had date with time then it will not give result because it has time soo..






// course-- sql




// sql-- goal--> store data and make it easily accessible..
// use a database because quicker access than file
// sql databases--mysql
// nosql database--mongodb...


// in sql:

// it has table
// each table had field or column...
// we fill data for these fields.. so called records...
// records means rows in thable..
// this sql will allow connection to other table..


// core sql database characteristics...

// 1.) data schema--> which filed and type of datatype...id, name, age...
//     so all the data in the table has to fit the scema for this table..

// schema : means how the data has to look like...

// 2) data relations: 3 types...
                  // one to one
                  // one to many
                  // many to many
// means can had 2 tables where each record fits one other record.
// tables are connected..

// sql -- structured query language...

//sql queries had----> sql keywords/syntax
                //     parameters/data..
                
                


//           nosql


// in nosql we had database and tables are "collection" here..
// in collection we dont find records, but called documents
// "documents" look like-- {name:'max', age:29}
                       //  {name:'max'} 

  // diagram

// database--shop 
// collections---users , orders
// under users, documents-- we had documents like--- {name:'max', age:29}
                                                //   {name:'max'}                       
                       

// we working javascript so documents look like --- "javascript objects"

// can store multiple documents with different structures in the same collection..(see above one had name and age...other one had name only..)

// in nosql we dont had "real relations.."
// we had "duplicate data"..

// example: we had "order" collection(table)
// in that we had documents,in that documents we had "nested document"...
// the "user"(collection) is also stored as a separate document with more details.. maybe in users collection..
// we dont connect through "id"....instead we do "duplicate data" in "documents" in orders collection the dat we need...

// if that data changes we want "update" in multiple places...all need to latest update or data change...

// other advantage--> if we retrieve data, dont want join multiple table together..which impact performance..difficult to code..

// instead we cand read the dta from orders collection. without reach other collections...

// this one super fast way.. huge advantage in nosql...

// can be fast and efficient..

// nosql had no strong data schema..
// mixed data in same collections..no structure is required..
// no data relations...
// u can relate documents but u dont have to...(should not too much...u r quires become slow..)
// this is the sql and nosql--> regarding scalability...

// data will grow so to access it will be very fast...

// we need to scale our database servers..// we can differentiate btw "horizantal and vertical scaling"..




// horizontal and vertical scaling..(often need to scale our database to keep growing application with more and more users)


//  horizontal and vertical scaling--> are 2 approches use to scale our database..


// in horizontal scaling:

// simply add more servers.
// advantage is we can do this infinitely..

// we can always buy new servers, (be on a cloud provider, or in our own data center and connect them to our database and split our data across all these servers) and spliting and merging takes very difficult to do.. but this good way scalable...


// vertical scaling:

// we make our exiting server stronger by adding more "cpu" or "memory" or something like that espescial with cloud providers...
// this very easy.. u can choose another option in dropdown...u can pay more..
// the problem is have limit u cant infintely much cpu power into single machine...



//compare that and in general


// in sql we use "schemas" and also "relations"
// are 2 core charateristics and "data" is distrubuted across many tables..which are then connected through relations...

// in scaling-->horizontal scaling--important here often very difficult or impossible due to the  sql works..
// u can add more servers but running them all on one shared data cloud, one shared database is pretty difficult...


// vertical scaling : is easily possible.. u can simply make u r server stronger...but adding more server very hard and impossible...


// if u had multiple or thousands of read and write queries per second...then sql database, if we do complex joins btw related tables can reach limits..or cant be the best choice...



// nosql is schemaless and has only a few relations if at all...
// the data is not distrubuted across multiple collections but instead we work with merged or nested documents in an existing documents,...

//horizontal scaling is easier...



// conclusion for both:

// sql                                                

// data uses Schemas..
// relations..
// data is distributed across multiple tables..
// horizontal scaling is difficult/ impossible
// vertical scaling is possible..
// limitations for lots of (thousands) read and write queries per second...





//    nosql

// schema less...
// no (or very few) relations
// data is typically merged / nested in a few collections...
// both horizontal and vertical scaling is possible..
// great performance for mass read and write requests..



// after install mysql..

// to run sql inside node application...we should download package..
// to do that in vs code compiler type--- "npm install --save mysql2"            //--save-->because it is production dependance, one cruical part for our application..

// now allow to write sql code and execute sql code in node and interact with a database..

// we need connect to our database from inside our application...

// in project file... go to "util" file path..there create "database.js"..
// write sql to connect to database..
// now want step up the code that will allow us to connect to the "sql database" and then give us back a "connection object"..which allows us to "run queries"...