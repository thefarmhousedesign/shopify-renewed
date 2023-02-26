import {ExtensionTypes, ExternalExtensionTypes} from '../../../../constants.js'
import {NewExtensionPointSchemaType} from '../../../../models/extensions/schemas.js'
import {Localization} from '../localization.js'

export interface ExtensionsPayloadInterface {
  app: {
    apiKey: string
  }
  store: string
  extensions: UIExtensionPayload[]
}

export interface ExtensionsEndpointPayload extends ExtensionsPayloadInterface {
  version: string
  root: {
    url: string
  }
  devConsole: {
    url: string
  }
  socket: {
    url: string
  }
}

interface NewExtensionPointSchema extends NewExtensionPointSchemaType {
  main: {
    url: string
  }
}

export interface UIExtensionPayload {
  assets: {
    main: {
      name: string
      url: string
      lastUpdated: number
    }
  }
  capabilities?: Capabilities
  development: {
    resource: {
      url?: string
    }
    root: {
      url: string
    }
    hidden: boolean
    status: ExtensionAssetBuildStatus
    localizationStatus: ExtensionAssetBuildStatus
  }
  extensionPoints: string[] | null | NewExtensionPointSchema[]
  localization: Localization | null
  categories: string[] | null
  authenticatedRedirectStartUrl?: string
  authenticatedRedirectRedirectUrls?: string[]
  metafields?: {namespace: string; key: string}[] | null
  type: ExtensionTypes
  externalType: ExternalExtensionTypes
  uuid: string
  version?: string
  surface: string
  title: string
  approvalScopes: string[]
}

export type ExtensionAssetBuildStatus = 'success' | 'error' | ''

export interface Capabilities {
  [key: string]: boolean | undefined
}
