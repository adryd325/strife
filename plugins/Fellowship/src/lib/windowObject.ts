import { plugin } from "@vendetta";
import { General, Forms } from "@vendetta/ui/components";
import * as metro from "./api/metro";
import * as common from "./api/metro/common";
import * as patcher from "./api/patcher";
import * as utilities from "./api/utilities";
import * as native from "./api/native";
import * as assets from "./api/assets";

export default () => {
    globalThis.enmity = {
        modules: { ...metro, common: common },
        patcher,
        version: `Fellowship ${plugin.manifest.hash.slice(7)}`,
        utilities,
        components: { ...General, ...Forms },
        native,
        assets,
    };

    return () => delete globalThis.enmity;
}