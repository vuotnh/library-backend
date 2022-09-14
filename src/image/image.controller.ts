import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { createVerify } from "crypto";
import { diskStorage } from "multer";
import { ImageIntercepter } from "src/common/custom_intercepter/image.intercepter";

@Controller('image')
export class ImageController{
    @Post('/upload')
    @UseInterceptors(new ImageIntercepter('file'))
    uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
        return "upload ok"
    }


    @Post('/uploads')
    @UseInterceptors(new ImageIntercepter('files'))
    uploadMultipleFile(@UploadedFiles() files: Array<Express.Multer.File>){
        return "upload ok"
    }

    @Get('/:imagePath')
    getUploadedFile(@Res() response, @Param('imagePath') image) {
        return response.sendFile(image, {root: 'uploads'});
    }

}