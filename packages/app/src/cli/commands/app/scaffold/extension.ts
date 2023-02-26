import AppGenerateExtension from '../generate/extension.js'
import {output} from '@shopify/cli-kit'

class AppScaffoldExtension extends AppGenerateExtension {
  static description = 'Scaffold an Extension'
  static hidden = true
  public async run(): Promise<void> {
    output.warn(
      output.content`The command ${output.token.genericShellCommand(
        `scaffold`,
      )} has been deprecated in favor of ${output.token.genericShellCommand(`generate`)} and will be eventually deleted.
You might need to update the ${output.token.genericShellCommand(`scaffold`)} script in the project's package.json.\n`,
    )
    await super.run()
  }
}

export default AppScaffoldExtension
