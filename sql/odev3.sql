/*
 Soru 1:
 Country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
*/
SELECT country From Country WHERE country like 'A%a';

/*
 Soru 2:
 Country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
*/
SELECT country From Country WHERE LENGTH(country) > 6 AND country like '%n';

/*
 Soru 3:
 Film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren
*/
SELECT title FROM film WHERE title ILIKE '%t%t%t%t%';

/*
 Soru 4:
 Film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.
*/
SELECT * From film Where title LIKE 'C%' AND length > 90 AND rental_rate = 2.99 ; 
