import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { Observable } from 'rxjs';


@Injectable()
export class ImageIntercepter implements NestInterceptor {
    fileIntercepter: NestInterceptor;
    fieldName: string;
    constructor(fieldName: string) {
        this.fieldName = fieldName;
    }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> | Promise<Observable<any>> {
        const folderName = context.switchToHttp().getRequest().query.folder;
        const destination = `./uploads/${folderName}`;
        const filename = (req, file, callback) => {
            const name = file.originalname;
            const newName = `${folderName}_${name}`;
            callback(null, newName)
        }
        const multerOptions: MulterOptions = {
            storage: diskStorage({
                destination,
                filename: filename
            })
        }
        this.fileIntercepter = new (FilesInterceptor(this.fieldName,100,multerOptions));
        return this.fileIntercepter.intercept(context, next);
    }
    
}