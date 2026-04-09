import { fetch, search } from "@agent-browse/core";

export class AgentBrowse {
  async search(query: string): Promise<string> {
    return search(query);
  }

  async fetch(query: string, links: string[]): Promise<string> {
    return fetch(query, links);
  }
}
