import { observable, action, configure } from 'mobx'

export interface LayoutModel {
  // 菜单栏
  collapsed: boolean
  toggle(): void
}

configure({ enforceActions: 'observed' })
class LayoutStore implements LayoutModel{
  
  @observable collapsed: boolean = false

  @action toggle = (): void => {
    this.collapsed = !this.collapsed
  }

}

export default LayoutStore
