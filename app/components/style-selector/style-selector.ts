import { Observable } from '@nativescript/core';

export class StyleSelector extends Observable {
    private _styles = [
        { id: '3d', name: '3D', preview: '~/assets/styles/3d.png' },
        { id: 'cartoon', name: 'Cartoon', preview: '~/assets/styles/cartoon.png' },
        { id: 'realistic', name: 'Realistic', preview: '~/assets/styles/realistic.png' }
    ];

    get styles() {
        return this._styles;
    }

    onStyleSelect(args) {
        const selectedIndex = args.index;
        this.notify({
            eventName: 'styleSelected',
            style: this._styles[selectedIndex]
        });
    }
}