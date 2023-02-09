SELECT * FROM payment_tests.user;
describe payment_tests.user;
INSERT INTO payment_tests.user VALUES(4,'Luis','Merchant',null);

UPDATE payment_tests.user
SET store_id = 1
WHERE role = 'Merchant';

SELECT * FROM payment_tests.store;
describe payment_tests.store;
INSERT INTO payment_tests.store VALUES(2,'Amazon');

SELECT * FROM payment_tests.order;
describe payment_tests.order;
INSERT INTO payment_tests.order VALUES(3,520.90,2,1);

SELECT  payment_tests.order.id, user.username, user.role, store.name as storename, payment_tests.order.amount
FROM ((payment_tests.order
inner JOIN store ON payment_tests.order.stordeid = store.id)
inner join user ON payment_tests.order.userid = user.id)
;

SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
