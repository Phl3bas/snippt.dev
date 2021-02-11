import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetSnippetsArgs {
  @Field(() => [String])
  @IsArray()
  ids: string[];
}
