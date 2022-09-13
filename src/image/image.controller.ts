import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";

@Controller('image')
export class ImageController{
    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
        console.log("file", file)
        return "upload ok"
    }


    @Post('/uploads')
    @UseInterceptors(FilesInterceptor('files'))
    uploadMultipleFile(@UploadedFiles() files: Array<Express.Multer.File>){
        console.log(files);
    }

    @Get('/:imagePath')
    getUploadedFile(@Res() response, @Param('imagePath') image) {
        return response.sendFile(image, {root: 'uploads'});
    }

}