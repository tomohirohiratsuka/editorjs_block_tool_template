import {API, BlockTool, BlockToolConstructorOptions, OutputData} from '@editorjs/editorjs';
import { MenuConfigItem} from "@editorjs/editorjs/types/tools";
import './styles.css';
import {BlockToolData} from "@editorjs/editorjs/types/tools/block-tool-data";


// rename CustomPlugin to your plugin name
type CustomPluginConstructorOptions = BlockToolConstructorOptions<CustomPluginData, CustomPluginConfig>
export default class CustomPlugin implements BlockTool {
    private api: API;
    private data: CustomPluginData;
    private config: CustomPluginConfig
    private nodes: CustomPluginNodeMap;


    constructor({data, api, config, readOnly , block}: CustomPluginConstructorOptions) {
        this.api = api;
        this.config = {}
        this.data = {};
        this.nodes = {}
    }

    static get toolbox() {
        //tool names can be translated via toolNames
        return {
            title: 'Custom Plugin',
            icon: '<span>📝</span>',
        };
    }

    render() {
        //todo: render the block
        // return this.nodes.container;
        return document.createElement('div');
    }

    save(block: HTMLElement): BlockToolData{
        //todo: save the block
        // return this.data
    }

    renderSettings(): MenuConfigItem[] {
        return [
            {
                icon: `<span>😎</span>`,
                label: this.api.i18n.t('Something'),
                children: {
                    items: [
                        {
                            icon: ``,
                            title: this.api.i18n.t('Something'),
                            children: {
                                items: [
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Something'),
                                        onActivate: () => {
                                            //do something
                                        }
                                    },
                                ]
                            }
                        },
                    ]
                }
            },
        ];
    }

    /**
     * Notify core that read-only mode is supported
     */
    public static get isReadOnlySupported(): boolean {
        return true;
    }


}
