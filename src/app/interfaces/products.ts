import { FileHandle } from "../interfaces/File-handle.model";

export interface Products {
    id? : number,
    price : number,
    cartAdded : boolean,
    model : string,
    info : string,
    smallInfo : string,
    productImages : FileHandle
}

	