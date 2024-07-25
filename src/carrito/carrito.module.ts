import { Module } from '@nestjs/common';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}