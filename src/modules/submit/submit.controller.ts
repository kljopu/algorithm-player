import { Controller } from '@nestjs/common';
import { MyLoggerService } from '../../utils/my-logger/my-logger.service';
import { SubmitService } from './submit.service';

@Controller('/submit')
export class SubmitController {
  constructor(private readonly submitService: SubmitService) {}

  public async submit() {}
}
