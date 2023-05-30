import { ProductoModel } from './producto.model';

export class ImagenModels{
    id?: string;
    archivo: string;
    orden: number;
    productoid: string;
    producto: ProductoModel;
}