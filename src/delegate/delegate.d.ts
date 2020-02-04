import { TnsOAuthClient } from "../index";

export declare class TnsOAuthClientAppDelegate {
  public static setConfig(client: TnsOAuthClient, urlScheme: string);
  public static handleIncomingUrl(url: NSURL): boolean;
}
