import { registerElement } from '@nativescript/core';

export function registerElements() {
  registerElement(
    'avatar-preview',
    () => require('./components/avatar-preview/avatar-preview').AvatarPreview
  );
  registerElement(
    'avatar-editor',
    () => require('./components/avatar-editor/avatar-editor').AvatarEditor
  );
  registerElement(
    'style-selector',
    () => require('./components/style-selector/style-selector').StyleSelector
  );
  registerElement(
    'color-picker',
    () => require('./components/color-picker/color-picker').ColorPicker
  );
}
