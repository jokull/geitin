import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

import * as build from "../build";

addEventListener("fetch", createPagesFunctionHandler({ build }));
