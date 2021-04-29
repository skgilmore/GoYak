SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
 ([Id], [Name], [userName], [Email], [Zip] )
VALUES
 (1, 'Oliver Hardy', 'oliverH', 'olie@email.com', 37203 ');
INSERT INTO [UserProfile]
 ([Id], [Name], [userName], [Email], [Zip] )
VALUES
 (2, 'Foo Barington', ‘fooB’,'foo@email.com', 37204);
SET IDENTITY_INSERT [UserProfile] OFF
SET IDENTITY_INSERT [Post] ON
INSERT INTO [Route]
  ([Id], [name], [difficultyLevel], [length], [recAreaId], [ammenityId])
VALUES
  (1, 'Caney Fork River', 'medium', '27 miles', 1, null),
  (2, 'Percy Priest Lake', 'easy', 'varies', 2, 1),
  (3, 'Indian Boundry Lake', 'easy', 'varies', 3, null),
  (4, 'Ocoee Whitewr', 'hard', 'varies', 4, null),
  (5, 'Old Hickory Lake', 'easy', 'varies', 5, null),
  (6, 'Parksville Lake', 'easy', 'varies', 4, null),
  (7, 'Harpeth River', 'easy', '1-11 miles', 6, 5),

  SET IDENTITY_INSERT [Route] OFF
  INSERT INTO [RecArea]
  ([Id], [name], [description], [keywords], [address], [city], [state], [zip], [url])
VALUES
  (1, 'Long Branch', null, null, '478 Lancaster Rd', 'Lancaster', 'TN', 38569, 'https://cdn.recreation.gov/public/2018/07/22/13/16/4709fceb-df5c-420b-9195-61c265d5a2c5_1600.jpg'),
  (2, 'J Percy Priest Lake', 'The lake provides a variety of outdoor recreational opportunities for millions of visitors each year.  Because of the temperate climate and relatively long recreation season, visitors have numerous activities to choose from, including fishing, hunting, picnicking, boating, canoeing, hiking, horseback riding and wildlife viewing. \n<br/><br/>\nFishing opportunities abound at J. Percy Priest Lake, with a wide variety of species available, including largemouth and smallmouth bass, crappie, striped bass, Cherokee bass, and white bass. Other species such as catfish, bluegill, bream and trout provide excellent opportunities for younger anglers. \n<br/><br/>\nThe Three Hickories Nature Trail is located in nearby Cook Recreation Area and features a 1.6 miles of nature trail through the wooded area.Seven Points Campground offers 59 shady and spacious campsites, along with two large group picnic shelters. The campground features drinking water, a dump station, flush toilets and hot showers, creating a comfortable camping experience. A boat ramp and swimming beach are provided, allowing guests to take advantage of the vast, sparkling lake.The group picnic shelters are located in the Day Use Area and can accommodate more than 100 guests each, making Seven Points an ideal spot for large parties and family functions.Natural Features Percy Priest Dam and Lake was one of the first Corps of Engineers lakes to have recreation as part of its justification. The dam, completed in 1968, impounds 42 miles, with 14,200 surface acres of water.In soothing contrast to the sparkling waters of the lake are the adjacent 19,087 acres of grasslands and woodlands.A highlight of the region, Couchville Cedar Glade Natural Area, is home to wildlife and rare plant species, including the Tennessee coneflower. Percy Priest Lake is conveniently located about 10 miles east of downtown Nashville, offering visitors countless cultural activities in addition to the conveniences of a metro area.', null, '3737 Bell Road', 'Nashville', 'TN', '37076', 'https://cdn.recreation.gov/public/2019/10/07/14/23/232702_a889753d-894c-470b-a632-d7b8f38dbc06_1440.jpg'),
  (3, 'Indian Boundry', 'Indian Boundary Recreation Area is the crown jewel of the South Zone of the Cherokee National Forest on the Tellico Ranger District.This family-oriented campground offers a swim beach and picnic area with grill and an accessible picnicpavilion,as well as a fantastic, 3.2-mile hiking and bikingtrail aroundthe lake.Spectacular mountainviews, glimpses of wildlife,and a  peaceful setting await visitors who come to Indian Boundary.',null, '205 Ranger Station Rd', 'Tellico Plains', 'TN', '37385', 'https://cdn.recreation.gov/public/2018/09/19/20/39/232215_a2f2e76d-0d71-4a6a-9ece-a2356fac3dda_1440.jpg'),
  (4, 'Cherokee National Forest', ' Nestled alongside the Ocoee River, Thunder Rock is a popular destination for both whitewater and trail enthusiasts.' , null, '3171 Hwy 64', 'Benton', 'TN', '37307', 'https://cdn.recreation.gov/public/2020/05/21/04/11/251938_9baebf2e-2492-4730-a426-0367f7387b46_700.jpg'),
  (5, 'Laguardo', 'It offers a playground, boat ramp, and sandy beach to keep both the kids and adults entertained.', null, '7609 HWY 109 NORTH', 'Lebanon', 'TN', '37076', null),
  (7, 'Harpeth River State Park', 'The Harpeth River State Park is a linear park that manages nine river access sites along 40 river miles. Sites include several natural, archaeological and historic areas. The park is popular for kayaking, canoeing, fishing and hiking. Canoe access areas are located at all sites (excluding archeological areas). The Harpeth River is a Class I river. It is appropriate for beginners to advanced paddlers. Visitors can bring their own canoe or kayak. Rentals and trip information are available from local outfitters in and around Kingston Springs.',  null, '1279 Hwy 70', 'Kingston Springs', 'TN', 37082, 'https://live.staticflickr.com/8382/8597851907_31eab0c80b_b.jpg'),

 SET IDENTITY_INSERT [Route] OFF
 SET IDENTITY_INSERT [Ammenity] ON
INSERT INTO [Ammenity]
 ([Id], [Label] )
 VALUES
  (1, 'Camping'),
  (2, 'Restrooms')
  (3, 'Picnic Area'),
  (4, 'Launch Point'),
  (5, 'Rentals'),
  SET IDENTITY_INSERT [Ammenity] OFF
  
  INSERT INTO [Favorite]
 ([Id], [userId], [routeId] )
 VALUES
  (1, 1, 7),
  (2, 1, 3),
  SET IDENTITY_INSERT [Favorite] OFF
  
  INSERT INTO [Review]
 ([Id], [userId], [text], [timeStamp], [routeId] )
 VALUES
  (1, 1, 7),
  (2, 1, 3),
  SET IDENTITY_INSERT [Favorite] OFF
