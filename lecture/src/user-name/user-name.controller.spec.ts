import { Test, TestingModule } from '@nestjs/testing';
import { UserNameController } from './user-name.controller';

describe('UserNameController', () => {
  let controller: UserNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserNameController],
    }).compile();

    controller = module.get<UserNameController>(UserNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
