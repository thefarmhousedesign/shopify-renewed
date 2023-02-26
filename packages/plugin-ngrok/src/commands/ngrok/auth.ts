import {authenticate} from '../../tunnel.js'
import {output} from '@shopify/cli-kit'
import {Command} from '@oclif/core'

export default class NgrokAuth extends Command {
  static description =
    'Saves a token to authenticate against ngrok. Visit https://dashboard.ngrok.com/signup to create an account.'

  static args = [{name: 'token'}]

  async run() {
    const {args} = await this.parse(NgrokAuth)
    await authenticate(args.token)
    output.success('Auth token saved')
  }
}
