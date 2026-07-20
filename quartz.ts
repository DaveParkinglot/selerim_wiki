// Sets Recent Notes component to only load on Index page //

import { registerCondition } from "./quartz/plugins/loader/conditions"
registerCondition("index-only", (props) => props.fileData.slug === "index")
//

import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

