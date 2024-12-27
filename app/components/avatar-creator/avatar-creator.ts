import { Observable } from '@nativescript/core';
import { AvatarGeneratorService } from '../../services/avatar-generator.service';
import { FaceDetectionService } from '../../services/face-detection.service';
import { SpeechService } from '../../services/speech.service';

export class AvatarCreatorViewModel extends Observable {
    private avatarGenerator: AvatarGeneratorService;
    private faceDetection: FaceDetectionService;
    private speechService: SpeechService;

    constructor() {
        super();
        this.avatarGenerator = new AvatarGeneratorService();
        this.faceDetection = new FaceDetectionService();
        this.speechService = new SpeechService();
        
        this.initializeProperties();
    }

    private initializeProperties() {
        this.set('currentAvatar', '~/assets/default-avatar.png');
        this.set('styles', ['3D', 'Cartoon', 'Realistic']);
        this.set('selectedStyle', 0);
        this.set('hairColor', '#000000');
        this.set('accessories', [
            { name: 'Glasses', selected: false },
            { name: 'Hat', selected: false },
            { name: 'Earrings', selected: false }
        ]);
        this.set('speechText', '');
        this.set('isSpeaking', false);
    }

    async takePhoto() {
        // Camera integration would go here
    }

    async uploadPhoto() {
        // File picker integration would go here
    }

    async toggleSpeech() {
        if (this.get('isSpeaking')) {
            // Stop speaking
            this.set('isSpeaking', false);
        } else {
            this.set('isSpeaking', true);
            try {
                await this.speechService.speak(this.get('speechText'));
            } finally {
                this.set('isSpeaking', false);
            }
        }
    }

    async saveAvatar() {
        // Save avatar logic would go here
    }

    onAccessoryTap(args) {
        const accessories = this.get('accessories');
        accessories[args.index].selected = !accessories[args.index].selected;
        this.notifyPropertyChange('accessories', accessories);
    }
}