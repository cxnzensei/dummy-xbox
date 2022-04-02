import Icon from "@mdi/react"
import { mdiEmailOutline, mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js"
const Handles = () => {
  return (
    <div className="flex text-sm space-x-4 py-5 container mx-auto px-4 items-center">
      <div>Follow Xbox</div>
      <Icon path={mdiEmailOutline} size={1} />
      <Icon path={mdiFacebook} size={1} />
      <Icon path={mdiTwitter} size={1} />
      <Icon path={mdiInstagram} size={1} />
    </div>
  )
}

export default Handles
