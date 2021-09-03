/*
 Soru 1:
 City tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
*/
SELECT city,country FROM city ci JOIN country co ON (co.country_id = ci.country_id );

/*
 Soru 2:
 Customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
*/
SELECT first_name,last_name,payment_id FROM customer c JOIN payment p ON ( p.customer_id = c.customer_id);

/*
 Soru 3:
 Customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
*/
SELECT first_name,last_name,rental_id FROM customer c JOIN rental r ON( c.customer_id = r.customer_id );
