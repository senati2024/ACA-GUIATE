import { Controller, Get, Post, Body, Param, Render, Res, Redirect, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Response } from 'express';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  @Render('categoria-list')
  async findAll() {
    const categorias = await this.categoriaService.findAll();
    return { categorias };
  }

  @Get('edit/:id')
  @Render('categoria-edit')
  async edit(@Param('id') id: string) {
    const categoria = await this.categoriaService.findOne(id);
    return { categoria };
  }

  @Post('edit/:id')
  async update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto, @Res() res: Response) {
    await this.categoriaService.update(id, updateCategoriaDto);
    return res.redirect('/categorias');
  }

  @Post()
  async create(@Body() createCategoriaDto: CreateCategoriaDto, @Res() res: Response) {
    await this.categoriaService.create(createCategoriaDto);
    return res.redirect('/categorias');
  }

  @Post('delete/:id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    await this.categoriaService.remove(id);
    return res.redirect('/categorias');
  }
}
