import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DON'T DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll(); // findAll is a method of MessagesService
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content); // content is a property of CreateMessageDto
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(parseInt(id)); // findOne is a method of MessagesService

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
