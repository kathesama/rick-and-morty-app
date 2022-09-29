import { User } from '../../models/User';

const Status = {
  FULFILLED: 'succeeded',
  LOADING: 'loading',
  REJECTED: 'failed',
  IDLE: 'idle',
};

const UserEmptyState: User = {
  name: '',
  gender: '',
  status: '',
};

export { Status, UserEmptyState };
