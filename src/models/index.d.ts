export interface RouteConfig {
  name?: string
  title?: string
  icon?: React.ReactNode
  path?: string
  authority?: boolean
  component?: string
  exact?: boolean
  redirect?: string
  hide?: boolean
  children?: RouteConfig[]
}
