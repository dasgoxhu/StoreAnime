export class UsuarioModel{
    correo: string;
    contrasena?: string;
    rol: number;
    logged: boolean = false;
    carritoid?: string;
}