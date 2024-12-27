import { Observable } from '@nativescript/core';

export class SpeechService extends Observable {
    private speaking = false;

    async speak(text: string): Promise<void> {
        if (this.speaking) return;

        try {
            this.speaking = true;
            this.notifyPropertyChange('speaking', true);
            // Speech implementation
        } finally {
            this.speaking = false;
            this.notifyPropertyChange('speaking', false);
        }
    }

    stop(): void {
        if (!this.speaking) return;
        // Stop speech implementation
    }
}