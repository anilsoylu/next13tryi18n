import { SiteLanguage } from "@/interfaces"
import { NextApiResponse, NextApiRequest } from "next"
import axios from "axios"

const apiURL = process.env.NEXT_PUBLIC_API_URL
const apiSiteLanguage = `${apiURL}/sitelanguage`

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<SiteLanguage[]>
) {
  const result = await axios.get(apiSiteLanguage)
  const data: SiteLanguage[] = result.data

  return res.status(200).json(data)
}
