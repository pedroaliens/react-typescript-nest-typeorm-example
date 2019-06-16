import { Controller, Get } from '@nestjs/common'

@Controller({ path: '/users' })
export class UsersController {
  @Get()
  index(): string {
    return 'test'
  }
}
