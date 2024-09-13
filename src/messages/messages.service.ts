import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    // Services is creating its own dependencies
    // DON'T TO THIS ON REAL APPS
    this.messagesRepository = new MessagesRepository();
  }

  findOne(id: number) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
