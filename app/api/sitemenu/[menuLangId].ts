import axios from "axios"
import { ResponseError, SiteMenu } from "@/interfaces"
import { NextApiRequest, NextApiResponse } from "next"

const apiURL = process.env.NEXT_PUBLIC_API_URL
const apiSiteMenu = `${apiURL}/sitemenu`

export default async function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<SiteMenu | ResponseError>
) {
  const { query } = req
  const { id } = query

  const result = await axios.get(apiSiteMenu)
  const data: SiteMenu[] = result.data
  const sitemenu = data.find((p) => p.menuLangId === Number(id))

  return sitemenu
    ? res.status(200).json(sitemenu)
    : res.status(404).json({ message: `SiteMenu with id: ${id} not found.` })
}
