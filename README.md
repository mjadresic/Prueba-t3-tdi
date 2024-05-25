Supuestos:
- Se elimimnan los duplicados en base al objectID para products y order_id para orders
- Si alguna orden tiene quantity vacio o nulo, se reemplaza por 1 (ya que es mas realista que ponerle 0)
- Para el caluclo de todos los graficos, no se considera si el pedido fue canceled o no (si esta en orders, se considera como compra)