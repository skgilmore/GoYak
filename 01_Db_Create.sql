USE [master]
GO
IF db_id('GoYak') IS NULL
  CREATE DATABASE [GoYak]
GO
USE [GoYak]
GO

DROP TABLE IF EXISTS [Review];
DROP TABLE IF EXISTS [Favorite];
DROP TABLE IF EXISTS [Route];
DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS [RecArea];
DROP TABLE IF EXISTS [Ammenity];



GO
CREATE TABLE [Ammenity] (
  [id] int PRIMARY KEY identity NOT NULL,
  [label] nvarchar(255)
)
GO
CREATE TABLE [RecArea] (
  [id] int PRIMARY KEY identity NOT NULL,
  [name] nvarchar(255) NOT NULL,
  [description] nvarchar(255),
  [keywords] nvarchar(255),
  [address] nvarchar(255),
  [city] nvarchar(255) NOT NULL,
  [state] nvarchar (25),
  [zip] int NOT NULL,
  [url] nvarchar(255)
)
GO
CREATE TABLE [User] (
  [id] int PRIMARY KEY identity NOT NULL,
  [name] nvarchar(255) NOT NULL,
  [email] nvarchar(255) NOT NULL,
  [userName] nvarchar(255) NOT NULL,
  [zip] int NOT NULL,
)
GO
CREATE TABLE [Route] (
  [id] int PRIMARY KEY identity NOT NULL,
  [name] nvarchar(255) NOT NULL,
  [difficultyLevel] nvarchar(255),
  [length] nvarchar(255),
  [recAreaId] int,
  [ammenityId] int
)
GO

CREATE TABLE [Favorite] (
  [id] int identity NOT NULL,
  [userId] int,
  [routeId] int
)
GO
CREATE TABLE [Review] (
  [id] int PRIMARY KEY identity NOT NULL,
  [userId] int NOT NULL,
  [text] nvarchar(255) NOT NULL,
  [timeStamp] nvarchar(255) NOT NULL,
  [routeId] int NOT NULL
)
GO
ALTER TABLE [Review] ADD FOREIGN KEY ([routeId]) REFERENCES [Route] ([id])

GO
ALTER TABLE [Review] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([id])

GO
ALTER TABLE [Route] ADD FOREIGN KEY ([recAreaId]) REFERENCES [RecArea] ([id])

GO
ALTER TABLE [Route] ADD FOREIGN KEY ([ammenityId]) REFERENCES [Ammenity] ([id])


