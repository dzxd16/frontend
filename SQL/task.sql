SELECT Suppliers.SupplierID, AVG(Price) as sprice  FROM Products
join Suppliers on Suppliers.SupplierID = Products.SupplierID
group by Suppliers.SupplierID
HAVING sprice > 40
order by sprice