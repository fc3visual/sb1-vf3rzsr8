export interface AvatarStyle {
    id: string;
    name: string;
    preview: string;
}

export interface AvatarCustomization {
    hairColor: string;
    skinTone: string;
    accessories: string[];
}

export interface Avatar {
    id: string;
    style: AvatarStyle;
    customization: AvatarCustomization;
    imageUrl: string;
}