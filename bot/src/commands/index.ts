import {Command} from "../models/command";
import deploy from "./deploy";
import ping from "./ping";

export const commands: Map<string, Command> = new Map<string, Command>([
  ["deploy", deploy],
  ["ping", ping],
]);
