import { registerFaceDetection } from './face-detection/init';
import { registerSpeechService } from './speech/init';
import { registerAvatarService } from './avatar/init';

export function initializeServices() {
    registerFaceDetection();
    registerSpeechService();
    registerAvatarService();
}