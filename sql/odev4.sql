/*
 Soru 1:
 Film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
 */
SELECT DISTINCT replacement_cost FROM film; 

/*
 Soru 2:
 Film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
*/
SELECT COUNT( DISTINCT replacement_cost ) FROM film; 

/*
 Soru 3:
 Film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
*/
SELECT COUNT(*) FROM film WHERE title = 'T%' AND rating = 'G';

/*
 Soru 4:
 Country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
*/
SELECT COUNT(*) FROM film WHERE LENGTH(country) = 5;

/*
 Soru 5:
 City tablosundaki şehir isimlerinin kaçtanesi 'R' veya r karakteri ile biter?
*/
SELECT COUNT(*) FROM City WHERE ILIKE city = '%R';
