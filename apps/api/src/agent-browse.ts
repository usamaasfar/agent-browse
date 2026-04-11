import { browse } from "@agent-browse/core";

export class AgentBrowse {
  async browse(query: string): Promise<string> {
    return browse(query);
  }
}
