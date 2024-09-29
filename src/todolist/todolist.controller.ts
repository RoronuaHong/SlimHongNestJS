import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('todolist')
export class TodolistController {
  @Get()
  getEvents() {
    return [{
      title: 'title',
      ['待完成']: [],
      ['进行中']: [],
      ['已完成']: []
    }];
  }

  @Post()
  setEvents(@Body() setEventsDto: {
    title: string;
    ['待完成']: string[];
    ['进行中']: string[];
    ['已完成']: string[];
  }) {
    return { id: Date.now(), title: setEventsDto.title };
  }
}
