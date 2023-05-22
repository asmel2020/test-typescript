"use strict";

/* import * as Minio from "minio";
import * as fs from "fs"; */
import { LightsailClient, AllocateStaticIpCommand } from "@aws-sdk/client-lightsail";
(async () => {
const client = new LightsailClient({
    region: "us-east-1",
    credentials: {
        accessKeyId: "accessKeyId",
      secretAccessKey:"secretAccessKey"
    },
    

   });
})();
