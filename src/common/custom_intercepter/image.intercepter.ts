import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
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
        const destination = `./${folderName}`;
        const multerOptions: MulterOptions = {
            storage: diskStorage({
                destination
            })
        }
        this.fileIntercepter = new (FileInterceptor(this.fieldName, multerOptions));
        return this.fileIntercepter.intercept(context, next);
    }
    
}