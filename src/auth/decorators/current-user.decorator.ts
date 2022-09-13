import { createParamDecorator, SetMetadata } from '@nestjs/common';
import { IncomingMessage } from 'http';
import { getRequestFromContext } from '~/commons/utils';

export const CurrentUser = createParamDecorator((pick: string, context: any) => {
    const req = getRequestFromContext(context);
    const user = { ...req.user, id: req.user._id };
    return pick ? user[pick] : user;
})
