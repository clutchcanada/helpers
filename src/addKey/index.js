import { v4 } from 'uuid';

export default item => ({
  item,
  key: v4(),
});
