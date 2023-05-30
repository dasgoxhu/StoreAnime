import { CategoriaModel } from './categoria.model';
import { ImagenModels } from './imagenes.models';

export class ProductoModel{
    id?: string;
    nombre: string;
    precio: number;
    categoriaid: string;
    categoria: CategoriaModel;
    imagenes: ImagenModels[];
}