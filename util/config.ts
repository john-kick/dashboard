import ConfigurationError from "./ConfigurationError";

enum ConfigType {
  STRING,
  NUMBER,
}

type Directive = {
  key: string;
  type: ConfigType;
  optional: boolean;
};

/*
 *  Also adapt the Config type when adapting
 */
const expectedKeys: Directive[] = [
  {
    key: "NEXTAUTH_URL",
    type: ConfigType.STRING,
    optional: false,
  },
  {
    key: "NEXTAUTH_SECRET",
    type: ConfigType.STRING,
    optional: false,
  },
  {
    key: "AUTH_TWITCH_ID",
    type: ConfigType.STRING,
    optional: false,
  },
  {
    key: "AUTH_TWITCH_SECRET",
    type: ConfigType.STRING,
    optional: false,
  },
];

const config: Record<string, string | number> = {};

expectedKeys.forEach(({ key, type, optional }) => {
  if (!process.env[key]) {
    if (!optional) {
      throw new ConfigurationError(key, "Key is not set");
    } else {
      return;
    }
  }

  switch (type) {
    case ConfigType.STRING:
      if (typeof process.env[key] !== "string") {
        throw new ConfigurationError(key, "Must be a string.");
      }
      config[key] = process.env[key];
      break;
    case ConfigType.NUMBER:
      if (isNaN(+process.env[key])) {
        throw new ConfigurationError(key, "Must be a number.");
      }
      config[key] = +process.env[key];
      break;
    default:
      throw new ConfigurationError(key, "Unknown type");
  }
});

/*
 *  Has to be adapted with the expectedKeys array
 */
export type Config = {
  NEXTAUTH_URL: string;
  NEXTAUTH_SECRET: string;
  AUTH_TWITCH_ID: string;
  AUTH_TWITCH_SECRET: string;
};

export default config as Config;
