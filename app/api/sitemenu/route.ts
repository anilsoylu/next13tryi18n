import { NextResponse, NextRequest } from "next/server"
import axios from "axios"
import { SiteMenu } from "@/interfaces"

const apiURL = process.env.NEXT_PUBLIC_API_URL
const apiSiteMenu = `${apiURL}/sitemenu`

export async function GET(req: Request, res: NextResponse) {
  try {
    const result = await axios.get(apiSiteMenu)
    const data: SiteMenu[] = result.data

    if (!Array.isArray(data)) {
      throw new Error("Cannot find menu data")
    }

    let filteredMenus = data
      .filter((menu: any) => menu.isActived === true)
      .sort(
        (a: any, b: any) => a.sortOrder - b.sortOrder || a.menuId - b.menuId
      )

    const menusWithSubmenus = filteredMenus.map((menu) => {
      const submenus = data
        .filter(
          (submenu) =>
            (submenu.menuLangId === Number(menu.menuLangId) &&
              submenu.isActived === true &&
              submenu.menuCategoryId === menu.menuId) ||
            (submenu.menuMainCategoryLink === menu.menuLink &&
              submenu.menuCategoryId !== 0)
        )
        .sort((a, b) => a.sortOrder - b.sortOrder)

      return {
        ...menu,
        submenus,
      }
    })

    return NextResponse.json({ data: menusWithSubmenus })
  } catch (err: any) {
    console.log(`Error: ${err.message}`)
  }
}
