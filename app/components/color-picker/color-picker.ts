import { Observable } from '@nativescript/core';

export class ColorPicker extends Observable {
    private _colors = [
        '#000000', '#4A4A4A', '#A52A2A', 
        '#DAA520', '#FF4500', '#FFD700'
    ];

    get colors() {
        return this._colors;
    }

    onColorSelect(args) {
        const color = this._colors[args.index];
        this.notify({
            eventName: 'colorSelected',
            color
        });
    }
}