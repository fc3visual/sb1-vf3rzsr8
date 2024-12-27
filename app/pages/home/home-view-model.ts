import { Observable } from '@nativescript/core';
import { AvatarService } from '../../services/avatar/avatar.service';
import { SpeechService } from '../../services/speech/speech.service';

export class HomeViewModel extends Observable {
    private avatarService: AvatarService;
    private speechService: SpeechService;

    constructor() {
        super();
        this.avatarService = new AvatarService();
        this.speechService = new SpeechService();
        this.initializeProperties();
    }

    private initializeProperties() {
        this.set('avatar', null);
        this.set('speechText', '');
        this.set('speaking', false);
    }

    async takePhoto() {
        // Camera implementation
    }

    async toggleSpeech() {
        if (this.get('speaking')) {
            this.speechService.stop();
        } else {
            await this.speechService.speak(this.get('speechText'));
        }
    }
}