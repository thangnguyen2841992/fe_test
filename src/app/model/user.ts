import {Role} from './role';

export interface User {
  id?: number;
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
  roles?: Role;
  token?: string;
  fullName?: string;
  avatar?: string;
}
