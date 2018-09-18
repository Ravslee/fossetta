
export class Product {
    id:string;
    productCode:string;
    name: string;
    price: string;
    description: string;
    images:Array<String>;
    primaryImage:string;
    date: any;

    constructor(){
        this.images = new Array();
    }
}