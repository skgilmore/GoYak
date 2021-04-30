  SET IDENTITY_INSERT [Ammenity] ON
INSERT INTO [Ammenity]
 ([id], [label] )
 VALUES
  (1, 'Camping'),
  (2, 'Restrooms'),
  (3, 'Picnic Area'),
  (4, 'Launch Point'),
  (5, 'Rentals' )

  SET IDENTITY_INSERT [Ammenity] OFF
 SET IDENTITY_INSERT [RecArea] ON
 INSERT INTO [RecArea]
  ([id], [name], [description], [keywords], [address], [city], [state], [zip], [url])
VALUES
  (1, 'Long Branch', null, null, '478 Lancaster Rd', 'Lancaster', 'TN', 38569, 'https://cdn.recreation.gov/public/2018/07/22/13/16/4709fceb-df5c-420b-9195-61c265d5a2c5_1600.jpg'),
  (2, 'J Percy Priest Lake', 'The lake provides a variety of outdoor recreational opportunities for millions of visitors each year.  ', null, '3737 Bell Road', 'Nashville', 'TN', '37076', 'https://cdn.recreation.gov/public/2019/10/07/14/23/232702_a889753d-894c-470b-a632-d7b8f38dbc06_1440.jpg'),
  (3, 'Indian Boundry', null,null, '205 Ranger Station Rd', 'Tellico Plains', 'TN', '37385', 'https://cdn.recreation.gov/public/2018/09/19/20/39/232215_a2f2e76d-0d71-4a6a-9ece-a2356fac3dda_1440.jpg'),
  (4, 'Cherokee National Forest', ' Nestled alongside the Ocoee River, Thunder Rock is a popular destination for both whitewater and trail enthusiasts.' , null, '3171 Hwy 64', 'Benton', 'TN', '37307', 'https://cdn.recreation.gov/public/2020/05/21/04/11/251938_9baebf2e-2492-4730-a426-0367f7387b46_700.jpg'),
  (5, 'Laguardo', 'It offers a playground, boat ramp, and sandy beach to keep both the kids and adults entertained.', null, '7609 HWY 109 NORTH', 'Lebanon', 'TN', '37076', null),
  (6, 'Harpeth River State Park', null,  null, '1279 Hwy 70', 'Kingston Springs', 'TN', 37082, 'https://live.staticflickr.com/8382/8597851907_31eab0c80b_b.jpg')
SET IDENTITY_INSERT [RecArea] OFF

SET IDENTITY_INSERT [User] ON
INSERT INTO [User]
 ([id], [name], [userName], [email], [zip] )
VALUES
 (4, 'Oliver Hardy', 'oliverH', 'olie@email.com', 37203 );

INSERT INTO [User]
 ([id], [Name], [userName], [Email], [Zip] )
VALUES
 (5, 'Foo Barington', 'fooB', 'foo@email.com', 37204);
 SET IDENTITY_INSERT [User] OFF


 SET IDENTITY_INSERT [Route] ON
INSERT INTO [Route]
  ([id], [name], [difficultyLevel], [length], [recAreaId], [ammenityId])
VALUES
  (1, 'Caney Fork River', 'medium', '27 miles', 1, null),
  (2, 'Percy Priest Lake', 'easy', 'varies', 2, null),
  (3, 'Indian Boundry Lake', 'easy', 'varies', 3, null),
  (4, 'Ocoee Whitewr', 'hard', 'varies', 4, null),
  (5, 'Old Hickory Lake', 'easy', 'varies', 5, null),
  (6, 'Parksville Lake', 'easy', 'varies', 4, null),
  (7, 'Harpeth River', 'easy', '1-11 miles', 6, 5)
 SET IDENTITY_INSERT [Route] OFF
  
  SET IDENTITY_INSERT [Favorite] ON
  INSERT INTO [Favorite]
 ([id], [userId], [routeId] )
 VALUES
  (1, 1, 7),
  (2, 1, 3)

  SET IDENTITY_INSERT [Favorite] OFF

  SET IDENTITY_INSERT [Review]  ON

  INSERT INTO [Review]
 ([id], [userId], [text], [timeStamp], [routeId] )
 VALUES
  (1, 4, 'This one is a blast', '06-01-2020', 6),
  (2, 4, 'One of my favorites!', '02-03-2019', 3)
  SET IDENTITY_INSERT [Review] OFF
