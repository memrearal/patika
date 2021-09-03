/*
 Öncelikle employee tablosunu oluşturuyoruz.
*/
create table employee (
	id INT,
	name VARCHAR(50),
	email VARCHAR(50),
	birthday DATE
);

/*
 Tabloya mock dataları ekliyoruz
*/
insert into employee (id, name, email, birthday) values (1, 'Kelley Sporner', 'ksporner0@bbb.org', '14/11/2014');
insert into employee (id, name, email, birthday) values (2, 'Letitia Crean', 'lcrean1@usda.gov', '01/10/2001');
insert into employee (id, name, email, birthday) values (3, 'Garry Witcher', 'gwitcher2@sbwire.com', '26/08/2014');
insert into employee (id, name, email, birthday) values (4, 'Loleta Christofor', 'lchristofor3@hibu.com', '04/11/2008');
insert into employee (id, name, email, birthday) values (5, 'Friedrich MacGibbon', 'fmacgibbon4@marriott.com', '06/12/2014');
insert into employee (id, name, email, birthday) values (6, 'Jerrylee Gwilliams', 'jgwilliams5@timesonline.co.uk', '25/09/2000');
insert into employee (id, name, email, birthday) values (7, 'Matty Dray', 'mdray6@blogtalkradio.com', '13/05/2008');
insert into employee (id, name, email, birthday) values (8, 'Waly Matherson', 'wmatherson7@tiny.cc', '06/10/2005');
insert into employee (id, name, email, birthday) values (9, 'Ham Goudie', 'hgoudie8@freewebs.com', '22/08/2006');
insert into employee (id, name, email, birthday) values (10, 'Paulita Mathevon', 'pmathevon9@studiopress.com', '26/06/2012');
insert into employee (id, name, email, birthday) values (11, 'Ravid Berk', 'rberka@lulu.com', '28/01/2012');
insert into employee (id, name, email, birthday) values (12, 'Hollis Scrivener', 'hscrivenerb@cbsnews.com', '28/01/2014');
insert into employee (id, name, email, birthday) values (13, 'Susie Fronzek', 'sfronzekc@amazon.com', '23/01/2008');
insert into employee (id, name, email, birthday) values (14, 'Marice Harrower', 'mharrowerd@mit.edu', '27/07/2003');
insert into employee (id, name, email, birthday) values (15, 'Querida Popelay', 'qpopelaye@amazon.co.uk', '12/07/2012');
insert into employee (id, name, email, birthday) values (16, 'Rickard Fairham', 'rfairhamf@about.me', '27/05/2003');
insert into employee (id, name, email, birthday) values (17, 'Marga Allon', 'mallong@wikia.com', '15/11/2009');
insert into employee (id, name, email, birthday) values (18, 'Nicki Betteriss', 'nbetterissh@phoca.cz', '08/05/2007');
insert into employee (id, name, email, birthday) values (19, 'Tabby MacBain', 'tmacbaini@yolasite.com', '20/08/2012');
insert into employee (id, name, email, birthday) values (20, 'Clem Blair', 'cblairj@mozilla.com', '23/02/2002');
insert into employee (id, name, email, birthday) values (21, 'Miner How to preserve', 'mhowk@mac.com', '23/06/2000');
insert into employee (id, name, email, birthday) values (22, 'Tiphanie Cainey', 'tcaineyl@tumblr.com', '04/03/2012');
insert into employee (id, name, email, birthday) values (23, 'Park Klimke', 'pklimkem@java.com', '21/10/2007');
insert into employee (id, name, email, birthday) values (24, 'Marsha Meekings', 'mmeekingsn@netscape.com', '03/12/2012');
insert into employee (id, name, email, birthday) values (25, 'Wiley Gowland', 'wgowlando@spiegel.de', '23/04/2007');
insert into employee (id, name, email, birthday) values (26, 'Lyda Lanktree', 'llanktreep@bigcartel.com', '05/06/2006');
insert into employee (id, name, email, birthday) values (27, 'Bertina Boxill', 'bboxillq@simplemachines.org', '07/09/2014');
insert into employee (id, name, email, birthday) values (28, 'Decca Severn', 'dsevernr@pcworld.com', '19/04/2000');
insert into employee (id, name, email, birthday) values (29, 'Shelba McHugh', 'smchughs@jalbum.net', '20/03/2013');
insert into employee (id, name, email, birthday) values (30, 'Lizette Corbally', 'lcorballyt@ehow.com', '13/02/2008');
insert into employee (id, name, email, birthday) values (31, 'Tomkin Moulster', 'tmoulsteru@ibm.com', '29/11/2000');
insert into employee (id, name, email, birthday) values (32, 'Eirena Molines', 'emolinesv@drupal.org', '11/06/2005');
insert into employee (id, name, email, birthday) values (33, 'Hubey Crosston', 'hcrosstonw@vimeo.com', '27/01/2004');
insert into employee (id, name, email, birthday) values (34, 'Sigismond Bleyman', 'sbleymanx@geocities.jp', '09/10/2008');
insert into employee (id, name, email, birthday) values (35, 'Cass Gilbart', 'cgilbarty@ifeng.com', '28/04/2007');
insert into employee (id, name, email, birthday) values (36, 'Tybi Salandino', 'tsalandinoz@wiley.com', '02/07/2004');
insert into employee (id, name, email, birthday) values (37, 'Annis Bish', 'abish10@pcworld.com', '18/03/2010');
insert into employee (id, name, email, birthday) values (38, 'Fiorenze Gallaway', 'fgallaway11@miitbeian.gov.cn', '02/10/2013');
insert into employee (id, name, email, birthday) values (39, 'Wyndham Cawood', 'wcawood12@1und1.de', '19/05/2009');
insert into employee (id, name, email, birthday) values (40, 'Coreen Claybourne', 'cclaybourne13@time.com', '30/07/2012');
insert into employee (id, name, email, birthday) values (41, 'Roxy Tuxell', 'rtuxell14@paginegialle.it', '18/08/2000');
insert into employee (id, name, email, birthday) values (42, 'Lew Kynder', 'lkynder15@ed.gov', '18/07/2005');
insert into employee (id, name, email, birthday) values (43, 'Calypso Hamberstone', 'chamberstone16@dion.ne.jp', '07/10/2011');
insert into employee (id, name, email, birthday) values (44, 'Barnard Eliff', 'beliff17@flickr.com', '21/06/2003');
insert into employee (id, name, email, birthday) values (45, 'Nikos Schiesterl', 'nschiesterl18@seesaa.net', '27/09/2009');
insert into employee (id, name, email, birthday) values (46, 'Ellsworth Osbidston', 'eosbidston19@amazon.co.jp', '24/02/2000');
insert into employee (id, name, email, birthday) values (47, 'Clarence Boas', 'cboas1a@ucoz.com', '27/11/2005');
insert into employee (id, name, email, birthday) values (48, 'Angelique Louden', 'alouden1b@theatlantic.com', '14/03/2007');
insert into employee (id, name, email, birthday) values (49, 'Evonne Bloodworthe', 'ebloodworthe1c@meetup.com', '26/06/2009');
insert into employee (id, name, email, birthday) values (50, 'Egan Jedras', 'ejedras1d@last.fm', '30/06/2012');

/*
 Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
*/
UPDATE employee SET name = 'Emre' WHERE id = 1;
UPDATE employee SET email = 'test@gmail.com' WHERE name = 'Emre';
UPDATE employee SET birthday = '01/01/2000' WHERE email = 'test@gmail.com';
UPDATE employee SET name = 'Emre A' WHERE birthday = '01/01/2000;
UPDATE employee SET email = 'emre@emre.me' WHERE name = 'Emre A';

/*
 Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
*/
DELETE FROM Employee WHERE name = 'Emre';
DELETE FROM Employee WHERE email = 'emre@emre.me';
DELETE FROM Employee WHERE birthday = '01/01/2000';
DELETE FROM Employee WHERE name = 'Emre A';
DELETE FROM Employee WHERE id = '1';
