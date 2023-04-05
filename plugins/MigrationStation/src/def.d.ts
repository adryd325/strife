export interface BackupOptions {
    plugins?: boolean;
    pluginData?: boolean;
    themes?: boolean;
    vendetta?: boolean;
}

export interface VendettaBackup {
    settings: Settings;
    loaderConfig?: LoaderConfig;
}

export interface PluginBackup extends Plugin { storage?: object; }

export interface Backup {
    vendetta?: {
        settings: Settings;
        loaderConfig: LoaderConfig;
    };
    plugins?: Record<string, PluginBackup>;
    themes?: Record<string, Theme>;
}

export interface OptionSwitch {
    label: string;
    subLabel?: string;
    icon?: string;
    setting: string;
    depends?: string;
    action?: (v: boolean) => void;
}