import { Controller, Logger,Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
    private logger = new Logger("UserController");
    constructor(private userService: UserService){}

    @Get()
    async showUsers(){
        const user = await this.userService.showAll();
        return(user);
    }

    @Post()
    async create(@Body() formData: UserEntity): Promise<any> {
      return this.userService.create(formData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: UserEntity): Promise<any> {
        userData.id = Number(id);
        console.log('Update #' + userData.id)
        return this.userService.update(id,userData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    }  
    
}
