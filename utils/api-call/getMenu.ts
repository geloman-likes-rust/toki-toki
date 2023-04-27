type Menu = {
  id: number
  image: number
  category: number
  param: number
}[]

export default async function getMenu(): Promise<Menu> {
  const response = await fetch("https://api-tokyo-tokyo-menu.vercel.app/menu")
  const { data } = await response.json()
  return data
}
