export class Producto {
    product_id: number = 0;
    product_name: string = "";
    supplier_id: number = 0;
    category_id: number = 0;
    quantity_per_unit: string = "";
    unit_price: number = 0;
    units_in_stock: number = 0;
    units_on_order: number = 0;
    reorder_level: number = 0;
    discount: number = 0;

  

    constructor(
        product_id: number,
        product_name: string,
        supplier_id: number,
        category_id: number,
        quantity_per_unit: string,
        unit_price: number,
        units_in_stock: number,
        units_on_order: number,
        reorder_level: number,
        discount: number
      ) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.supplier_id = supplier_id;
        this.category_id = category_id;
        this.quantity_per_unit = quantity_per_unit;
        this.unit_price = unit_price;
        this.units_in_stock = units_in_stock;
        this.units_on_order = units_on_order;
        this.reorder_level = reorder_level;
        this.discount = discount;
      }




}