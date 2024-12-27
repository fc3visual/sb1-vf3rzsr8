export interface Avatar {
    id: string;
    imageUrl: string;
    name: string;
    style: '3d' | 'cartoon' | 'realistic';
    voice: {
        id: string;
        name: string;
        language: string;
    };
    customization: {
        hairColor: string;
        skinTone: string;
        eyeColor: string;
        accessories: string[];
    };
}