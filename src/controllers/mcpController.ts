import { Request, Response } from "express";

export const entry = (req: Request, res: Response) => {
  const { id, method, params } = req.body;

  switch (method) {
    case "initialize":
      res.json(initialize(id));
      break;

    case "resources/list":
      res.json(ressourcesList(id));
      break;

    case "resources/read":
      res.json(ressourcesRead(id, params.uri));
      break;

    default:
      res.json({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: "Method not found" },
      });
  }
};

const initialize = (id: number) => {
  return {
    jsonrpc: "2.0",
    id,
    result: {
      protocolVersion: "2025-06-18",
      capabilities: {
        resources: { listChanged: false },
        tools: { listChanged: false },
      },
      serverInfo: {
        name: "tramway-mcp",
        version: "1.0.0",
      },
    },
  };
};

const ressourcesList = (id: number) => {
  return {
    jsonrpc: "2.0",
    id,
    result: {
      resources: [
        {
          uri: "file:///stations.md",
          name: "stations.md",
          title: "Liste des stations de tramway de Montpellier",
          description: "Liste des stations de tramway de Montpellier",
          mimeType: "text/markdown",
        },
      ],
    },
  };
};

const ressourcesRead = (id: number, uri: string) => {
  return {
    jsonrpc: "2.0",
    id,
    result: {
      contents: [
        {
          uri,
          name: "stations.md",
          title: "Liste des stations de tramway de Montpellier",
          mimeType: "text/markdown",
          text: "-Antigone\n- Corum\n- Comédie\n- Gare Saint-Roch\n- Odysseum\n- Pérols Étang de l'Or\n- Port Marianne\n- Saint-Denis\n- Saint-Paul\n",
        },
      ],
    },
  };
};
