import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors} from "@nestjs/common";
import { ImageIntercepter } from "src/common/custom_intercepter/image.intercepter";

@Controller('image')
export class ImageController{
    @Post('/upload')
    @UseInterceptors(new ImageIntercepter('file'))
    uploadSingleFile(@UploadedFile() file: Express.Multer.File) {
        return file.destination, file.filename
    }


    @Post('/uploads')
    @UseInterceptors(new ImageIntercepter('files'))
    uploadMultipleFile(@UploadedFiles() files: Array<Express.Multer.File>){
        return files[0].destination
    }

    @Get('/:imagePath')
    getUploadedFile(@Res() response, @Param('imagePath') image) {
        return response.sendFile(image, {root: 'uploads'});
    }

}