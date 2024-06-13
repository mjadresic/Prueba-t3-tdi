Supuestos:
- Al hacer comparacion entre Product_id y objectID para obtener el nombre del producto, para aquellos casos que no calce se deja el Product_id como nombre.
- Algunos graficos tienen muchos datos asi que decidi hacerle slice (ej top 40) para que se visualicen mejor, o en el eje X mostrar solo un par de nombres de producto.
- Se eliminan los duplicados en base al objectID para products y order_id para orders
- Si alguna orden tiene quantity vacio o nulo, se reemplaza por 1 (ya que es mas realista que ponerle 0)
- Para el calculo de todos los graficos, no se considera si el pedido fue canceled o no (si esta en orders, se considera como compra)