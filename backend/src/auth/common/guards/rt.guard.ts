import { UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class RtGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }
  handleRequest(err, user, info, context) {
    if (err || !user) {
        console.error('Guard Error:', err || info?.message || 'Unauthorized');
        throw err || new UnauthorizedException(info?.message);
    }
    return user;
}
}