CREATE TABLE TopPlayers (
    PlayerPlaced INTEGER NOT NULL,
	FirstName varchar(50) NOT NULL,
    LastName varchar(50) NOT NULL,
    SeasonPoints INTEGER,
    PointPerGame INTEGER,
    PRIMARY KEY (PlayerPlaced)
);

INSERT INTO TopPlayers
VALUES 
(1, 'Dhane', 'Smith', 102, 8),
(2, 'Dane', 'Dobbie', 115, 12),
(3, 'Stephan', 'Leblanc', 94, 10),
(4, 'Shawn','Evans', 93, 4),
(5, 'Garrett', 'Billings', 83, 7),
(6, 'Tom', 'Schreiber', 94, 7),
(7, 'Mark','Matthews', 105, 9),
(8, 'Lyle', 'Thompson', 105, 8),
(9, 'Callum', 'CrawFord', 109, 8),
(10, 'Dan', 'Dawson', 88, 8),
(12, 'Cody', 'Jamieson', 87, 9),
(13, 'Kiel', 'Matisz', 82, 3),
(19, 'Mitch', 'Jones', 83, 5),
(28, 'Eli', 'McLaughlin', 76, 8);

CREATE TABLE TopPlayerTeams (
    PlayerPlaced INTEGER ,
    TeamID INTEGER PRIMARY KEY,
	TeamName VARCHAR(30),
    Country VARCHAR(50),
	City VARCHAR(50),
	EastOrWest VARCHAR(4),
	YearFounded VARCHAR(5),
	Coach VARCHAR(70),
    PlacedLastSeason VARCHAR(4),
    WinLoseRecordLastSeason VARCHAR(5),
    PreviouslyBestPlaced VARCHAR(4),
	NumberOfTitles INTEGER,
    FOREIGN KEY (PlayerPlaced) REFERENCES TopPlayers(PlayerPlaced)
);

INSERT INTO TopPlayerTeams
VALUES 
(1,101,'Buffalo Bandits', 'USA', 'Buffalo', 'East', '1991', 'John Tavares', '2nd', '14-4', '1st', 4),
(2,102,'Calgary Roughnecks', 'Canada', 'Calgary', 'West', '2002', 'Curt Malawsky', '1st', '12-6', '1st', 3),
(3,103,'New England Black Wolves', 'USA', 'Connecticut', 'East', '2015', 'Glenn Clark', '5th', '9-9', '4th', 0),
(4,104, 'Buffalo Bandits', 'USA', 'Buffalo', 'East', '1991', 'John Tavares', '2nd', '14-4', '1st', 4),
(5,105, 'San Diego Seals', 'USA', 'San Diego', 'West', '2017', 'Patrick Merrill', '8th', '10-8', '8th', 0),
(6,106,'Toronto Rock', 'Canada', 'Hamilton', 'East', '1998', 'Matt Sawyer', '4th', '12-6', '1st', 6),
(7,107,'Saskatchewan Rush', 'Canada', 'Saskatoon', 'West', '2015', 'Derek Keenan', '7th', '11-7', '1st', 2),
(8,108,'Georgia Swarm','USA', 'Duluth', 'East','2004', 'Ed Comeau', '6th', '12-6', '1st', 1),
(9,109, 'New England Black Wolves', 'USA', 'Connecticut', 'East', '2015', 'Glenn Clark', '5th', '9-9', '4th', 0),
(10,110,'San Diego Seals', 'USA', 'San Diego', 'West', '2017', 'Patrick Merrill', '8th', '10-8', '8th', 0),
(12,111, 'Rochester Knighthawks', 'USA', 'Rochester', 'East', '2019', 'Mike Hasen', '10th', '6-12', '10th', 0),
(13,112, 'Philadelphia Wings', 'USA', 'Philadelphia', 'East', '2019', 'Paul Day', '9th', '4-14', '9th', 0),
(19,113, 'Vancouver Warriors', 'Canada', 'Vancouver', 'West', '2014', 'Chris Gill', '11th', '5-13', '5th', 0),
(28,114, 'Colorado Mammoth', 'USA', 'Denver', 'West', '2003', 'Chris Gill', '3rd', '6-12', '1st', 1);

