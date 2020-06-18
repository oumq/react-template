import LayoutStore from './LayoutStore'
import UserStore from './UserStore';

const layoutStore = new LayoutStore()
const userStore = new UserStore()

export const Store = {
  layoutStore,
  userStore
}
