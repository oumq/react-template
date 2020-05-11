export interface RouteConfig {
  name?: string
  title?: string
  icon?: React.ReactNode
  path?: string
  authority?: string[] | string
  component?: string
  exact?: boolean
  redirect?: string
  hide?: boolean
  children?: RouteConfig[]
}
