CREATE TABLE [User] (
  [id] int PRIMARY KEY,
  [name] nvarchar(255) NOT NULL,
  [email] nvarchar(255) NOT NULL,
  [userName] nvarchar(255) NOT NULL,
  [zip] int NOT NULL,
  [fireBaseUserId] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [Route] (
  [id] int PRIMARY KEY,
  [name] nvarchar(255) NOT NULL,
  [difficultyLevel] nvarchar(255),
  [length] nvarchar(255),
  [recAreaId] int,
  [ammenityId] int
)
GO

CREATE TABLE [Ammenity] (
  [id] int PRIMARY KEY,
  [label] nvarchar(255)
)
GO

CREATE TABLE [Favorite] (
  [id] int,
  [userId] int,
  [routeId] int
)
GO

CREATE TABLE [RecArea] (
  [id] int PRIMARY KEY,
  [name] nvarchar(255) NOT NULL,
  [description] nvarchar(255),
  [keywords] nvarchar(255),
  [address] nvarchar(255),
  [city] nvarchar(255) NOT NULL,
  [zip] int NOT NULL,
  [url] nvarchar(255)
)
GO

CREATE TABLE [Review] (
  [id] int PRIMARY KEY,
  [userId] int NOT NULL,
  [text] nvarchar(255) NOT NULL,
  [timeStamp] nvarchar(255) NOT NULL,
  [routeId] int NOT NULL
)
GO

ALTER TABLE [Route] ADD FOREIGN KEY ([recAreaId]) REFERENCES [RecArea] ([id])
GO

ALTER TABLE [Review] ADD FOREIGN KEY ([userId]) REFERENCES [User] ([id])
GO

ALTER TABLE [Ammenity] ADD FOREIGN KEY ([id]) REFERENCES [Route] ([ammenityId])
GO

ALTER TABLE [Review] ADD FOREIGN KEY ([routeId]) REFERENCES [Route] ([id])
GO
